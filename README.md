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

## Placeholders to replace before launch

- The Android APK is served from `public/css-speech-generator-v1.0.0-beta.apk` (364 MB —
  note that files over 100 MB cannot be pushed to GitHub; use a release asset or object
  storage for git-based deploys). The iOS TestFlight link in `components/DarkCta.tsx`
  is still a placeholder (`href="#"`).
- Contact email `support@cssspeechgen.app` in `components/Footer.tsx` and both legal pages.
- The floating hero cards and step mock-UIs are stylized CSS/SVG — swap in real app
  screenshots when available.
- Pipeline specifics in `components/Pipeline.tsx` (e.g. "13 MFCC + Δ + ΔΔ") are
  illustrative defaults — align them with the actual thesis implementation.
