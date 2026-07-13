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
};

export default nextConfig;
