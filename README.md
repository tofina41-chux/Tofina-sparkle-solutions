# Tofina Sparkle Solutions — Website

A premium, production-ready marketing website for Tofina Sparkle Solutions, a residential & commercial cleaning company. Built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tooling, code-splitting, dev server
- **Tailwind CSS** — utility-first styling, brand tokens in `tailwind.config.js`
- **React Router 6** — routing, with all pages lazy-loaded
- **Framer Motion** — page/section animation
- **React Hook Form** — Request a Quote & Contact forms
- **React Helmet Async** — per-page SEO meta tags + JSON-LD structured data
- **Swiper** — testimonials carousel
- **React Icons** — iconography
- **yet-another-react-lightbox** — gallery lightbox
- **EmailJS** (`@emailjs/browser`) — wired for you to connect forms to real email delivery (see below)

> **Note on peer dependencies:** `react-helmet-async` currently declares support up to React 18 in its peer range, but works correctly with React 19 in practice. This project installs with `--legacy-peer-deps` to reflect that. If you hit the same warning with `npm install`, use `npm install --legacy-peer-deps`.

## Getting Started

### Install

```bash
npm install --legacy-peer-deps
```

### Run locally

```bash
npm run dev
```

Visit `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Output is written to `dist/`. Type-checking (`tsc --noEmit`) runs automatically before the Vite build.

### Preview the production build

```bash
npm run preview
```

### Lint & format

```bash
npm run lint
npm run format
```

## Project Structure

```
src/
  assets/gallery/        Real project photography goes here (see "Updating the Gallery")
  components/
    layout/               Navbar, MobileMenu, Footer
    ui/                   Reusable primitives: Button, Card, Section, Badge, ImagePlaceholder...
    common/                SEO, ScrollProgress, BackToTop, CookieConsent, WhatsAppButton, loaders
    home/                  Home-page sections (Hero, Stats, WhyChooseUs, ServicesPreview...)
    services/              ServiceCard, ServiceHero
    gallery/               GalleryGrid (filter + search + lightbox)
    testimonials/          TestimonialCard
    faq/                   FAQAccordionItem
    quote/                 QuoteForm, EstimateCalculator (instant pricing estimator)
    contact/                ContactForm, MapEmbed
  context/                ThemeContext (dark mode)
  data/                   All editable content as JSON — see "Updating Content" below
  hooks/                  useScrollPosition, useLocalStorage
  layouts/                MainLayout (Navbar + Footer + floating widgets wrapper)
  pages/                  One folder per route, each with its own index.tsx
  router/routes.tsx       Central route table — every page is React.lazy-loaded
  types/                  Shared TypeScript interfaces
  utils/                  Pricing estimator logic, formatters, contact constants
