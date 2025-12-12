# Technology Stack

## Core Framework
- **Next.js 16.0.10** - React framework with App Router
- **React 19.2.1** - UI library
- **TypeScript 5** - Type-safe JavaScript

## Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Geist Font Family** - Default typography (Geist Sans and Geist Mono)

## Development Tools
- **ESLint 9** - Code linting with Next.js config
- **TypeScript strict mode** - Enabled for type safety

## Build System
- **Next.js compiler** - Built-in bundling and optimization
- **npm** - Package manager

## Common Commands

### Development
```bash
npm run dev
```
Starts the development server at http://localhost:3000 with hot reload.

### Production Build
```bash
npm run build
```
Creates an optimized production build.

### Production Server
```bash
npm run start
```
Runs the production server (requires `npm run build` first).

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality.

## TypeScript Configuration
- Target: ES2017
- Strict mode enabled
- Path alias: `@/*` maps to project root
- JSX: react-jsx (React 19 automatic runtime)
