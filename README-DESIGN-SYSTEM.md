# Design System Overview

Welcome to the Travel Website Design System! This document provides an overview of all design resources and how to use them.

## 📁 Documentation Files

| File | Description | Use When |
|------|-------------|----------|
| **[DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)** | Quick reference guide | You need a fast lookup |
| **[COLORS.md](./COLORS.md)** | Complete color documentation | Working with colors |
| **[TYPOGRAPHY.md](./TYPOGRAPHY.md)** | Complete typography guide | Working with text styles |
| **README-DESIGN-SYSTEM.md** | This file - overview | Getting started |

## 🎨 Demo Pages

Visit these pages in your browser to see the design system in action:

- **`/typography-demo`** - All typography styles with examples
- **`/colors-demo`** - All colors, buttons, cards, and components

To view demos:
```bash
npm run dev
# Then visit http://localhost:3000/typography-demo
# Or visit http://localhost:3000/colors-demo
```

## 🚀 Quick Start

### 1. Install Dependencies (if needed)

```bash
npm install
```

### 2. Fonts Are Ready!

The project uses **Inter** and **Work Sans** from Google Fonts - they load automatically, no setup needed!

### 3. Start Using the Design System

```tsx
// Example component
export default function MyComponent() {
  return (
    <section className="section bg-primary">
      <div className="container">
        <h1 className="text-h1 text-primary mb-4">
          Welcome to Paradise
        </h1>
        <p className="text-body1 text-secondary mb-6">
          Discover amazing destinations
        </p>
        <button className="btn-primary text-button">
          Explore Now
        </button>
      </div>
    </section>
  );
}
```

## 🎯 Design System Structure

```
Design System
├── Colors
│   ├── Background Colors (3)
│   ├── Brand Colors (2)
│   ├── Text Colors (3)
│   ├── Button Colors (2)
│   └── Special Colors (3)
│
├── Typography
│   ├── Headers (H1, H2, H3)
│   ├── Subtitles (Subtitle1, Subtitle2)
│   ├── Body Text (Body1, Body2)
│   ├── Small Text
│   └── Button Text
│
├── Components
│   ├── Buttons (Primary, Secondary, Outline)
│   ├── Cards (with hover effects)
│   ├── Tags/Badges
│   └── Sections (White, Gray, Gradient)
│
└── Layout
    ├── Container (max-width, centered)
    ├── Section (vertical spacing)
    └── Grid System (responsive)
```

## 📋 Cheat Sheet

### Most Common Classes

```tsx
// Backgrounds
bg-primary      // #F2F4F6 - Main background
bg-white        // #FFFFFF - Cards, modals
bg-gradient     // Gradient background

// Text
text-h1         // 88px heading
text-h2         // 65px heading
text-h3         // 32px heading
text-body1      // 18px body text
text-body2      // 16px body text
text-primary    // #16242A color
text-brand      // #FF6A00 color

// Buttons
btn-primary     // Orange button
btn-secondary   // Dark button
btn-outline     // Outline button
text-button     // Button text style

// Components
card            // Card with shadow
tag             // Badge/tag style
container       // Content container
section         // Section spacing
```

## 🎨 Color Palette at a Glance

| Color | Hex | Usage |
|-------|-----|-------|
| 🟠 Primary | `#FF6A00` | CTAs, links, accents |
| 🔵 Gradient Start | `#FFD9BD` | Hero backgrounds |
| 🔵 Gradient End | `#B3E5F1` | Hero backgrounds |
| ⚪ Background | `#F2F4F6` | Page background |
| ⚫ Text Primary | `#16242A` | Main text |
| 🟡 Tag Background | `#FFEFDF` | Tags, badges |

## ✍️ Typography at a Glance

| Style | Size | Weight | Font |
|-------|------|--------|------|
| H1 | 88px | 600 | Inter |
| H2 | 65px | 600 | Inter |
| H3 | 32px | 600 | Inter |
| Body 1 | 18px | 500 | Inter |
| Body 2 | 16px | 500 | Inter |
| Small | 14px | 500 | Work Sans |

