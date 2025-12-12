# Button Styling Update - Figma Design Match

## Changes Made

Updated the Signup and Login buttons in the Header component to match the exact Figma design specifications.

## Button Specifications

### Signup Button
**Design from Figma (node-id: 1-1176)**

- **Background**: `#29383e` (solid dark blue-gray)
- **Text Color**: White
- **Font**: Gilroy-SemiBold (using system font-semibold)
- **Font Size**: 14px
- **Width**: 90px
- **Height**: 40px
- **Padding**: 24px horizontal, 16px vertical
- **Border Radius**: 8px
- **Backdrop Blur**: 3px
- **Hover State**: `#1e2c32` (darker shade)

### Login Button
**Design from Figma (node-id: 1-1176)**

- **Background**: `rgba(41,56,62,0.4)` (semi-transparent dark blue-gray)
- **Text Color**: `#16242a` (dark text)
- **Font**: Gilroy-SemiBold (using system font-semibold)
- **Font Size**: 14px
- **Width**: 90px
- **Height**: 40px
- **Padding**: 24px horizontal, 16px vertical
- **Border Radius**: 8px
- **Backdrop Blur**: 3px
- **Hover State**: `rgba(41,56,62,0.5)` (slightly more opaque)
- **Visibility**: Hidden on mobile (`hidden sm:flex`)

## Before vs After

### Before:
```tsx
// Signup button had different colors for mobile/desktop
<button className="px-3 sm:px-6 py-2 bg-white md:bg-[#16242a] text-[#16242a] md:text-white ...">
  Signup
</button>

// Login button had wrong background color
<button className="hidden sm:block px-6 py-2 bg-[#6b7c85] text-white ...">
  Login
</button>
```

### After:
```tsx
// Signup button - consistent across all screen sizes
<button className="backdrop-blur-[3px] bg-[#29383e] text-white text-[14px] font-semibold rounded-[8px] px-[24px] py-[16px] h-[40px] w-[90px] ...">
  Signup
</button>

// Login button - matches Figma design
<button className="hidden sm:flex backdrop-blur-[3px] bg-[rgba(41,56,62,0.4)] text-[#16242a] text-[14px] font-semibold rounded-[8px] px-[24px] py-[16px] h-[40px] w-[90px] ...">
  Login
</button>
```

## Key Improvements

1. **Consistent Styling**: Signup button now has the same appearance on all screen sizes
2. **Exact Color Match**: Both buttons use the exact colors from Figma design
3. **Proper Dimensions**: Fixed width (90px) and height (40px) as per design
4. **Backdrop Blur**: Added 3px backdrop blur effect for both buttons
5. **Better Hover States**: Improved hover effects that maintain design consistency

## Files Modified

- `components/Header.tsx` - Updated button styling

## Testing

Run the development server and verify:
```bash
npm run dev
```

1. **Signup button** should have dark blue-gray background (`#29383e`) with white text
2. **Login button** should have semi-transparent background with dark text
3. Both buttons should be exactly 90px wide and 40px tall
4. Hover effects should work smoothly
5. Login button should be hidden on mobile screens

## Design Reference

Figma Design: https://www.figma.com/design/WIXy6llzD6Zfs8zN8xIYS0/Untitled?node-id=1-1176&m=dev
