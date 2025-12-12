# 🌍 Travel Booking Platform

A modern, fully responsive travel booking website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

![Next.js](https://img.shields.io/badge/Next.js-16.0.10-black)
![React](https://img.shields.io/badge/React-19.2.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

- 🎨 **Pixel-Perfect Design** - Faithful implementation of Figma design
- 📱 **Fully Responsive** - Mobile, tablet, laptop, and desktop optimized
- 🎬 **Animated Hero** - Dynamic scrolling text (DISCOVER → EXPLORE → TRAVEL)
- 📐 **Single Screen Layout** - Everything fits without scrolling
- ⚡ **Next.js 16** - Latest App Router with Turbopack
- 🎯 **TypeScript** - Full type safety throughout
- 🎨 **Tailwind CSS 4** - Modern utility-first styling
- 🧩 **Component Architecture** - Modular, reusable components
- ♿ **Accessible** - Semantic HTML and ARIA support
- 🚀 **Performance** - Optimized for Core Web Vitals

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

That's it! The site is now running locally.

## 🏗️ Project Structure

```
travel/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── SearchSection.tsx  # Search container
│   ├── SearchForm.tsx     # Booking form
│   ├── TravelTabs.tsx     # Category tabs
│   ├── MobileMenu.tsx     # Mobile navigation
│   └── icons/             # SVG icon components
└── public/                # Static assets
```

## 🎯 Key Components

### Header
- Logo and branding
- Desktop navigation menu
- Mobile hamburger menu
- Signup/Login buttons

### Hero
- Animated scrolling text (DISCOVER → EXPLORE → TRAVEL)
- Smooth scroll-up animation every 2 seconds
- Infinite loop with fade transitions
- Tagline text
- Background image with overlay

### Travel Tabs
- 8 interactive category tabs
- Active state management
- Horizontal scroll on mobile

### Search Form
- Leaving From (dropdown)
- Destination (dropdown)
- Theme selection (dropdown)
- Date range picker (From/To)
- Traveler count selector
- Search button
- Add flight checkbox

## 🎨 Design System

### Colors
- Primary: `#16242a` (Dark blue)
- Secondary: `#29383e` (Medium blue)
- Accent: `#cedde7` (Light blue)
- Neutral: `#1e1e1e` (Dark gray)

### Typography
- Font: Geist Sans & Geist Mono
- Heading: 180px (desktop) → 48px (mobile)
- Body: 16px base

### Breakpoints
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Laptop: 1025px - 1440px
- Desktop: 1441px+

## 📚 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Get started in 2 minutes
- **[IMPLEMENTATION.md](IMPLEMENTATION.md)** - Full implementation guide
- **[STRUCTURE.md](STRUCTURE.md)** - Project structure overview
- **[components/README.md](components/README.md)** - Component documentation

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.10
- **UI Library**: React 19.2.1
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono
- **Build Tool**: Turbopack
- **Linting**: ESLint 9

## 📦 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Responsive Design

The site is fully responsive across all devices:

- **Mobile First**: Optimized for small screens
- **Tablet**: Adjusted layouts and spacing
- **Laptop**: Full navigation visible
- **Desktop**: Maximum width containers

## 🔧 Customization

### Change Colors
Update color values in component files:
```typescript
className="bg-[#16242a]" // Change to your brand color
```

### Add Travel Categories
Edit `components/TravelTabs.tsx`:
```typescript
const tabs = [
  { id: "new-category", label: "New", icon: YourIcon },
  // ...
];
```

### Modify Search Fields
Edit `components/SearchForm.tsx` to add/remove fields.

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
```bash
npm run build
npm run start
```

## 📝 Next Steps

1. **Add Functionality**
   - Connect forms to backend API
   - Implement date picker
   - Add dropdown menus
   - Form validation

2. **Add Pages**
   - Search results
   - Booking details
   - User dashboard
   - Payment flow

3. **Enhance UX**
   - Add animations (Framer Motion)
   - Loading states
   - Error handling
   - Toast notifications

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and component patterns.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design implemented from Figma
- Built with Next.js and Tailwind CSS
- Icons created as SVG components

---

**Built with ❤️ using Next.js 16, React 19, and Tailwind CSS 4**
