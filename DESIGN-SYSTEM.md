# Design System Quick Reference

Complete design system documentation for the travel website project.

## 📚 Table of Contents

1. [Colors](#colors)
2. [Typography](#typography)
3. [Components](#components)
4. [Layout](#layout)
5. [Quick Start](#quick-start)

---

## 🎨 Colors

### Color Variables

```css
/* Background Colors */
--bg-primary: #f2f4f6
--bg-secondary: #ebebeb
--bg-white: #ffffff

/* Brand Colors */
--primary: #ff6a00
--primary-light: #ffefdf

/* Text Colors */
--text-primary: #16242a
--text-secondary: #1e1e1e
--text-subheader: #29383e

/* Button Colors */
--btn-primary: #ff6a00
--btn-secondary: #29383e

/* Special */
--tag-bg: #ffefdf
--gradient-start: #ffd9bd
--gradient-end: #b3e5f1
```

### Quick Usage

```tsx
// Background
<div className="bg-primary">...</div>
<div className="bg-white">...</div>
<div className="bg-gradient">...</div>

// Text
<p className="text-primary">...</p>
<p className="text-brand">...</p>

// Buttons
<button className="btn-primary">Click</button>
<button className="btn-secondary">Click</button>
<button className="btn-outline">Click</button>

// Tags
<span className="tag">Featured</span>
```

---

## ✍️ Typography

### Type Scale

| Class | Font | Weight | Size | Usage |
|-------|------|--------|------|-------|
| `.text-h1` | Inter | 600 | 88px | Main titles |
| `.text-h2` | Inter | 600 | 65px | Section headers |
| `.text-h3` | Inter | 600 | 32px | Subsections |
| `.text-subtitle1` | Inter | 600 | 24px | Large subtitles |
| `.text-subtitle2` | Inter | 600 | 18px | Small subtitles |
| `.text-body1` | Inter | 500 | 18px | Primary body |
| `.text-body2` | Inter | 500 | 16px | Secondary body |
| `.text-small` | Work Sans | 500 | 14px | Captions |
| `.text-button` | Inter | 600 | 16px | Buttons (uppercase) |

### Quick Usage

```tsx
// Method 1: CSS Classes
<h1 className="text-h1">Title</h1>
<p className="text-body1">Body text</p>

// Method 2: Typography Component
import Typography from "@/components/Typography";

<Typography variant="h1">Title</Typography>
<Typography variant="body1">Body text</Typography>
```

---

## 🧩 Components

### Button

```tsx
// Primary
<button className="btn-primary text-button">
  Book Now
</button>

// Secondary
<button className="btn-secondary text-button">
  Learn More
</button>

// Outline
<button className="btn-outline text-button">
  View Details
</button>
```

### Card

```tsx
<div className="card">
  <span className="tag">Featured</span>
  <h3 className="text-h3 text-primary">Title</h3>
  <p className="text-body2 text-secondary">Description</p>
  <button className="btn-primary">Action</button>
</div>
```

### Tag/Badge

```tsx
<span className="tag">New</span>
<span className="tag">Popular</span>
<span className="tag">Featured</span>
```

---

## 📐 Layout

### Container

```tsx
<div className="container">
  {/* Max-width: 1280px, centered, responsive padding */}
</div>
```

### Section

```tsx
// White background
<section className="section section-white">
  <div className="container">
    {/* Content */}
  </div>
</section>

// Gray background
<section className="section section-gray">
  <div className="container">
    {/* Content */}
  </div>
</section>

// Gradient background
<section className="section section-gradient">
  <div className="container">
    {/* Content */}
  </div>
</section>
```

---

## 🚀 Quick Start

### 1. Hero Section

```tsx
<section className="section-gradient">
  <div className="container">
    <h1 className="text-h1 text-primary mb-4">
      Discover Your Next Adventure
    </h1>
    <p className="text-body1 text-secondary mb-8">
      Explore amazing destinations around the world
    </p>
    <button className="btn-primary text-button">
      Get Started
    </button>
  </div>
</section>
```

### 2. Feature Cards

```tsx
<section className="section bg-primary">
  <div className="container">
    <h2 className="text-h2 text-primary text-center mb-12">
      Popular Destinations
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="card">
        <span className="tag mb-3">Featured</span>
        <h3 className="text-h3 text-primary mb-2">Bali</h3>
        <p className="text-subtitle2 text-subheader mb-3">
          7 Days • 6 Nights
        </p>
        <p className="text-body2 text-secondary mb-4">
          Experience tropical paradise
        </p>
        <div className="flex items-center justify-between">
          <span className="text-subtitle1 text-brand">$1,299</span>
          <button className="btn-outline text-button">Book</button>
        </div>
      </div>
      {/* More cards... */}
    </div>
  </div>
</section>
```

### 3. Call-to-Action

```tsx
<section className="section section-gradient">
  <div className="container text-center">
    <span className="tag mb-4">Limited Offer</span>
    <h2 className="text-h2 text-primary mb-4">
      Ready to Start Your Journey?
    </h2>
    <p className="text-body1 text-secondary mb-8 max-w-2xl mx-auto">
      Join thousands of travelers who have discovered their dream destinations
    </p>
    <div className="flex gap-4 justify-center">
      <button className="btn-primary text-button">Book Now</button>
      <button className="btn-secondary text-button">Contact Us</button>
    </div>
  </div>
</section>
```

### 4. Navigation

```tsx
<nav className="bg-white shadow-sm sticky top-0 z-50">
  <div className="container">
    <div className="flex items-center justify-between py-4">
      <div className="text-h3 text-brand">TravelApp</div>
      <div className="hidden md:flex gap-6">
        <a href="#" className="text-body2 text-primary hover:text-brand">
          Home
        </a>
        <a href="#" className="text-body2 text-primary hover:text-brand">
          Destinations
        </a>
        <a href="#" className="text-body2 text-primary hover:text-brand">
          About
        </a>
      </div>
      <button className="btn-primary text-button">Book Now</button>
    </div>
  </div>
</nav>
```

---

## 📱 Responsive Design

All components are mobile-responsive:

- **Typography**: Scales down on mobile (< 768px)
- **Grid layouts**: Stack on mobile with `grid-cols-1 md:grid-cols-3`
- **Container**: Responsive padding (16px mobile, 24px desktop)
- **Sections**: Reduced padding on mobile (48px vs 80px)

---

## 🎯 Best Practices

### Colors
- Use `--bg-primary` for main backgrounds
- Use `--primary` for CTAs and important actions
- Use gradient sparingly for hero sections
- Maintain text contrast for accessibility

### Typography
- Use semantic HTML (h1, h2, p)
- Maintain hierarchy (h1 > h2 > h3)
- Use body1 for main content, body2 for secondary
- Use text-button class for all button text

### Components
- Cards should have hover effects
- Buttons should have clear states
- Tags should be used for highlights
- Maintain consistent spacing

### Layout
- Use container for content width
- Use section for vertical spacing
- Alternate section backgrounds
- Keep content centered and readable

---

## 📖 Full Documentation

- **Colors**: See [COLORS.md](./COLORS.md)
- **Typography**: See [TYPOGRAPHY.md](./TYPOGRAPHY.md)

## 🎨 Demo Pages

- **Typography Demo**: `/typography-demo`
- **Colors Demo**: `/colors-demo`

---

## 🛠️ Installation Status

- ✅ Color system implemented
- ✅ Typography system implemented
- ✅ Component styles created
- ✅ Layout utilities added
- ✅ Fonts configured (Inter + Work Sans from Google Fonts)

---

## 💡 Tips

1. **Combine classes**: `<h1 className="text-h1 text-brand mb-4">`
2. **Use CSS variables**: `bg-[var(--primary)]` for custom cases
3. **Leverage Tailwind**: Combine with utility classes for spacing, flex, grid
4. **Stay consistent**: Use design system classes instead of custom styles
5. **Test responsive**: Always check mobile and desktop views

---

**Need help?** Check the demo pages or refer to the detailed documentation files.
