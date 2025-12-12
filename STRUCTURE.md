# 📐 Project Structure Overview

## File Tree
```
travel/
├── 📁 app/
│   ├── favicon.ico
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main landing page ⭐
│
├── 📁 components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── MobileMenu.tsx       # Mobile navigation
│   ├── SearchForm.tsx       # Booking form
│   ├── SearchSection.tsx    # Search container
│   ├── TravelTabs.tsx       # Category tabs
│   ├── README.md            # Component docs
│   └── 📁 icons/
│       ├── ActivityIcon.tsx
│       ├── BusIcon.tsx
│       ├── CabIcon.tsx
│       ├── CalendarIcon.tsx
│       ├── ChevronDownIcon.tsx
│       ├── CruiseIcon.tsx
│       ├── FlightIcon.tsx
│       ├── HotelIcon.tsx
│       ├── PackageIcon.tsx
│       ├── TrainIcon.tsx
│       └── TravelIcon.tsx
│
├── 📁 public/
│   ├── README.md            # Asset requirements
│   └── [SVG files]
│
├── 📁 .kiro/
│   └── 📁 steering/
│       ├── product.md       # Product overview
│       ├── structure.md     # Project structure
│       └── tech.md          # Tech stack
│
├── 📄 Configuration Files
│   ├── eslint.config.mjs
│   ├── next.config.ts       # Next.js config
│   ├── package.json
│   ├── postcss.config.mjs
│   └── tsconfig.json
│
└── 📄 Documentation
    ├── IMPLEMENTATION.md    # Full implementation guide
    ├── QUICKSTART.md        # Quick start guide
    ├── README.md            # Project readme
    └── STRUCTURE.md         # This file
```

## Component Relationships

```
┌─────────────────────────────────────────────┐
│              app/page.tsx                   │
│         (Main Landing Page)                 │
└─────────────────────────────────────────────┘
                    │
        ┌───────────┼───────────┐
        │           │           │
        ▼           ▼           ▼
   ┌────────┐  ┌───────┐  ┌──────────────┐
   │ Header │  │ Hero  │  │SearchSection │
   └────────┘  └───────┘  └──────────────┘
        │                        │
        │                ┌───────┴────────┐
        │                │                │
        ▼                ▼                ▼
   ┌──────────┐   ┌────────────┐  ┌────────────┐
   │MobileMenu│   │TravelTabs  │  │SearchForm  │
   └──────────┘   └────────────┘  └────────────┘
                         │                │
                         │                │
                         ▼                ▼
                    ┌────────┐      ┌─────────┐
                    │  Icons │      │  Icons  │
                    └────────┘      └─────────┘
```

## Data Flow

```
User Interaction
      │
      ▼
┌──────────────┐
│ TravelTabs   │ ──► useState (activeTab)
└──────────────┘
      │
      ▼
┌──────────────┐
│ SearchForm   │ ──► Form inputs (to be connected)
└──────────────┘
      │
      ▼
┌──────────────┐
│ MobileMenu   │ ──► useState (isOpen)
└──────────────┘
```

## Styling Architecture

```
┌─────────────────────────────────────┐
│         Tailwind CSS 4              │
│    (Utility-First Framework)        │
└─────────────────────────────────────┘
              │
    ┌─────────┼─────────┐
    │         │         │
    ▼         ▼         ▼
┌────────┐ ┌──────┐ ┌────────┐
│ Colors │ │Sizing│ │Spacing │
└────────┘ └──────┘ └────────┘
    │         │         │
    └─────────┼─────────┘
              ▼
    ┌──────────────────┐
    │   Components     │
    │  (Inline Classes)│
    └──────────────────┘
```

## Responsive Breakpoints

```
Mobile          Tablet         Laptop         Desktop
320px           640px          1024px         1440px+
  │               │              │              │
  ▼               ▼              ▼              ▼
┌─────┐       ┌───────┐      ┌────────┐    ┌─────────┐
│Stack│       │ 2-Col │      │ Full   │    │  Max    │
│ UI  │       │ Grid  │      │  Nav   │    │ Width   │
└─────┘       └───────┘      └────────┘    └─────────┘
```

## Key Files Explained

### 🎯 app/page.tsx
- Main entry point
- Composes Header, Hero, and SearchSection
- Handles background image and overlays
- Server Component (static rendering)

### 🧩 components/Header.tsx
- Top navigation bar
- Logo, menu items, auth buttons
- Responsive: mobile menu on small screens
- Client Component (interactive)

### 🎨 components/Hero.tsx
- Large hero heading
- Tagline text
- Fully responsive typography
- Server Component (static)

### 🔍 components/SearchSection.tsx
- Container for search UI
- Wraps TravelTabs and SearchForm
- Handles max-width and padding
- Server Component (static)

### 📑 components/TravelTabs.tsx
- 8 travel category tabs
- Active state management
- Horizontal scroll on mobile
- Client Component (state)

### 📝 components/SearchForm.tsx
- Multi-field booking form
- 7 input fields + search button
- Responsive grid layout
- Client Component (future form state)

### 📱 components/MobileMenu.tsx
- Hamburger menu for mobile
- Dropdown navigation
- Open/close state
- Client Component (state)

### 🎨 app/globals.css
- Tailwind imports
- CSS variables
- Custom scrollbar hiding
- Theme configuration

## Icon System

All icons follow the same pattern:
```typescript
export function IconName({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="..." fill="currentColor"/>
    </svg>
  );
}
```

**Benefits:**
- Consistent API
- Easy to style with Tailwind
- Tree-shakeable
- Type-safe

## State Management

### Current (Local State)
```
TravelTabs    → useState (activeTab)
MobileMenu    → useState (isOpen)
SearchForm    → No state yet
```

### Future (Recommended)
```
Global State  → Zustand / Redux
Form State    → React Hook Form
Server State  → React Query / SWR
```

## Build Output

```
npm run build
     │
     ▼
┌──────────────┐
│   Turbopack  │ (Next.js 16)
└──────────────┘
     │
     ▼
┌──────────────┐
│  Static HTML │ (Pre-rendered)
└──────────────┘
     │
     ▼
┌──────────────┐
│  Optimized   │
│    Assets    │
└──────────────┘
```

## Development Workflow

```
1. Edit Component
      │
      ▼
2. Hot Reload (Fast Refresh)
      │
      ▼
3. See Changes Instantly
      │
      ▼
4. Run Diagnostics (getDiagnostics)
      │
      ▼
5. Build & Deploy
```

## Deployment Structure

```
Vercel / Netlify
      │
      ▼
┌──────────────┐
│   CDN Edge   │
└──────────────┘
      │
      ▼
┌──────────────┐
│ Static Pages │ (Fast delivery)
└──────────────┘
```

---

**Note**: This structure follows Next.js 16 App Router conventions with TypeScript and Tailwind CSS 4.
