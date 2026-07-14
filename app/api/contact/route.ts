import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// ── Field limits ─────────────────────────────────────────────────────────
// Hard caps enforced server-side (the only place a cap actually matters —
// anything client-side, like an input's maxLength, is just a UX nicety and
// can be bypassed by posting to the API directly).
const LIMITS = {
  name: 100,
  company: 100,
  email: 254, // RFC 5321 max mailbox length
  phone: 30,
  service: 120,
  message: 5000,
};

// Minimum time a real visitor needs between the form rendering and
// submitting it. Bots that fill and submit a form instantly are the
// common case this catches; a human filling out name/email/message takes
// several seconds at minimum.
const MIN_FILL_TIME_MS = 1500;
// Reject stale/replayed submissions built from a page loaded too long ago.
const MAX_FILL_TIME_MS = 1000 * 60 * 60 * 2; // 2 hours

// ── Best-effort in-memory rate limit ────────────────────────────────────
// Caps submissions per IP. This resets whenever the server process
// restarts/cold-starts and is per-instance (not shared across a
// multi-instance deployment), so treat it as one layer of defense, not a
// complete guarantee — for a hardened, load-balanced deployment, move this
// to a shared store (e.g. Upstash Redis) or a provider-level rate limiter
// (Vercel Firewall, Cloudflare, etc.).
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // submissions per window, per IP
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);

  // Opportunistic cleanup so the map doesn't grow unbounded on a
  // long-running instance.
  if (hits.size > 5000) {
    for (const [key, val] of hits) {
      if (val.every((t) => now - t > RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }

  return timestamps.length > RATE_LIMIT_MAX;
}

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Strips CR/LF and other control characters so nothing in these fields can
// break out of its intended slot — most importantly the subject line, which
// is built from `name`/`company` via string interpolation. Resend's API
// takes JSON rather than a raw SMTP header block, but stripping control
// characters here is a cheap, defensive extra layer regardless of how the
// provider's API handles it internally.
function sanitize(value: string, maxLen: number) {
  return value.replace(/[\r\n\t\x00-\x1F\x7F]/g, " ").trim().slice(0, maxLen);
}

function isSameOrigin(req: NextRequest): boolean {
  const expected = req.nextUrl.origin;
  const origin = req.headers.get("origin");
  if (origin) return origin === expected;

  // Some legitimate same-origin requests omit Origin; fall back to Referer.
  const referer = req.headers.get("referer");
  if (referer) {
    try {
      return new URL(referer).origin === expected;
    } catch {
      return false;
    }
  }

  // Neither header present — most real browser submissions send at least
  // one of these, so treat a request with neither as suspicious.
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // ── Origin check (lightweight CSRF / direct-API-abuse guard) ────────
    if (!isSameOrigin(req)) {
      return NextResponse.json({ error: "Request rejected." }, { status: 403 });
    }

    // ── Rate limit ───────────────────────────────────────────────────────
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // ── Bot traps: honeypot field + minimum fill time ───────────────────
    // "website" is a hidden field real visitors never see or fill; a
    // filled-in value means a bot filled every field it could find.
    const honeypot = String(body.website || "").trim();
    const formRenderedAt = Number(body.ts);
    const elapsed = Date.now() - formRenderedAt;
    const looksAutomated =
      honeypot.length > 0 ||
      !Number.isFinite(formRenderedAt) ||
      elapsed < MIN_FILL_TIME_MS ||
      elapsed > MAX_FILL_TIME_MS;

    if (looksAutomated) {
      // Respond as if it succeeded rather than explaining why it didn't —
      // telling a bot exactly what tripped the check just teaches it to
      // avoid that check next time.
      console.log("[contact] Discarded suspected automated submission", { ip });
      return NextResponse.json({ ok: true, delivered: false });
    }

    const name = sanitize(String(body.name || ""), LIMITS.name);
    const company = sanitize(String(body.company || ""), LIMITS.company);
    const email = String(body.email || "").trim().slice(0, LIMITS.email);
    const phone = sanitize(String(body.phone || ""), LIMITS.phone);
    const service = sanitize(String(body.service || ""), LIMITS.service);
    const message = String(body.message || "").trim().slice(0, LIMITS.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || "info@noviqa.ae";
    const from = process.env.CONTACT_FROM_EMAIL || "Noviqa Website <onboarding@resend.dev>";
    const apiKey = process.env.RESEND_API_KEY;

    const html = `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>New enquiry from noviqa.ae</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || "Not specified")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    if (!apiKey) {
      // No email provider configured yet — log so nothing is lost during local
      // testing, and let the form still report success to the user.
      console.log("[contact] RESEND_API_KEY not set — submission received:", {
        name,
        company,
        email,
        phone,
        service,
        message,
      });
      return NextResponse.json({ ok: true, delivered: false });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please try emailing us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Unexpected error. Please try again in a moment." },
      { status: 500 }
    );
  }
}
