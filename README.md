# Arduyyproject — Link in Bio

Premium 3D link-in-bio landing page. React + Vite + Tailwind CSS v4 + Three.js
(`@react-three/fiber` / `@react-three/drei`) + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/
    SceneBackground.jsx   3D canvas: EnergyCore, OrbitalParticle x4, AuroraWave x3, StarDust
    AmbientOverlays.jsx   gradient blobs, grid, film grain
    LogoBadge.jsx         avatar with counter-rotating rings + 5 social icons
    TabBar.jsx            INFO / FM / SAWAN tabs, animated underline (layoutId)
    LinkCard.jsx          individual link button
  data/
    categories.js         tab + link content, colors, edit this to change links
  icons/
    Icons.jsx              hand-drawn SVG icon set (no icon fonts, no emojis)
public/
  logo.png                brand avatar (replace to change the logo)
  favicon.png
```

To change links, edit `src/data/categories.js` — each tab (`info`, `fm`,
`sawan`) has a `links` array with `title`, `href`, `icon`, and `accent`.

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

`vercel.json` already sets the build command, output directory, SPA rewrite,
and security headers (`X-Content-Type-Options`, `X-Frame-Options`,
`X-XSS-Protection`, `Referrer-Policy`, `Permissions-Policy`,
`Strict-Transport-Security`) plus long-lived immutable caching for static
assets.

## DDoS / abuse protection

This is a static single-page app with no backend API, so there is no server
process for an attacker to exhaust with request floods — the meaningful
protection lives at the network edge, not in application code:

1. **Vercel's edge network already absorbs volumetric (L3/L4) attacks**
   automatically for every project, with no configuration needed.
2. **Turn on Attack Challenge Mode** for extra protection during an active
   attack: Vercel dashboard → your project → **Settings → Security →
   Attack Challenge Mode**. It puts a lightweight browser check in front of
   traffic when enabled.
3. **Vercel Firewall (Pro/Enterprise)**: Settings → Security → Firewall lets
   you add rate-limit and IP/geo block rules for application-layer (L7)
   abuse, e.g. "block an IP that requests `/` more than N times per minute."
4. **Optional extra layer — Cloudflare in front of the Vercel domain**
   (free tier): point your DNS through Cloudflare, proxy the record (orange
   cloud), and enable "I'm Under Attack Mode" during an incident for an
   additional JS-challenge layer before traffic reaches Vercel.

Client-side JavaScript cannot meaningfully stop a DDoS flood (the requests
never get far enough to run your code), so avoid relying on in-app "protection"
libraries for this — the steps above are the ones that actually work.

## "No inspect" deterrent

`src/utils/sourceGuard.js`, wired up in `main.jsx`, blocks the casual
one-click ways of viewing the page: right-click context menu, `F12`,
`Ctrl/Cmd+Shift+I/J/C`, and `Ctrl/Cmd+U` (view-source).

Be clear-eyed about what this does: it stops someone from casually
right-clicking → Inspect in ten seconds. It does **not**, and cannot,
stop a determined person — anyone can still open devtools from the
browser's own menu, use a different browser, run a proxy, or `curl` the
URL directly, because any HTML/CSS/JS sent to a browser is inherently
visible to that browser. Don't put secrets (API keys, unpublished
content) in the frontend bundle relying on this as protection.
