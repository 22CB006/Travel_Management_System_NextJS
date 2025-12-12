# Components Documentation

## Component Hierarchy

```
Page (app/page.tsx)
├── Header
│   ├── Logo (TravelIcon)
│   ├── Navigation (Desktop)
│   ├── MobileMenu (Mobile/Tablet)
│   └── Auth Buttons (Signup/Login)
├── Hero
│   ├── Tagline
│   └── Main Heading (DISCOVER EXPLORE TRAVEL)
└── SearchSection
    ├── TravelTabs
    │   └── 8 Tab Buttons (Packages, Hotels, etc.)
    └── SearchForm
        ├── Form Fields (7 inputs)
        └── Search Button
        └── Add Flight Checkbox
```

## Component Details

### Header.tsx
**Type**: Client Component  
**Purpose**: Main navigation bar with logo, menu, and auth buttons  
**Props**: None  
**Responsive**: 
- Mobile: Shows logo, mobile menu, and Signup button
- Desktop: Shows full navigation menu and both auth buttons

### Hero.tsx
**Type**: Client Component  
**Purpose**: Hero section with tagline and animated scrolling heading  
**Props**: None  
**State**: `currentIndex` - tracks current word, `isAnimating` - controls animation start  
**Animation**: 
- Initial 2-second delay showing "DISCOVER"
- Words scroll up and fade out every 2 seconds
- Cycles through: DISCOVER → EXPLORE → TRAVEL → DISCOVER (infinite loop)
- Smooth 700ms transitions with ease-in-out timing
**Responsive**: Text scales from 48px (mobile) to 180px (desktop)

### SearchSection.tsx
**Type**: Server Component  
**Purpose**: Container for travel tabs and search form  
**Props**: None  
**Features**: Max-width container with responsive padding

### TravelTabs.tsx
**Type**: Client Component  
**Purpose**: Category selection tabs  
**Props**: None  
**State**: `activeTab` - tracks selected category  
**Features**: 
- 8 travel categories
- Active state styling
- Horizontal scroll on mobile
- Icon + label for each tab

### SearchForm.tsx
**Type**: Client Component  
**Purpose**: Multi-field booking search form  
**Props**: None  
**Fields**:
1. Leaving From (dropdown)
2. Destination (dropdown)
3. Theme (dropdown)
4. From Date (date picker)
5. To Date (date picker)
6. Travelers (selector)
7. Search Button
**Features**: 
- Responsive grid layout
- Add flight checkbox
- Icon indicators (calendar, chevron)

### MobileMenu.tsx
**Type**: Client Component  
**Purpose**: Mobile navigation menu  
**Props**: None  
**State**: `isOpen` - controls menu visibility  
**Features**:
- Hamburger icon animation
- Dropdown menu with all nav items
- Backdrop blur effect
- Auto-close on selection (to be implemented)

## Icon Components

All icons are SVG-based React components located in `components/icons/`:

- **ActivityIcon**: Camping/outdoor activities
- **BusIcon**: Bus travel
- **CabIcon**: Taxi/cab services
- **CalendarIcon**: Date selection
- **ChevronDownIcon**: Dropdown indicator
- **CruiseIcon**: Cruise travel
- **FlightIcon**: Air travel
- **HotelIcon**: Hotel bookings
- **PackageIcon**: Travel packages
- **TrainIcon**: Train travel
- **TravelIcon**: Logo icon

**Props**: `className?: string` - for styling  
**Usage**: `<IconName className="w-6 h-6 text-blue-500" />`

## Styling Conventions

### Color Classes
- `bg-[#cedde7]` - Light blue (active states)
- `bg-[#29383e]` - Dark blue (buttons)
- `bg-[#16242a]` - Darker blue (logo, text)
- `bg-black/60` - Semi-transparent black
- `text-white` - White text
- `text-neutral-400` - Gray labels

### Responsive Patterns
```tsx
// Mobile-first approach
className="text-sm sm:text-base lg:text-lg"
className="px-4 sm:px-6 lg:px-8"
className="hidden lg:flex" // Desktop only
className="lg:hidden" // Mobile only
```

### Common Patterns
- Buttons: `rounded-lg px-6 py-2 font-semibold transition-colors`
- Form fields: `bg-white rounded px-3 py-4`
- Containers: `max-w-[1400px] mx-auto px-4`

## State Management

Currently using local component state with `useState`. For production:
- Consider Zustand or Redux for global state
- React Query for server state
- Form libraries like React Hook Form

## Accessibility

- Semantic HTML elements
- Button elements for clickable items
- Alt text for images (to be added)
- Keyboard navigation support (to be enhanced)
- ARIA labels for icons (to be added)

## Future Enhancements

1. **Form Validation**: Add Zod or Yup schemas
2. **Date Pickers**: Integrate react-datepicker or similar
3. **Dropdowns**: Add proper select components
4. **Animations**: Add Framer Motion for smooth transitions
5. **Loading States**: Add skeleton loaders
6. **Error Handling**: Add error boundaries and toast notifications
