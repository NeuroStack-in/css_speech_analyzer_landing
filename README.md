# CSS Speech Generator — Landing Page

Marketing site for **CSS Speech Generator**, a mobile ASR app that gives Deaf and hard-of-hearing
users live captions with speech intensity and pitch analysis. Project owner:
Prof. Chander Shekhar Singh, Department of Linguistics, Rajdhani College,
University of Delhi.

Stack: Next.js (App Router, TypeScript, static export). Design referenced from
`public/image.png` — warm cream canvas, editorial serif (Newsreader), aurora
gradient blobs, floating UI cards, dark pill CTAs.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static site emitted to out/
```

`next.config.mjs` sets `output: "export"`, so `out/` is plain HTML/CSS/JS and can be
hosted on any static host (GitHub Pages, Netlify, Vercel, nginx, …).

## Android APK download (private S3 + CloudFront)

The APK is ~365 MB — too large for git or static hosting — so it lives in a **private**
S3 bucket served through **CloudFront**. The download button in `components/DarkCta.tsx`
links to the CloudFront URL; the bucket itself is not publicly reachable.

Current setup (account `896823725438`, profile `company`, region `ap-south-1`):

| Resource | Value |
|---|---|
| S3 bucket | `css-speech-analyzer` (private, Block Public Access ON) |
| Object key | `CSS-Speech-Analyzer-v1.0.0-beta.apk` |
| CloudFront distribution | `E3HZF4Z4KQKKJE` |
| CloudFront domain | `drl8ps0dvbw08.cloudfront.net` |
| Origin Access Identity | `E3HY0P47RI2KKJ` (only principal allowed to read the bucket) |
| Public URL | `https://drl8ps0dvbw08.cloudfront.net/CSS-Speech-Analyzer-v1.0.0-beta.apk` |

### Publishing a new APK version

1. Upload with headers that force a clean one-click download:

   ```bash
   aws s3 cp "CSS-Speech-Analyzer-vX.Y.Z.apk" \
     s3://css-speech-analyzer/CSS-Speech-Analyzer-vX.Y.Z.apk \
     --content-type "application/vnd.android.package-archive" \
     --content-disposition 'attachment; filename="CSS-Speech-Analyzer-vX.Y.Z.apk"' \
     --cache-control "public, max-age=86400" \
     --profile company --region ap-south-1
   ```

2. Update the URL — edit the `APK_URL` fallback in `components/DarkCta.tsx` and
   `NEXT_PUBLIC_APK_URL` in `.env.local` to the new filename, then rebuild.

3. If you reuse the **same** key, invalidate CloudFront's cache so viewers get the new file:

   ```bash
   aws cloudfront create-invalidation --distribution-id E3HZF4Z4KQKKJE \
     --paths "/CSS-Speech-Analyzer-v1.0.0-beta.apk" --profile company
   ```

The URL is configured via `NEXT_PUBLIC_APK_URL` (see `.env.example`); the hardcoded
value in `DarkCta.tsx` is only a fallback.
- Contact email `support@cssspeechgen.app` in `components/Footer.tsx` and both legal pages.
- The floating hero cards and step mock-UIs are stylized CSS/SVG — swap in real app
  screenshots when available.
- Pipeline specifics in `components/Pipeline.tsx` (e.g. "13 MFCC + Δ + ΔΔ") are
  illustrative defaults — align them with the actual thesis implementation.
