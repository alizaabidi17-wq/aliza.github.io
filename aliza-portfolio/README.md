# Aliza Abidi Portfolio

A premium personal portfolio website for Aliza Abidi built with Next.js, TypeScript, Tailwind CSS, Framer Motion, shadcn-style primitives, and Lucide icons.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Deploy To Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the framework preset as `Next.js`.
4. Build command: `npm run build`.
5. Output directory: `.next`.

## Placeholder Areas

- Resume: replace `public/resume/Aliza-Abidi-Resume.pdf` with the real PDF.
- LinkedIn: update the placeholder link in `components/portfolio-site.tsx`.
- GitHub: update the placeholder link in `components/portfolio-site.tsx`.
- Project visuals: the current visuals are code-native mock dashboards and systems diagrams. Replace or extend them in `CaseVisual` if real screenshots become available.

## Content Structure

- `data/portfolio.ts`: all resume facts, metrics, case studies, skills, and leadership content.
- `components/portfolio-site.tsx`: interactive page sections and animation logic.
- `components/theme-provider.tsx`: light/dark mode logic.
- `components/ui.tsx`: reusable shadcn-style UI primitives.
- `app/layout.tsx`: SEO metadata and global providers.
- `app/globals.css`: Tailwind and theme-specific polish.
