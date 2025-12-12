# 📐 Figma Design Specifications

## Travel Tabs Component

### Exact Specifications from Figma

#### Container
- **Flow**: Horizontal
- **Gap**: 5px between tabs
- **Overflow**: Horizontal scroll (hidden scrollbar)

#### Individual Tab Button
- **Width**: Fixed 152px
- **Height**: Hug content (52px)
- **Border Radius**: 
  - Top-left: 10px
  - Top-right: 10px
  - Bottom-left: 0px (square)
  - Bottom-right: 0px (square)

#### Padding
- **Top**: 10px
- **Right**: 30px
- **Bottom**: 15px
- **Left**: 30px

#### Content
- **Gap**: 4px (between icon and text)
- **Icon Size**: 22px × 22px
- **Font Size**: 16px
- **Font Weight**: SemiBold
- **Alignment**: Center (both horizontal and vertical)

#### Colors
**Active State:**
- Background: `#cedde7` (light blue)
- Text: `#29383e` (dark blue)
- Backdrop: blur-sm

**Inactive State:**
- Background: `rgba(1, 1, 1, 0.6)` (60% black)
- Text: `#ffffff` (white)

**Hover State:**
- Background: `rgba(1, 1, 1, 0.7)` (70% black)

### Implementation

```tsx
<button
  className="
    flex items-center justify-center gap-[4px] 
    rounded-t-[10px] font-semibold text-[16px] 
    w-[152px] h-[52px]
    bg-[#cedde7] text-[#29383e] backdrop-blur-sm
  "
  style={{
    paddingTop: "10px",
    paddingRight: "30px",
    paddingBottom: "15px",
    paddingLeft: "30px",
  }}
>
  <Icon className="w-[22px] h-[22px]" />
  <span>Label</span>
</button>
```

### Tab Labels
1. Packages
2. Hotels
3. Cabs
4. Activities
5. Trains
6. Buses
7. Flights
8. Cruise

### Responsive Behavior
- **Desktop**: All tabs visible in a row
- **Tablet**: Horizontal scroll enabled
- **Mobile**: Horizontal scroll with touch support
- **Scrollbar**: Hidden but functional

### Visual Hierarchy
- Active tab stands out with lighter background
- Inactive tabs have semi-transparent dark background
- Smooth transition on state change (0.3s)
- Hover effect for better UX

### Accessibility
- Buttons are keyboard accessible
- Clear visual feedback on hover/active
- Sufficient contrast ratios
- Touch targets meet minimum size (52px height)

## Measurements Summary

| Property | Value |
|----------|-------|
| Tab Width | 152px |
| Tab Height | 52px |
| Border Radius (Top) | 10px |
| Border Radius (Bottom) | 0px |
| Padding Top | 10px |
| Padding Right | 30px |
| Padding Bottom | 15px |
| Padding Left | 30px |
| Gap (Icon-Text) | 4px |
| Gap (Between Tabs) | 5px |
| Icon Size | 22px × 22px |
| Font Size | 16px |

## Color Palette

| State | Background | Text | Opacity |
|-------|-----------|------|---------|
| Active | #cedde7 | #29383e | 100% |
| Inactive | #010101 | #ffffff | 60% |
| Hover | #010101 | #ffffff | 70% |

## Typography

- **Font Family**: Gilroy SemiBold (fallback: Geist Sans)
- **Font Size**: 16px
- **Font Weight**: 600 (SemiBold)
- **Line Height**: 30px
- **Letter Spacing**: -0.32px
- **Text Align**: Center

## Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [Package] [Hotels] [Cabs] [Activities] [Trains] [Buses]... │
│  ↑ 152px   ↑ 5px gap                                        │
│  ↑ 52px height                                              │
└─────────────────────────────────────────────────────────────┘
```

## Icon Specifications

All icons are 22px × 22px with the following:
- **Package**: Suitcase/luggage icon
- **Hotels**: Bed icon
- **Cabs**: Car/taxi icon
- **Activities**: Camping/tent icon
- **Trains**: Train icon
- **Buses**: Bus icon
- **Flights**: Airplane icon
- **Cruise**: Ship icon

## Implementation Notes

1. **Fixed Width**: Each tab is exactly 152px wide
2. **Consistent Height**: All tabs are 52px tall
3. **Asymmetric Padding**: More padding on sides (30px) than top/bottom (10px/15px)
4. **Small Gap**: Only 4px between icon and text for compact look
5. **Rounded Top Only**: Creates tab-like appearance
6. **Horizontal Scroll**: Allows all 8 tabs to be accessible on smaller screens

## Comparison: Before vs After

### Before
- Width: Responsive (variable)
- Height: Variable (py-2)
- Padding: Responsive (px-3 to px-6)
- Font Size: Responsive (text-xs to text-sm)
- Icon Size: Responsive (w-4 to w-5)

### After (Figma Exact)
- Width: Fixed 152px ✅
- Height: Fixed 52px ✅
- Padding: 10px 30px 15px 30px ✅
- Font Size: Fixed 16px ✅
- Icon Size: Fixed 22px ✅

---

## Search Form Fields

### Exact Specifications from Figma

#### Container
- **Background**: `#cedde7` (light blue)
- **Border Radius**: 10px
- **Padding**: 10px
- **Gap**: 10px between fields
- **Layout**: Flex wrap (horizontal flow)

#### Individual Field Boxes

**Common Properties:**
- **Height**: Fixed 68px
- **Border Radius**: 4px
- **Background**: White
- **Padding**: 14px 12px
- **Gap**: 4px (between label and content)

**Field Widths:**
| Field | Width |
|-------|-------|
| Leaving From | 224px |
| Destination | 211px |
| Theme | 202px |
| From Date | 130px |
| To Date | 130px |
| Travelers | 160px |
| Search Button | 143px |

#### Typography

**Labels:**
- Font Size: 14px
- Color: `#9ca3af` (neutral-400) or `#626262`
- Line Height: normal

**Content:**
- Font Size: 16px
- Color: `#1e1e1e`
- Line Height: normal
- Text overflow: ellipsis for long text

#### Icons
- Chevron Down: 18px × 18px
- Calendar: 20px × 20px

#### Search Button
- Width: 143px
- Height: 68px
- Background: `#29383e`
- Border Radius: 8px
- Padding: 26px 10px
- Font Size: 16px
- Font Weight: SemiBold
- Text Color: White

### Implementation

```tsx
<div className="bg-white rounded-[4px] w-[224px] h-[68px] flex flex-col gap-[4px]" 
     style={{ padding: "14px 12px" }}>
  <label className="text-neutral-400 text-[14px] leading-normal">
    Leaving From
  </label>
  <div className="flex items-center justify-between gap-[13px]">
    <span className="text-[#1e1e1e] text-[16px] leading-normal">
      Select leaving Location
    </span>
    <ChevronDownIcon className="w-[18px] h-[18px]" />
  </div>
</div>
```

### Field Measurements Summary

| Field | Width | Height | Padding | Gap (Label-Content) |
|-------|-------|--------|---------|---------------------|
| Leaving From | 224px | 68px | 14px 12px | 4px |
| Destination | 211px | 68px | 14px 12px | 4px |
| Theme | 202px | 68px | 14px 12px | 4px |
| From | 130px | 68px | 14px 12px | 4px |
| To | 130px | 68px | 14px 12px | 4px |
| Travelers | 160px | 68px | 14px 12px | 4px |
| Search | 143px | 68px | 26px 10px | - |

### Text Truncation
- "Select leaving Location" now displays fully (224px width)
- "Select Destination" now displays fully (211px width)
- All text uses proper overflow handling with ellipsis

---

**Status**: ✅ All components implemented exactly as per Figma design
