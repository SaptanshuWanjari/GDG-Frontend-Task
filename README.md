# GDG Frontend Task

A marketing/demo frontend built with Next.js and Tailwind CSS for the GDG Frontend Task. The site demonstrates reusable UI components, theming, and a small feature set suitable for showcasing front-end skills.

## Quick highlights

- Next.js 15 + React 19
- Tailwind CSS for styling
- Light/Dark theme toggle
- Reusable components: Accordion, Card, Carousel, Tooltip, Theme provider
- Organized under `app/` (Next.js App Router) and `components/ui`

## Repository layout

- `app/` — Next.js application routes and layout, plus core components (Hero, Navbar, Footer, etc.)
- `app/components/` — page sections and composed components
- `components/ui/` — small reusable UI primitives (Radix-based where applicable)
- `public/` — images, fonts and static assets
- `lib/` — small utilities

## Tech stack and versions

See `package.json` for exact versions. Key technologies include:

- Next.js 15
- React 19
- Tailwind CSS 4
- TypeScript 5
- Radix UI primitives

## Local development (Windows / PowerShell)

Open PowerShell in the project root (`D:\GDG Frontend Task`) and run:

```powershell
# install dependencies
npm install

# start development server
npm run dev
```

The app will be served at http://localhost:3000 by default.

## Build & production

```powershell
# build for production
npm run build

# start production server
npm start
```

## NPM scripts

- `npm run dev` — run Next.js in development (uses Turbopack by default)
- `npm run build` — build optimized production assets
- `npm start` — start production server
- `npm run lint` — run ESLint

## Deployment

Recommended: Deploy to Vercel for straightforward Next.js hosting. You can also deploy to any host that supports Node.js and Next.js.

## Contributing

- Fork or clone the repository
- Create a feature branch: `git checkout -b feature/your-change`
- Commit and open a pull request

If you'd like, I can add a `CONTRIBUTING.md`, GitHub Actions for CI, or screenshots to this README.

## Useful files to inspect

- `app/components/Hero.tsx` — the hero section
- `app/components/Navbar.tsx` — navigation and theme toggle
- `components/ui/` — reusable UI primitives

## License

No license specified. Add a `LICENSE` file if you wish to publish this project under an open-source license.

---

If you want, I can also add a demo screenshot, CI workflow, or CONTRIBUTING guide next. Tell me which and I'll add it.