```

Every route in `router/routes.tsx` is code-split with `React.lazy`, so visitors only download the JS for the page they're on.

## Updating Content (No Code Changes Required)

All editable content lives in `src/data/*.json`:

| File | Powers |
|---|---|
| `services.json` | Services listing + individual service pages (`/services/:slug`) |
| `testimonials.json` | Testimonials carousel + Testimonials page |
| `faqs.json` | FAQ page + homepage FAQ preview |
| `gallery.json` | Gallery page + homepage gallery preview |
| `beforeafter.json` | Before & After sliders |
| `projects.json` | Recent projects (available for future use, e.g. a case-studies page) |
| `team.json` | About page team grid |
| `areas.json` | "Areas We Serve" chips |
| `blog.json` | Blog listing + individual post pages |
| `stats.json` | Homepage animated stat counters |

### Adding a new service

Add an object to `services.json` with a unique `slug` — a full detail page is generated automatically at `/services/your-slug`, and it appears in the navbar mega menu, the Services page, and the homepage preview without any further code changes.

### Updating the Gallery

1. Drop new photos into `src/assets/gallery/`.
2. Add an entry to `gallery.json` referencing the image.
3. Replace the `ImagePlaceholder` component usages in `GalleryGrid.tsx` / `GalleryPreview.tsx` with real `<img>` tags once photography is available — the placeholder component is a clearly-labeled stand-in so the layout, filtering, search, and lightbox all already work end-to-end.

### Updating Testimonials

Add an object to `testimonials.json` — no code changes needed.

## Connecting Real Email Delivery (EmailJS)

`QuoteForm.tsx` and `ContactForm.tsx` currently simulate submission. To send real emails:

1. Create a free account at [emailjs.com](https://www.emailjs.com/) and set up an email service + template.
2. Create a `.env.local` file (see `.env.example`) with your EmailJS service ID, template ID, and public key.
3. In `QuoteForm.tsx` / `ContactForm.tsx`, replace the `await new Promise(...)` placeholder inside `onSubmit` with:

```ts
import emailjs from "@emailjs/browser";

await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  data,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

## Architecture Notes: What's Prepared for Later

This site is intentionally built as a **marketing site only** — no authentication, bookings, payments, or dashboards are implemented. The architecture keeps room for these without a rewrite:

- `types/index.ts` is the single source of truth for shared shapes — extend it with `User`, `Booking`, `Invoice`, etc. when needed.
- `context/` already demonstrates the pattern for a global provider (`ThemeContext`) — an `AuthContext` or `BookingContext` can sit alongside it the same way.
- `QuoteForm.tsx` posts a fully-typed `QuoteFormValues` object — swapping the current EmailJS/simulated submission for a real API call (`POST /api/bookings`) is a one-function change.
- Routes are centralized in `router/routes.tsx`, so adding protected routes (`/dashboard`, `/admin`) later is a matter of adding entries and a route guard, not restructuring.
- Data currently lives in JSON; each file maps cleanly to a future database table (`services`, `testimonials`, `faqs`, `bookings`, etc.).

## Deployment

### Netlify

1. Push this project to a Git repository.
2. In Netlify: **New site from Git** → select the repo.
3. Build command: `npm run build` — Publish directory: `dist`.
4. Netlify auto-detects Vite; no extra config needed. Add a `_redirects` file with `/* /index.html 200` if you need explicit SPA fallback (most Vite/Netlify integrations handle this automatically).

### Vercel

1. Push this project to a Git repository.
2. In Vercel: **New Project** → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — Vercel handles SPA routing automatically.

### GitHub Pages

1. Install the deploy helper: `npm install -D gh-pages`.
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`.
3. Set `base: "/your-repo-name/"` in `vite.config.ts` under `defineConfig`.
4. Run `npm run build && npm run deploy`.
5. In your repo settings, set GitHub Pages to serve from the `gh-pages` branch.

## SEO & Performance

- Per-page `<title>`, meta description, canonical URL, Open Graph and Twitter Card tags via `SEO.tsx` / React Helmet Async.
- JSON-LD structured data on the homepage (`LocalBusiness`), service pages (`Service`), and the FAQ page (`FAQPage`).
- `public/robots.txt` and `public/sitemap.xml` are included — update the sitemap when you add new static routes.
- All routes are code-split; the Framer Motion, Swiper, and vendor libraries are split into separate chunks so the initial load stays lean.
- Images are represented by a labeled `ImagePlaceholder` component pending real photography — replace with `<img loading="lazy">` and appropriate `alt` text for full Lighthouse image-related scoring once assets are supplied.

## Accessibility

- Semantic headings, `aria-label`s on icon-only controls (WhatsApp button, back-to-top, mobile menu toggle).
- Visible focus states (`:focus-visible` styled with the brand primary color) throughout.
- Reduced-motion users automatically get near-instant transitions via a `prefers-reduced-motion` media query in `index.css`.
- Form fields use associated `<label htmlFor>` pairs; button-group selectors (e.g. property type in the estimator) use a descriptive `<p>` heading rather than a mislabeled `<label>`.

## Design System Reference

| Token | Value | Use |
|---|---|---|
| `primary` | `#8B1E1E` | Brand red — CTAs, links, accents |
| `secondary` | `#5C2323` | Deep burgundy — dark sections, body text |
| `background` | `#FFFFFF` | Base surface |
| `accent` | `#D9D9D9` | Borders, muted backgrounds |
| `success` | `#1D8F5A` | WhatsApp button, success states |
| Display font | Poppins | Headings |
| Body font | Inter | Body copy |

No stock-cliché gradients, emoji, or cartoon illustration are used anywhere in the UI, per the brand brief.
