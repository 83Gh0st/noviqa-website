// Curated, license-free photography (Unsplash License — free for commercial use,
// no attribution required). Helper builds a right-sized, optimized URL per usage
// so each component only requests the resolution it actually renders.
//
// ── HOW TO SWAP A PHOTO ────────────────────────────────────────────────────
// 1. Open the "Source page" link below for the photo you want to replace —
//    that's the real Unsplash page, useful for downloading the original or
//    feeding into an image generator to produce a custom/branded version.
// 2. Once you have a new image (AI-generated or your own), drop the file into
//    /public/images/ (e.g. hero-skyline.jpg).
// 3. Replace that entry's `unsplash("photo-...", w)` call below with a plain
//    string: `(w = 2000) => "/images/hero-skyline.jpg"` — the `w` param can
//    stay for signature-compatibility even though a local file ignores it.
// No component code needs to change; every component imports from `photos`.
// ────────────────────────────────────────────────────────────────────────────

export const photos = {
  /**
   * Hero background
   */
  heroSkyline: (w = 2000) => "/images/hero.png",

  /**
   * Interior page header background
   */
  pageHeaderSkyline: (w = 2000) => "/images/dubai-header.png",

  /**
   * Two professionals shaking hands
   */
  handshake: (w = 1400) => "/images/professionals.png",

  /**
   * Construction site
   */
  construction: (w = 1400) => "/images/construction.png",

  /**
   * Analytics
   */
  analytics: (w = 1400) => "/images/analytics.png",

  /**
   * Meeting
   */
  meeting: (w = 1400) => "/images/meeting.png",
};