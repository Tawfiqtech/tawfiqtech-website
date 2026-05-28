# TawfiqTech Website

Professional landing page for TawfiqTech — websites and AI automations for local service businesses in Metro Vancouver.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Inter** (Google Fonts)

## Getting started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Deploying to Netlify

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Select your repo
4. Set build command: `npm run build`
5. Set publish directory: `.next`
6. Deploy

Or use the Netlify CLI:

```bash
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

## Deploying to Vercel

```bash
npm install -g vercel
vercel --prod
```

## Customisation

| What | Where |
|------|-------|
| Nav links | `components/Navbar.tsx` |
| Hero headline & nodes | `components/Hero.tsx` |
| Services | `components/Services.tsx` |
| Process steps | `components/Process.tsx` |
| Pricing tiers | `components/Pricing.tsx` |
| Testimonials | `components/Testimonials.tsx` |
| CTA email | `components/CTA.tsx` |
| SEO metadata | `app/layout.tsx` |
| Global styles | `app/globals.css` |

## Colours

The palette is defined as CSS variables in `app/globals.css`:

```css
--bg: #000;
--card: #0b0b0b;
--faint: #111;
--dim: #888;
--dimmer: #3d3d3d;
--off: #e8e8e8;
```
