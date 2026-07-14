"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, ArrowUpRight } from "lucide-react";

const services = [
  "Commercial Receivables Management",
  "Insurance & Corporate Claims Coordination",
  "Legal Recovery Coordination",
  "Business Support Solutions",
  "Not sure yet, happy to discuss",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const renderedAt = useRef(Date.now());

  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    data.ts = String(renderedAt.current);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-navy rounded-sm p-10 text-center"
      >
        <CheckCircle2 className="w-10 h-10 text-emerald-bright mx-auto" strokeWidth={1.5} />
        <h3 className="mt-5 font-display text-2xl text-ivory">Message sent</h3>
        <p className="mt-3 text-mist leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. A member of the Noviqa team will get back
          to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-emerald-bright text-sm underline underline-offset-4 hover:text-emerald"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      {/* Honeypot — hidden from real visitors (off-screen, not display:none
          so it still "renders" for simple scripted bots that skip
          display:none fields), never intended to be filled in by a human.
          If it comes back non-empty, the submission is treated as spam. */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
      >
        <label htmlFor="website">Leave this field empty</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <Field label="Full name" name="name" required autoComplete="name" maxLength={100} />
        <Field label="Company name" name="company" autoComplete="organization" maxLength={100} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <Field label="Email" name="email" type="email" required autoComplete="email" maxLength={254} />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" maxLength={30} />
      </div>

      <div>
        <label htmlFor="service" className="block text-[0.8rem] text-ink-soft mb-2">
          Which service are you interested in?
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="w-full bg-paper border border-navy/15 rounded-sm px-4 py-3 text-sm text-ink focus:border-emerald outline-none transition-colors"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-[0.8rem] text-ink-soft mb-2">
          Tell us a little about your situation
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder="e.g. approximate outstanding amount, number of accounts, how long they've been overdue..."
          className="w-full bg-paper border border-navy/15 rounded-sm px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-emerald outline-none transition-colors resize-none"
        />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-red-700"
          >
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-ivory text-sm font-medium tracking-wide hover:bg-navy-mid hover:-translate-y-0.5 hover:shadow-card active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:hover:translate-y-0 w-full sm:w-auto justify-center"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending
          </>
        ) : (
          <>
            Send message
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[0.8rem] text-ink-soft mb-2">
        {label}
        {required && <span className="text-emerald-dim"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        className="w-full bg-paper border border-navy/15 rounded-sm px-4 py-3 text-sm text-ink focus:border-emerald outline-none transition-colors"
      />
    </div>
  );
}
