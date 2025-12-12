# Typography System Documentation

This document describes the typography system implemented based on the Figma design specifications.

## Font Families

### Primary: Inter (Gilroy Alternative)
- **Usage**: Headers, subtitles, body text, buttons
- **Weights**: 
  - Medium (500) - Body text
  - Semibold (600) - Headers, subtitles, buttons
- **Source**: Google Fonts (automatically loaded)
- **Why Inter?**: Free, open-source font that closely matches Gilroy's clean, modern aesthetic

### Secondary: Work Sans
- **Usage**: Small text, captions
- **Weights**: Medium (500), Bold (700)
- **Source**: Google Fonts (automatically loaded)

## Typography Scale

| Style | Font | Weight | Size | Line Height | Letter Spacing | Usage |
|-------|------|--------|------|-------------|----------------|-------|
| **H1** | Inter | Semibold (600) | 88px | 1 | -4% | Main page titles |
| **H2** | Inter | Semibold (600) | 65px | 1 | -4% | Section headers |
| **H3** | Inter | Semibold (600) | 32px | 1 | -4% | Subsection headers |
| **Subtitle 1** | Inter | Semibold (600) | 24px | 1 | -4% | Large subtitles |
| **Subtitle 2** | Inter | Semibold (600) | 18px | 1 | -4% | Small subtitles |
| **Body 1** | Inter | Medium (500) | 18px | 1.4 | -4% | Primary body text |
| **Body 2** | Inter | Medium (500) | 16px | 1.4 | -4% | Secondary body text |
| **Small** | Work Sans | Medium (500) | 14px | 1.4 | -4% | Captions, labels |
| **Button** | Inter | Semibold (600) | 16px | 1 | -4% | Button text (uppercase) |

## Usage

### Method 1: CSS Classes (Recommended for simple cases)

```tsx
<h1 className="text-h1">Main Title</h1>
<h2 className="text-h2">Section Header</h2>
<h3 className="text-h3">Subsection</h3>
<p className="text-body1">This is body text.</p>
<p className="text-small">Small caption text</p>
<button className="text-button">Click Me</button>
```

### Method 2: Typography Component (Recommended for consistency)

```tsx
import Typography from "@/components/Typography";

<Typography variant="h1">Main Title</Typography>
<Typography variant="h2">Section Header</Typography>
<Typography variant="body1">This is body text.</Typography>
<Typography variant="small">Small caption text</Typography>
<Typography variant="button">Click Me</Typography>
```

### Method 3: Custom Element with Typography

```tsx
// Use 'as' prop to change the HTML element
<Typography variant="h2" as="h1">
  Styled as H2 but rendered as H1
</Typography>

<Typography variant="body1" as="div">
  Body text in a div
</Typography>
```

### Method 4: Combining with Custom Classes

```tsx
<Typography variant="h1" className="text-blue-600 mb-4">
  Blue Title with Margin
</Typography>

<p className="text-body2 text-gray-600">
  Gray body text
</p>
```

## Color Variables

The system includes predefined text colors:

```css
--text-primary: #0e0e2c   /* Main text color */
--text-secondary: #4a4a68  /* Secondary text color */
```

Usage:
```tsx
<p className="text-body1 text-[var(--text-secondary)]">
  Secondary colored text
</p>
```

## Responsive Behavior

Typography automatically scales down on mobile devices (< 768px):

- H1: 88px → 48px
- H2: 65px → 40px
- H3: 32px → 28px
- Subtitle 1: 24px → 20px

## Installation Steps

1. ✅ Typography classes added to `app/globals.css`
2. ✅ Font configuration updated in `app/layout.tsx`
3. ✅ Typography component created at `components/Typography.tsx`
4. ✅ **Inter font configured** (Google Fonts - no files needed)
5. ✅ **Work Sans font configured** (Google Fonts - no files needed)

## Examples

### Hero Section
```tsx
<section>
  <Typography variant="h1" className="mb-4">
    Discover Your Next Adventure
  </Typography>
  <Typography variant="body1" className="text-[var(--text-secondary)]">
    Explore amazing destinations around the world
  </Typography>
</section>
```

### Card Component
```tsx
<div className="card">
  <Typography variant="h3" className="mb-2">
    Paris, France
  </Typography>
  <Typography variant="subtitle2" className="mb-3">
    7 Days • 6 Nights
  </Typography>
  <Typography variant="body2" className="text-[var(--text-secondary)]">
    Experience the city of lights with our exclusive package
  </Typography>
  <button className="text-button mt-4">
    Book Now
  </button>
</div>
```

### Form Labels
```tsx
<label>
  <Typography variant="small" className="text-[var(--text-secondary)] mb-1">
    Email Address
  </Typography>
  <input type="email" />
</label>
```

## Best Practices

1. **Semantic HTML**: Use appropriate HTML elements (h1, h2, p) for SEO and accessibility
2. **Consistency**: Stick to the defined typography scale
3. **Hierarchy**: Use larger sizes for more important content
4. **Readability**: Maintain proper line height and letter spacing
5. **Responsive**: Test typography on different screen sizes
6. **Accessibility**: Ensure sufficient color contrast (WCAG AA minimum)

## Troubleshooting

### Fonts not loading?
- Fonts are loaded from Google Fonts automatically
- Check your internet connection
- Clear browser cache and rebuild: `npm run build`
- Verify `app/layout.tsx` has Inter and Work Sans imports

### Styles not applying?
- Ensure you're importing the Typography component correctly
- Check that `globals.css` is imported in `layout.tsx`
- Verify class names match exactly (case-sensitive)

### Need different font weights?
- Add additional font files to `app/fonts/`
- Update the `localFont` configuration in `layout.tsx`
- Add new CSS classes in `globals.css`
