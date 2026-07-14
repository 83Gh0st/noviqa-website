/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pins the workspace root to this project folder. Without this, Next.js
  // scans upward and gets confused if there's another package-lock.json
  // higher up in your user folder (as in the "multiple lockfiles" warning) —
  // this line is the fix Next.js itself suggests for that warning.
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Next's built-in image optimizer proxies every remote image through the
    // dev/prod server at request time (`/_next/image?url=...`), fetching it
    // server-side. On networks where that outbound fetch is slow or blocked,
    // this times out. Setting `unoptimized: true` skips that proxy — the
    // browser requests the Unsplash URL directly instead, which is far more
    // reliable on flaky networks, since Unsplash's own CDN already serves
    // right-sized, compressed images via the width/quality params baked into
    // the URL (see lib/images.ts). Safe to remove if you swap all photos for
    // local files in /public/images — then Next's built-in optimizer works
    // as usual.
    unoptimized: true,
  },
  async headers() {
    // `next dev` relies on eval() for Fast Refresh/HMR, and its live-reload
    // client talks to the dev server over a WebSocket — a CSP tight enough
    // for production breaks both. Relax exactly those two things in dev,
    // and only in dev; the production CSP served by `next build && next
    // start` (what actually ships) stays fully locked down.
    const isDev = process.env.NODE_ENV !== "production";

    const csp = [
      "default-src 'self'",
      // 'unsafe-inline' is required in both environments because Next.js
      // injects its own hydration bootstrap as an inline <script> on every
      // static page. 'unsafe-eval' is added in dev only, for Fast Refresh.
      // Removing 'unsafe-inline' too means switching the whole site to
      // per-request dynamic rendering with nonces (middleware.ts +
      // `export const dynamic = "force-dynamic"`), which trades away
      // static generation. Everything else below stays locked to 'self',
      // so this is not an open door for arbitrary third-party scripts.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https://images.unsplash.com",
      "font-src 'self' data:",
      // ws:/wss: only needed in dev for the HMR live-reload socket.
      `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
      "frame-src https://www.google.com",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
