# Jack — 3D Creator Portfolio

A dark-themed 3D creator portfolio landing page built with React, TypeScript,
Tailwind CSS, Framer Motion, and Lucide React.

## Stack

- **React 18** + **TypeScript**
- **Vite** for dev/build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for scroll and reveal animations
- **Lucide React** for icons

## Sections

1. **Hero** — magnetic portrait, gradient heading, navbar and contact CTA
2. **Marquee** — two rows of previews that scroll horizontally with the page
3. **About** — scroll-driven character-by-character reveal with decorative 3D props
4. **Services** — five services on a light panel with fluid typography
5. **Projects** — sticky-stacking cards that scale as you scroll past them

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
```

The design uses fluid `clamp()` typography and Tailwind's default breakpoints
(`sm` 640px, `md` 768px, `lg` 1024px) so it scales from mobile to ultra-wide.
