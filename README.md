# Portfolio Template — Usage Guide

This repository is a reusable, JSON-driven Next.js portfolio template. Supply a `content` JSON file (or multiple profile JSONs) to render different portfolio instances without changing components.

## Purpose
- Provide a lightweight, content-first portfolio template.
- Keep UI and styling in the template and drive all copy/data from JSON profiles.

## Where content lives
- Canonical content (development): `content/content.json`
- Examples and templates: `content/examples/` and `content/template.json`
- Runtime profiles (recommended): `public/content/profiles/your-name.json` to allow switching without rebuilds

## Key content areas
- `site`: site-level settings (headline, socials).
- `person`: identity fields (`name`, `location`, ...).
- `assets`: static paths and labels (`logoText`, `resumeUrl`, `profileImage`).
- `about`, `experience`, `projects`, `contact`: main page sections.
- `navigation`: nav-specific options (e.g. `includeHero`).
- `sections`: order and `enabled` map controlling which sections appear and in what order.

## How to switch profiles (recommended)
1. Add a profile JSON file to `public/content/profiles/your-name.json`.
2. Set `NEXT_PUBLIC_CONTENT_PROFILE=your-name` in your environment.
3. Implement a runtime loader in `src/content.js` that fetches `/content/profiles/${profile}.json`.

This lets you swap profiles without rebuilding.

## Static vs runtime loading
- Static import: `src/content.js` can import `content/content.json` at build time. This is simple but requires a rebuild to change content.
- Runtime fetch: fetch a profile from `public/content/profiles/` at runtime. This is recommended for templates and demos.

## Validation
Use `zod` or a JSON Schema to validate profiles. The repo already includes `zod` in dependencies; adding a short schema + loader will prevent runtime errors when required fields are missing.

## Quick start
```bash
npm install
npm run dev
```

## Suggested next steps
- Add `public/content/profiles/spyros.json` as an example profile
- Implement the runtime loader (`src/content.js`) reading `NEXT_PUBLIC_CONTENT_PROFILE`
- (Optional) Add `zod` validation for profiles to surface helpful errors

If you want, I can implement the example profile and runtime loader now.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