## 🧩 Component Examples

### Hero Section
```tsx
<section className="section-gradient">
  <div className="container">
    <h1 className="text-h1 text-primary">Title</h1>
    <p className="text-body1 text-secondary">Description</p>
    <button className="btn-primary text-button">CTA</button>
  </div>
</section>
```

### Destination Card
```tsx
<div className="card">
  <span className="tag">Featured</span>
  <h3 className="text-h3 text-primary">Bali</h3>
  <p className="text-subtitle2 text-subheader">7 Days</p>
  <p className="text-body2 text-secondary">Description</p>
  <button className="btn-outline text-button">Book</button>
</div>
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Typography automatically scales on mobile. Use Tailwind responsive classes:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## ♿ Accessibility

- All color combinations meet WCAG AA standards
- Semantic HTML used throughout
- Proper heading hierarchy maintained
- Focus states on interactive elements
- Sufficient color contrast ratios

## 🔧 Customization

### Changing Colors

Edit `app/globals.css`:
```css
:root {
  --primary: #FF6A00; /* Change this */
}
```

### Adding New Typography

Edit `app/globals.css`:
```css
.text-custom {
  font-family: var(--font-gilroy);
  font-size: 20px;
  /* ... */
}
```

### Creating New Components

Follow existing patterns in `app/globals.css`:
```css
.my-component {
  background-color: var(--bg-white);
  /* Use design system variables */
}
```

## 📦 Files Modified

- ✅ `app/layout.tsx` - Font configuration
- ✅ `app/globals.css` - All styles and variables
- ✅ `components/Typography.tsx` - Typography component
- ✅ `app/typography-demo/page.tsx` - Typography demo
- ✅ `app/colors-demo/page.tsx` - Colors demo

## 🎓 Learning Path

1. **Start here**: Read this file
2. **Quick reference**: Check [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)
3. **Deep dive**: Read [COLORS.md](./COLORS.md) and [TYPOGRAPHY.md](./TYPOGRAPHY.md)
4. **See it live**: Visit `/typography-demo` and `/colors-demo`
5. **Build**: Start creating components using the system

## 💡 Pro Tips

1. **Use CSS variables** for consistency: `var(--primary)`
2. **Combine utility classes**: `text-h1 text-brand mb-4`
3. **Leverage Tailwind**: Mix design system with Tailwind utilities
4. **Stay semantic**: Use proper HTML elements (h1, h2, p)
5. **Test responsive**: Always check mobile and desktop
6. **Follow hierarchy**: H1 > H2 > H3 for SEO and accessibility

## 🐛 Troubleshooting

### Fonts not loading?
- Check `app/fonts/` directory has Gilroy files
- Verify file names match exactly
- Clear cache: `rm -rf .next && npm run dev`

### Colors not applying?
- Ensure `globals.css` is imported in `layout.tsx`
- Check CSS variable names (case-sensitive)
- Verify class names are correct

### Styles not updating?
- Restart dev server: `npm run dev`
- Clear browser cache
- Check for typos in class names

## 📞 Need Help?

1. Check the demo pages: `/typography-demo` and `/colors-demo`
2. Read the detailed docs: [COLORS.md](./COLORS.md), [TYPOGRAPHY.md](./TYPOGRAPHY.md)
3. Review examples in [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)
4. Look at existing components in the codebase

## ✅ Implementation Checklist

- ✅ Color system defined
- ✅ Typography system defined
- ✅ Component styles created
- ✅ Layout utilities added
- ✅ Demo pages created
- ✅ Documentation written
- ✅ Fonts configured (Inter + Work Sans)

## 🎉 You're Ready!

The design system is fully implemented and ready to use. Start building beautiful, consistent components with confidence!

**Happy coding! 🚀**
