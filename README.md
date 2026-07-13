# Noviqa Management Services — Website

A premium, mobile-first marketing website for Noviqa Management Services LLC, built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Includes three pages — Home, About Us, Contact — a working contact form API route, a WhatsApp click-to-chat button, and is ready to deploy to **Vercel**.

Placeholder contact details are used throughout (email, phone, WhatsApp number) — see **Step 6** to replace them with the real ones before launch.

---

## 1. Prerequisites

You only need one thing installed: **Node.js** (version 18.18 or newer — 20 LTS is recommended).

- Download it from [nodejs.org](https://nodejs.org) (choose the "LTS" version) and run the installer.
- Confirm it worked by opening a terminal (Command Prompt / Terminal / PowerShell) and running:
  ```bash
  node -v
  npm -v
  ```
  Both should print a version number.

---

## 2. Run it locally (test before deploying)

1. Unzip the project folder and open a terminal inside it (`cd path/to/noviqa-website`).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local dev server:
   ```bash
   npm run dev
   ```
4. Open **http://localhost:3000** in your browser. You should see the site with the Home, About, and Contact pages navigable from the top menu.
5. Try the contact form on the `/contact` page. Without any extra setup, submissions won't be *emailed* yet, but they will print in the terminal where `npm run dev` is running (look for a line starting with `[contact]`) — this confirms the form is wired up correctly end to end. Step 7 below covers turning on real email delivery.
6. To stop the server, click into the terminal and press `Ctrl + C`.

Anything you edit in `app/` or `components/` will hot-reload instantly in the browser — this is the best way to review copy or tweak colors before going live.

---

## 3. Project structure

```
app/
  layout.tsx        → global layout, fonts, <head> metadata
  page.tsx           → Home page
  about/page.tsx      → About Us page
  contact/page.tsx     → Contact page
  api/contact/route.ts  → handles form submissions (sends email via Resend)
  globals.css        → base styles, color variables, accessibility rules
components/          → every section of the site (Hero, Services, Nav, Footer, etc.)
lib/utils.ts         → site-wide settings: email, phone, WhatsApp number, address
tailwind.config.ts    → the color palette, fonts, and design tokens
```

To change any **text content**, open the relevant file in `components/` — the copy is written in plain English inside each file (e.g. `components/Hero.tsx`, `components/Services.tsx`).

To change **contact details** (email, phone, WhatsApp), edit the single file `lib/utils.ts`.

---

## 4. A note on design system & colors

The palette, fonts, and spacing all come from `tailwind.config.ts`, sampled directly from Noviqa's logo file: deep navy and a single emerald-green accent, paired with a serif display face (Fraunces) and a clean sans body face (Inter). If you'd like a color adjusted (e.g. a lighter navy, or a different green), that's the one file to change — every component pulls from those same tokens, so updates apply site-wide automatically.

The logo itself lives in `public/` as three files generated from the logo image you provided:
- `logo-mark.png` — the mark with its navy background removed, used in the Nav and Footer (which are always on a navy surface)
- `logo-badge.png` — the mark with its navy background intact, used as a fallback for any future light-background placement
- `app/icon.png` — the browser tab favicon

If you get a proper vector export (SVG/AI/EPS) of the logo later, replacing these three files with equivalents (same filenames) is all that's needed — no component code has to change.

**Photography:** the Hero, page headers, and several sections use real photography (Dubai skyline, office/meeting shots) sourced from Unsplash under the [Unsplash License](https://unsplash.com/license) — free for commercial use, no attribution required. The photo IDs are defined once in `lib/images.ts` and loaded through `next/image` (see `next.config.mjs` for the allowed remote host). To swap any photo for your own, drop a file in `public/images/`, point the relevant component at `/images/your-file.jpg`, and remove that entry from `lib/images.ts` if nothing else uses it.

---

## 5. Deploying to Vercel

Vercel is built by the makers of Next.js and is the simplest way to host this project. You'll need a free account and a place to store the code (GitHub is easiest).

### 5.1 Push the code to GitHub

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Create a new, empty repository (e.g. `noviqa-website`) — don't add a README or .gitignore, this project already has them.
3. In your terminal, inside the project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/noviqa-website.git
   git push -u origin main
   ```

### 5.2 Import into Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/log in (using your GitHub account makes this seamless).
2. Click **Add New → Project**.
3. Select the `noviqa-website` repository you just pushed and click **Import**.
4. Vercel auto-detects Next.js — you don't need to change any build settings.
5. Before clicking Deploy, open **Environment Variables** and add the variables from Step 7 below (you can also add these later and redeploy).
6. Click **Deploy**. In about a minute you'll get a live URL like `noviqa-website.vercel.app` — test it thoroughly before moving to the custom domain.

---

## 6. Before you go live: replace the placeholder details

Open `lib/utils.ts` and update:

```ts
export const siteConfig = {
  email: "info@noviqa.ae",       // real inbox once your mailbox is set up (Step 8)
  phoneDisplay: "+971 4 XXX XXXX", // how the number is shown on the site
  phoneHref: "+9714XXXXXXX",      // the number actually dialed when tapped (digits only, no spaces)
  whatsapp: "971500000000",      // WhatsApp number, country code + number, no + or spaces
  ...
};
```
Commit and push this change (`git add . && git commit -m "Update contact details" && git push`) — Vercel redeploys automatically on every push.

---

## 7. Making the contact form actually send emails

Right now, form submissions are logged but not emailed anywhere. The code is already wired up to use **[Resend](https://resend.com)** — a straightforward transactional email service with a generous free tier (3,000 emails/month), commonly used with Vercel/Next.js projects.

1. Create a free account at [resend.com](https://resend.com).
2. In Resend, go to **Domains → Add Domain** and add `noviqa.ae`. It will give you a few DNS records (TXT/MX/CNAME) to verify ownership.
3. Add those records at your DNS provider — see Step 8 below for where that is (tasjeel.ae) — this is a separate step from the domain-pointing DNS records, so you'll be adding records twice in the same place, once for the domain to point to Vercel, once for Resend to verify and send email.
4. Once verified in Resend, go to **API Keys → Create API Key** and copy it.
5. In your Vercel project, go to **Settings → Environment Variables** and add:
   | Name | Value |
   |---|---|
   | `RESEND_API_KEY` | the key you just copied |
   | `CONTACT_TO_EMAIL` | the mailbox that should receive enquiries, e.g. `info@noviqa.ae` |
   | `CONTACT_FROM_EMAIL` | `Noviqa Website <noreply@noviqa.ae>` |
6. Redeploy (Vercel → Deployments → ⋯ → Redeploy) so the new variables take effect.
7. Test the live contact form — you should receive an email at the address in `CONTACT_TO_EMAIL`, with reply-to set to whoever filled out the form.

For local testing, copy `.env.example` to `.env.local` and fill in the same values if you want to test real email delivery from your own machine.

---

## 8. Connecting your domain (noviqa.ae) — hosted at tasjeel.ae

Your domain's DNS is managed through your registrar's panel at **tasjeel.ae**. Domain hosting (where the domain is *registered*) and website hosting (where the *site* actually runs, i.e. Vercel) are two different things — you don't need to move the domain anywhere, you just point it at Vercel using DNS records.

1. In Vercel, open your project → **Settings → Domains** → enter `www.noviqa.ae` (and `noviqa.ae`) → **Add**.
2. Vercel will show you the exact DNS records to add — typically:
   - An **A record** for the root domain (`noviqa.ae`) pointing to Vercel's IP (`76.76.21.21`)
   - A **CNAME record** for `www` pointing to `cname.vercel-dns.com`
   (Vercel's screen will show the current, correct values — use those over any example here, as they're occasionally updated.)
3. Log in to your account at **tasjeel.ae**, find the DNS management section for your domain (sometimes labeled "DNS Zone," "Nameservers," or "Manage DNS").
4. Add the records exactly as shown in Vercel.
5. DNS changes can take anywhere from a few minutes to 24–48 hours to propagate. Vercel's Domains page will show a green checkmark once it detects the records correctly.
6. Since tasjeel.ae's control panel isn't something I have direct visibility into, if you can't find the DNS settings, their support team can point you to the right section — just ask them to help you "add an A record and a CNAME record for an external host."

---

## 9. Setting up your professional mailbox (info@noviqa.ae)

A website domain does not automatically come with email inboxes — mailbox hosting is a separate service. Since the quotation includes mailbox setup, here are the common ways to get `info@noviqa.ae` (or similar) working:

**Option A — Ask tasjeel.ae directly.** Many UAE domain registrars offer email hosting as an add-on. This is often the simplest option since it's the same provider and support line you already have a relationship with.

**Option B — Google Workspace** (Gmail with your own domain): plans start at a low monthly cost per mailbox. Sign up at [workspace.google.com](https://workspace.google.com), verify domain ownership, and follow their setup wizard to add MX records at tasjeel.ae.

**Option C — Zoho Mail:** has a genuinely free tier for a small number of users on your own domain — a good low-cost option to start. Sign up at [zoho.com/mail](https://www.zoho.com/mail/), verify the domain, and add the MX/TXT records they provide at tasjeel.ae.

Whichever option you choose, the pattern is the same: the provider gives you a set of **MX records** (and sometimes TXT/SPF/DKIM records for deliverability), and you add those at tasjeel.ae's DNS panel — the same place you added the Vercel records in Step 8, just a different set of records for mail instead of web traffic.

Once your mailbox is live, update `CONTACT_TO_EMAIL` (Step 7) and `lib/utils.ts` (Step 6) to the real address, and redeploy.

---

## 10. Quick checklist before launch

- [ ] Reviewed all copy on Home, About, and Contact pages
- [ ] Replaced placeholder email, phone, and WhatsApp number in `lib/utils.ts`
- [ ] Resend configured and test email received from the live contact form
- [ ] Domain DNS records added at tasjeel.ae and verified green in Vercel
- [ ] Mailbox created and `CONTACT_TO_EMAIL` updated to the real inbox
- [ ] Tested the site on an actual phone, not just desktop browser

If anything doesn't render as expected locally, the most common fix is deleting the `.next` folder and `node_modules`, then running `npm install` again.
