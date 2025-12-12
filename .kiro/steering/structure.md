# Project Structure

## Directory Organization

This project follows the Next.js App Router structure:

### `/app`
Main application directory using Next.js App Router conventions.
- `layout.tsx` - Root layout with font configuration and metadata
- `page.tsx` - Home page component
- `globals.css` - Global styles and Tailwind directives
- `favicon.ico` - Site favicon

### `/public`
Static assets served from the root URL.
- SVG icons and images (next.svg, vercel.svg, etc.)

### Configuration Files (Root)
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript compiler options
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration
- `package.json` - Dependencies and scripts

## Conventions

### File Naming
- React components: PascalCase with `.tsx` extension
- Configuration files: kebab-case with appropriate extension
- Use TypeScript for all new files

### Component Structure
- Server Components by default (Next.js App Router)
- Use `"use client"` directive only when client-side interactivity is needed
- Export default for page and layout components

### Styling
- Tailwind utility classes for styling
- Dark mode support using `dark:` prefix
- Responsive design with mobile-first approach using `sm:`, `md:`, etc.

### Imports
- Use `@/` path alias for imports from project root
- Next.js built-in components: `next/image`, `next/font`, etc.
- Type imports: `import type { ... }` for TypeScript types
