# Gilroy Font Setup Guide

## What I've Done

I've configured your Next.js project to use the Gilroy font family. Here's what's been set up:

1. ✅ Created `app/fonts/gilroy.ts` - Font configuration file
2. ✅ Updated `app/layout.tsx` - Applied Gilroy as the default font
3. ✅ Updated `app/globals.css` - Typography system using Gilroy

## What You Need to Do

### Step 1: Extract Font Files

Extract the `gilroy.zip` file you received from your client. You should find font files inside.

### Step 2: Convert to WOFF2 (Recommended)

For best web performance, convert your font files to `.woff2` format. You can use:
- Online tool: https://cloudconvert.com/ttf-to-woff2
- Or use FontForge, fonttools, etc.

### Step 3: Place Font Files

Copy the converted font files to `app/fonts/` directory with these exact names:

```
app/fonts/
  ├── Gilroy-Medium.woff2      (weight: 500)
  ├── Gilroy-SemiBold.woff2    (weight: 600)
  ├── gilroy.ts                (already created)
  └── README.md
```

**Important:** The file names must match exactly:
- `Gilroy-Medium.woff2`
- `Gilroy-SemiBold.woff2`

### Step 4: If You Have Different Font File Names

If your font files have different names (e.g., `Gilroy-Regular.ttf`, `Gilroy-Bold.woff`), update `app/fonts/gilroy.ts`:

```typescript
export const gilroy = localFont({
  src: [
    {
      path: "./YOUR-ACTUAL-FILENAME.woff2",  // Change this
      weight: "500",
      style: "normal",
    },
    {
      path: "./YOUR-ACTUAL-FILENAME.woff2",  // Change this
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});
```

### Step 5: Add More Font Weights (Optional)

If you have additional weights (Light, Regular, Bold, etc.), add them to the `src` array:

```typescript
export const gilroy = localFont({
  src: [
    {
      path: "./Gilroy-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Gilroy-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});
```

## Typography System

The following typography classes are now available using Gilroy:

| Class | Font | Weight | Size | Letter Spacing |
|-------|------|--------|------|----------------|
| `.text-h1` | Gilroy | Semibold (600) | 88px | -4% |
| `.text-h2` | Gilroy | Semibold (600) | 65px | -4% |
| `.text-h3` | Gilroy | Semibold (600) | 32px | -4% |
| `.text-subtitle1` | Gilroy | Semibold (600) | 24px | -4% |
| `.text-subtitle2` | Gilroy | Semibold (600) | 18px | -4% |
| `.text-body1` | Gilroy | Medium (500) | 18px | -4% |
| `.text-body2` | Gilroy | Medium (500) | 16px | -4% |
| `.text-small` | Gilroy | Medium (500) | 14px | -4% |
| `.text-button` | Gilroy | Semibold (600) | 16px | -4% |

## Testing

After placing the font files, restart your dev server:

```bash
npm run dev
```

Visit http://localhost:3000 and you should see Gilroy font applied throughout the app.

## Troubleshooting

### Fonts not loading?

1. **Check file names** - Must match exactly in `gilroy.ts`
2. **Check file format** - `.woff2` is recommended for web
3. **Clear browser cache** - Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. **Check console** - Look for 404 errors for font files
5. **Restart dev server** - Stop and run `npm run dev` again

### Font files are .ttf or .otf?

You can use them directly, just update the paths in `gilroy.ts`:

```typescript
path: "./Gilroy-Medium.ttf",  // or .otf
```

But `.woff2` is recommended for better performance.

## File Structure

```
app/
├── fonts/
│   ├── Gilroy-Medium.woff2     ← Place your font here
│   ├── Gilroy-SemiBold.woff2   ← Place your font here
│   ├── gilroy.ts               ← Already created
│   └── README.md
├── layout.tsx                  ← Already updated
└── globals.css                 ← Already updated
```

## Need Help?

If you encounter issues:
1. Check that font files are in the correct location
2. Verify file names match exactly
3. Make sure the dev server is restarted
4. Check browser console for errors
