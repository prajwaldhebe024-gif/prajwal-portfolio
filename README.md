# Prajwal — Power Platform Engineer Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, Tailwind CSS v4 and Lucide icons. The visual direction combines a light Bento-inspired visual system with an off-white background, white and pastel-blue modular cards, soft lavender gradients, rounded corners, subtle shadows and restrained handwritten annotations.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the framework preset as **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Personal details to review before publishing

- Contact details are configured in `src/App.tsx`.
- Experience durations are displayed as supplied: Power Platform — 2 years; .NET + Angular — 1 year; Java + Spring Boot — 1 year. Confirm that these are accurate and describe hands-on experience, not necessarily separate full-time employment periods.
- Project examples and impact figures in `src/data/projects.ts` must be reviewed for accuracy and confidentiality before publishing.
- Add your approved resume as `public/resume.pdf` and update the resume link when added.

## Main structure

- `src/App.tsx` — homepage sections and content
- `src/components/Navbar.tsx` — responsive navigation
- `src/components/SectionHeading.tsx` — reusable section heading
- `src/data/projects.ts` — editable project case studies
- `src/index.css` — visual system, bento cards, responsive styles and animations

## Visual theme

This version uses a light, airy Bento-inspired layout with soft blue/lavender accents, rounded modular cards, subtle shadows, and restrained handwritten typography accents. Handwritten type is decorative only; body copy and navigation remain highly readable.
