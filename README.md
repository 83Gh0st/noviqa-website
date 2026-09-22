# Noviqa Management Services — Website

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-Proprietary-lightgrey)

Marketing site for **Noviqa Management Services LLC** (receivables management, claims coordination, and debt recovery support for businesses across the GCC). Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Three routes — Home, About, Contact — plus a server-side contact form endpoint, and is deployed on Vercel.

## Tech stack

| | |
|---|---|
| Framework | Next.js 15 (App Router), React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS, Framer Motion |
| Fonts | Fraunces (display), Inter (body), IBM Plex Mono — via `@fontsource` |
| Email | Nodemailer over Zoho Mail SMTP |
| Hosting | Vercel |

## Getting started

Requires Node.js 18.18+ (20 LTS recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Without SMTP credentials configured (see [Environment variables](#environment-variables)), contact form submissions are logged to the server console instead of sent — useful for local development without touching the live mailbox.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run `next lint` |

## Project structure

```
app/
  layout.tsx           Root layout — fonts, metadata, CSP headers via next.config.mjs
  page.tsx              Home
  about/page.tsx         About
  contact/page.tsx        Contact
  api/contact/route.ts     Contact form handler (validation, anti-abuse, Zoho SMTP send)
  sitemap.ts             Sitemap generation
components/             Page sections (Hero, Services, Nav, Footer, ContactForm, ...)
lib/
  utils.ts              Site config — company details, contact info, address
  images.ts              Unsplash image IDs used across the site
public/                 Static assets — logo variants, flags, images
```

To edit page copy, open the relevant file in `components/`. To edit contact details (email, phone, WhatsApp, address), edit `lib/utils.ts`.

## Environment variables

Copy `.env.example` to `.env.local` for local development, and set the same values in Vercel → Project → Settings → Environment Variables for production.

| Variable | Required | Description |
|---|---|---|
| `ZOHO_SMTP_USER` | Yes | Zoho Mail mailbox the contact form sends through, e.g. `info@noviqa.ae`. Requires SMTP access enabled (paid Zoho Mail plan) and an app-specific password if 2FA is on. |
| `ZOHO_SMTP_PASS` | Yes | App-specific password for that mailbox. |
| `ZOHO_SMTP_HOST` | No | Defaults to `smtppro.zoho.com`. Override only if the account is on a different Zoho data center (e.g. `smtppro.zoho.eu`). |
| `ZOHO_SMTP_PORT` | No | Defaults to `587` (STARTTLS). Use `465` for implicit SSL. |
| `CONTACT_TO_EMAIL` | No | Inbox that receives enquiries. Defaults to `ZOHO_SMTP_USER`. |

## Contact form

`app/api/contact/route.ts` sends mail via **Nodemailer over Zoho SMTP** (not a third-party email API). It also enforces, server-side:

- Same-origin check (Origin/Referer) as a lightweight CSRF guard
- Per-IP rate limiting (in-memory, resets on cold start — swap for a shared store such as Upstash Redis in a multi-instance deployment)
- Honeypot field + minimum/maximum fill-time checks to filter automated submissions
- Field length limits and control-character sanitization (SMTP header-injection prevention)
- Server-side email format validation

Because Zoho requires the `From` address to match the authenticated mailbox, outgoing mail is always sent as `ZOHO_SMTP_USER`, with `replyTo` set to the submitter's address.

## Design system

Colors, fonts, and spacing are defined once in `tailwind.config.ts` and consumed everywhere via Tailwind tokens — update there rather than in individual components.

- **Colors** — `navy` (primary, incl. `deep`/`mid`/`light` shades) and `emerald` (accent), sampled from the Noviqa logo, plus `ivory`, `paper`, `ink`, and `mist` for surfaces and text.
- **Fonts** — `font-display` (Fraunces), `font-sans` (Inter), `font-mono` (IBM Plex Mono).
- **Logo** — `public/logo-mark.png` (transparent, for navy surfaces), `public/logo-badge.png` (navy background intact), `app/icon.png` (favicon). Replacing these with same-named files is sufficient if a vector source becomes available later.
- **Photography** — sourced from Unsplash under the [Unsplash License](https://unsplash.com/license) (free commercial use, no attribution required), pinned by ID in `lib/images.ts`. `next.config.mjs` restricts remote images to `images.unsplash.com`. To use custom photography, drop files in `public/images/` and update the relevant `<Image src>`.

## Security headers

`next.config.mjs` sets a locked-down `Content-Security-Policy` (relaxed only for `next dev`'s Fast Refresh/HMR), plus `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and HSTS.

## Deployment

Deployed on Vercel, auto-detected as a standard Next.js project.

1. Push to a Git repository and import it into Vercel.
2. Add the variables from [Environment variables](#environment-variables) under Project → Settings → Environment Variables.
3. Deploy. Vercel redeploys automatically on every push to the connected branch.

**Domain:** `noviqa.ae` is registered at **tasjeel.ae**; DNS is pointed at Vercel via an A record (root) and a CNAME (`www`). Add `noviqa.ae` and `www.noviqa.ae` under Project → Settings → Domains in Vercel and use the exact record values it shows (they're occasionally updated) at the tasjeel.ae DNS panel.

## License

Proprietary — see [`LICENSE.md`](./LICENSE.md). Source code, architecture, and reusable components remain the property of the author; a perpetual, non-exclusive license is granted to Noviqa Management Services LLC to operate the site. Website content, logos, and branding belong to Noviqa Management Services LLC.