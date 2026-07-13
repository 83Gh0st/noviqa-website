# /public/images

This folder is kept as a place for real, licensed photography you add later
(office, team, event photos, etc.) — reference it with Next's
`<Image src="/images/your-file.jpg" ... />`.

The site currently sources its photography from Unsplash (`lib/images.ts`),
under the Unsplash License, which allows free commercial use without
attribution. Each photo ID is pinned to a specific, hand-picked image, and
`next.config.mjs` restricts remote images to `images.unsplash.com` only.

To swap any photo for your own: drop the file here, update the relevant
`<Image src=... />` in the component to `/images/your-file.jpg`, and you can
remove that entry from `lib/images.ts` if nothing else uses it.
