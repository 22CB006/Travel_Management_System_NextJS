# 🎬 Hero Animation Guide

## Overview

The hero section features a dynamic scrolling text animation that cycles through three words: **DISCOVER**, **EXPLORE**, and **TRAVEL**.

## Animation Behavior

### Timeline

```
0s        → DISCOVER visible (static)
2s        → DISCOVER scrolls up, EXPLORE scrolls in
4s        → EXPLORE scrolls up, TRAVEL scrolls in
6s        → TRAVEL scrolls up, DISCOVER scrolls in
8s        → Loop continues...
```

### Visual Flow

```
┌─────────────────────┐
│                     │
│     DISCOVER ↑      │  ← Scrolls up and fades out
│                     │
├─────────────────────┤
│                     │
│     EXPLORE  ●      │  ← Currently visible (centered)
│                     │
├─────────────────────┤
│                     │
│     TRAVEL   ↓      │  ← Waiting below (hidden)
│                     │
└─────────────────────┘
```

## Technical Implementation

### Component: `components/Hero.tsx`

**Type**: Client Component (`"use client"`)

**State Management**:
```typescript
const [currentIndex, setCurrentIndex] = useState(0);
const [isAnimating, setIsAnimating] = useState(false);
```

**Animation Logic**:
1. **Initial State**: Shows "DISCOVER" (index 0)
2. **2-Second Delay**: Waits before starting animation
3. **Interval**: Changes word every 2 seconds
4. **Infinite Loop**: Cycles through array indices (0 → 1 → 2 → 0...)

### CSS Transitions

```css
transition-all duration-700 ease-in-out
```

- **Duration**: 700ms (0.7 seconds)
- **Timing**: ease-in-out (smooth acceleration/deceleration)
- **Properties**: transform (translateY) and opacity

### Transform States

| State | Transform | Opacity | Description |
|-------|-----------|---------|-------------|
| Current | `translate-y-0` | `opacity-100` | Centered and visible |
| Previous | `-translate-y-full` | `opacity-0` | Scrolled up and hidden |
| Next | `translate-y-full` | `opacity-0` | Waiting below, hidden |

## Customization

### Change Animation Speed

Edit the interval duration in `components/Hero.tsx`:

```typescript
// Current: 2 seconds
const interval = setInterval(() => {
  setCurrentIndex((prev) => (prev + 1) % words.length);
}, 2000); // Change this value (in milliseconds)
```

**Examples**:
- Faster: `1000` (1 second)
- Slower: `3000` (3 seconds)
- Very slow: `5000` (5 seconds)

### Change Initial Delay

Edit the initial timeout:

```typescript
// Current: 2 seconds
const initialDelay = setTimeout(() => {
  setIsAnimating(true);
  setCurrentIndex(1);
}, 2000); // Change this value
```

### Change Transition Duration

Edit the Tailwind class:

```typescript
className="transition-all duration-700 ease-in-out"
//                          ^^^
// Change to: duration-500, duration-1000, etc.
```

### Add More Words

Edit the words array:

```typescript
const words = ["DISCOVER", "EXPLORE", "TRAVEL", "ADVENTURE", "JOURNEY"];
```

### Change Easing Function

Replace `ease-in-out` with:
- `ease-linear` - Constant speed
- `ease-in` - Slow start, fast end
- `ease-out` - Fast start, slow end
- Custom: `transition-[cubic-bezier(0.4,0,0.2,1)]`

## Responsive Behavior

The animation works across all screen sizes:

| Breakpoint | Font Size | Container Height |
|------------|-----------|------------------|
| Mobile (< 640px) | 48px | 150px |
| Small (640px+) | 72px | 220px |
| Medium (768px+) | 96px | 280px |
| Large (1024px+) | 144px | 350px |
| XL (1280px+) | 180px | 500px |

## Performance Considerations

### Optimizations Applied

1. **CSS Transitions**: Uses GPU-accelerated transforms
2. **Single Interval**: Only one timer running
3. **Cleanup**: Properly clears timeouts and intervals
4. **Overflow Hidden**: Prevents layout shifts

### Best Practices

- ✅ Uses `transform` instead of `top/bottom` (better performance)
- ✅ Uses `opacity` for fading (GPU-accelerated)
- ✅ Cleans up effects on unmount
- ✅ No layout recalculations during animation

## Accessibility

### Current Implementation

- Text remains readable during transitions
- No flashing or rapid movements
- Smooth, predictable animation

### Potential Improvements

Add `prefers-reduced-motion` support:

```typescript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (prefersReducedMotion) {
  // Disable animation or use fade-only
}
```

## Troubleshooting

### Animation Not Starting

**Issue**: Words don't animate  
**Solution**: Ensure component is client-side (`"use client"` directive)

### Jerky Animation

**Issue**: Animation stutters  
**Solution**: Check browser performance, reduce transition duration

### Words Overlapping

**Issue**: Multiple words visible at once  
**Solution**: Verify `overflow-hidden` is applied to container

### Wrong Initial Word

**Issue**: Starts with wrong word  
**Solution**: Check `currentIndex` initial state (should be 0)

## Animation States Diagram

```
State 0 (Initial - 0-2s):
┌─────────────┐
│  DISCOVER   │ ← Visible
│             │
│  EXPLORE    │ ← Hidden below
│             │
│  TRAVEL     │ ← Hidden below
└─────────────┘

State 1 (After 2s):
┌─────────────┐
│  DISCOVER   │ ← Scrolling up (fading)
│             │
│  EXPLORE    │ ← Scrolling to center
│             │
│  TRAVEL     │ ← Still hidden below
└─────────────┘

State 2 (After 4s):
┌─────────────┐
│  EXPLORE    │ ← Scrolling up (fading)
│             │
│  TRAVEL     │ ← Scrolling to center
│             │
│  DISCOVER   │ ← Waiting below
└─────────────┘

State 3 (After 6s):
┌─────────────┐
│  TRAVEL     │ ← Scrolling up (fading)
│             │
│  DISCOVER   │ ← Scrolling to center
│             │
│  EXPLORE    │ ← Waiting below
└─────────────┘

... Loop continues infinitely
```

## Code Example

Full implementation:

```typescript
"use client";

import { useEffect, useState } from "react";

const words = ["DISCOVER", "EXPLORE", "TRAVEL"];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setIsAnimating(true);
      setCurrentIndex(1);
    }, 2000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="relative h-[500px] overflow-hidden">
      {words.map((word, index) => {
        const position = (index - currentIndex + words.length) % words.length;
        
        return (
          <h1
            key={word}
            className={`
              absolute text-white font-bold
              transition-all duration-700 ease-in-out
              ${position === 0 ? "translate-y-0 opacity-100" : ""}
              ${position === words.length - 1 ? "-translate-y-full opacity-0" : ""}
              ${position > 0 && position < words.length - 1 ? "translate-y-full opacity-0" : ""}
            `}
          >
            {word}
          </h1>
        );
      })}
    </div>
  );
}
```

---

**Animation Status**: ✅ Fully Implemented and Working
