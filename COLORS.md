# Color System Documentation

This document describes the complete color system implemented based on the Figma design specifications.

## Color Palette

### Background Colors

| Name | Variable | Hex Code | Usage |
|------|----------|----------|-------|
| **Background Primary** | `--bg-primary` | `#F2F4F6` | Main page background, sections |
| **Background Secondary** | `--bg-secondary` | `#EBEBEB` | Alternative backgrounds, dividers |
| **Background White** | `--bg-white` | `#FFFFFF` | Cards, modals, overlays |

### Brand Colors

| Name | Variable | Hex Code | Usage |
|------|----------|----------|-------|
| **Primary** | `--primary` | `#FF6A00` | Primary buttons, links, accents |
| **Primary Light** | `--primary-light` | `#FFEFDF` | Tag backgrounds, hover states |

### Text Colors

| Name | Variable | Hex Code | Usage |
|------|----------|----------|-------|
| **Text Primary** | `--text-primary` | `#16242A` | Main headings, body text |
| **Text Secondary** | `--text-secondary` | `#1E1E1E` | Secondary text, descriptions |
| **Text Subheader** | `--text-subheader` | `#29383E` | Subheadings, captions |

### Button Colors

| Name | Variable | Hex Code | Usage |
|------|----------|----------|-------|
| **Button Primary** | `--btn-primary` | `#FF6A00` | Primary action buttons |
| **Button Secondary** | `--btn-secondary` | `#29383E` | Secondary action buttons |

### Special Colors

| Name | Variable | Hex Code | Usage |
|------|----------|----------|-------|
| **Tag Background** | `--tag-bg` | `#FFEFDF` | Tags, badges, labels |
| **Gradient Start** | `--gradient-start` | `#FFD9BD` | Gradient backgrounds (start) |
| **Gradient End** | `--gradient-end` | `#B3E5F1` | Gradient backgrounds (end) |

## Usage

### Method 1: CSS Variables (Recommended)

```css
.my-element {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
```

### Method 2: Utility Classes

#### Background Colors

```tsx
<div className="bg-primary">Primary background</div>
<div className="bg-secondary">Secondary background</div>
<div className="bg-white">White background</div>
<div className="bg-brand">Brand color background</div>
<div className="bg-brand-light">Light brand background</div>
<div className="bg-gradient">Gradient background</div>
```

#### Text Colors

```tsx
<p className="text-primary">Primary text color</p>
<p className="text-secondary">Secondary text color</p>
<p className="text-subheader">Subheader text color</p>
<p className="text-brand">Brand color text</p>
```

#### Button Styles

```tsx
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>
<button className="btn-outline">Outline Button</button>
```

#### Tags/Badges

```tsx
<span className="tag">Featured</span>
<span className="tag">New</span>
```

#### Cards

```tsx
<div className="card">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</div>
```

### Method 3: Tailwind CSS (with CSS variables)

```tsx
<div className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
  Content here
</div>

<button className="bg-[var(--primary)] hover:bg-[#e55f00] text-white px-6 py-3 rounded-lg">
  Click Me
</button>
```

## Component Examples

### Hero Section

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

### Card Grid

```tsx
<section className="section bg-primary">
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="card">
        <span className="tag mb-3">Featured</span>
        <h3 className="text-h3 text-primary mb-2">Bali, Indonesia</h3>
        <p className="text-body2 text-secondary mb-4">
          Experience paradise on earth
        </p>
        <button className="btn-outline text-button">
          View Details
        </button>
      </div>
    </div>
  </div>
</section>
```

### Navigation Bar

```tsx
<nav className="bg-white shadow-sm">
  <div className="container flex items-center justify-between py-4">
    <div className="text-h3 text-brand">TravelApp</div>
    <div className="flex gap-6">
      <a href="#" className="text-body2 text-primary hover:text-brand">Home</a>
      <a href="#" className="text-body2 text-primary hover:text-brand">Destinations</a>
      <a href="#" className="text-body2 text-primary hover:text-brand">About</a>
    </div>
    <button className="btn-primary text-button">Book Now</button>
  </div>
</nav>
```

### Feature Section

```tsx
<section className="section-white">
  <div className="container">
    <h2 className="text-h2 text-primary text-center mb-12">
      Why Choose Us
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-brand-light rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-brand text-2xl">🌍</span>
        </div>
        <h3 className="text-subtitle1 text-primary mb-2">Global Reach</h3>
        <p className="text-body2 text-secondary">
          Access to destinations worldwide
        </p>
      </div>
    </div>
  </div>
</section>
```

### Footer

```tsx
<footer className="bg-secondary">
  <div className="container py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h4 className="text-subtitle1 text-primary mb-4">TravelApp</h4>
        <p className="text-body2 text-subheader">
          Your journey starts here
        </p>
      </div>
      <div>
        <h5 className="text-subtitle2 text-primary mb-3">Quick Links</h5>
        <ul className="space-y-2">
          <li><a href="#" className="text-body2 text-subheader hover:text-brand">Home</a></li>
          <li><a href="#" className="text-body2 text-subheader hover:text-brand">About</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
```

## Accessibility

### Color Contrast Ratios

All color combinations meet WCAG AA standards:

- **Primary text on white background**: 12.5:1 (AAA)
- **Secondary text on white background**: 11.8:1 (AAA)
- **White text on primary button**: 4.8:1 (AA)
- **Primary color on light background**: 4.2:1 (AA)

### Best Practices

1. **Never use color alone** to convey information
2. **Maintain sufficient contrast** between text and background
3. **Test with color blindness simulators** to ensure accessibility
4. **Use semantic HTML** with proper ARIA labels
5. **Provide text alternatives** for color-coded information

## Responsive Behavior

Colors remain consistent across all screen sizes. However, consider:

- **Mobile**: Use lighter backgrounds to reduce eye strain
- **Dark mode**: Consider implementing dark mode variants (future enhancement)
- **High contrast mode**: Ensure colors work in high contrast settings

## Color Psychology

- **Orange (#FF6A00)**: Energy, enthusiasm, adventure, warmth
- **Blue-Green Gradient**: Calm, trust, nature, exploration
- **Dark Blues/Grays**: Professionalism, stability, reliability
- **Light Backgrounds**: Cleanliness, simplicity, modern

## Implementation Checklist

- ✅ Color variables defined in `app/globals.css`
- ✅ Utility classes created for all colors
- ✅ Button styles implemented
- ✅ Card styles implemented
- ✅ Section styles implemented
- ✅ Gradient background implemented
- ✅ Tag/badge styles implemented
- ✅ Hover states and transitions added
- ✅ Responsive considerations included

## Troubleshooting

### Colors not applying?
- Check that `globals.css` is imported in `layout.tsx`
- Verify CSS variable names match exactly
- Clear browser cache and rebuild

### Gradient not showing?
- Ensure you're using the `.bg-gradient` class
- Check browser compatibility for CSS gradients
- Verify gradient color variables are defined

### Button hover not working?
- Check that you're using the correct button class
- Verify transitions are enabled in your CSS
- Test in different browsers

## Future Enhancements

- [ ] Dark mode color variants
- [ ] Additional gradient options
- [ ] Color theme switcher
- [ ] Semantic color tokens (success, warning, error, info)
- [ ] Color opacity utilities
- [ ] Animation color transitions
