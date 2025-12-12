# Font Configuration

## ✅ Current Setup: Inter (Google Fonts)

This project uses **Inter** as the primary font - a free, open-source alternative to Gilroy.

### Why Inter?

- **Free & Open Source**: No licensing costs
- **Similar to Gilroy**: Clean, modern, geometric sans-serif
- **Excellent Readability**: Optimized for screens
- **Google Fonts**: Automatically loaded, no files needed
- **Professional**: Used by GitHub, Mozilla, and many others

### Fonts in Use:

1. **Inter** (Primary)
   - Weights: 500 (Medium), 600 (Semibold)
   - Usage: Headers, body text, buttons
   - Source: Google Fonts (automatic)

2. **Work Sans** (Secondary)
   - Weights: 500 (Medium), 700 (Bold)
   - Usage: Small text, captions
   - Source: Google Fonts (automatic)

## 🔄 Alternative Options

If you want to use a different font in the future:

### Option 1: Use Gilroy (if purchased)

Place these files in this directory:
- `Gilroy-Medium.woff2` (weight: 500)
- `Gilroy-SemiBold.woff2` (weight: 600)

Then update `app/layout.tsx` to use local fonts instead of Inter.

### Option 2: Other Google Fonts Alternatives

Similar fonts to Gilroy available on Google Fonts:
- **Montserrat** - Geometric, clean
- **Poppins** - Rounded, friendly
- **DM Sans** - Modern, versatile
- **Plus Jakarta Sans** - Contemporary, elegant

To switch fonts, edit `app/layout.tsx` and change the import.

## 📝 No Action Required

The fonts are already configured and working! Inter and Work Sans are loaded automatically from Google Fonts.
