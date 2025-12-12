# Image Download Guide for Production

## 🎯 Images You Need to Download

### 1. Hero Background Image
**Location in Figma**: Main hero section background (the mountain/winter landscape)
**Save as**: `D:\travel\travel\public\images\hero-background.png`
**Current URL**: `http://localhost:3845/assets/5c6b4084c8b74e6522ade4abab74ff7ad529f2f1.png`

### 2. Deal Card Images
**Location in Figma**: Deals & Offers section cards
**Save to folder**: `D:\travel\travel\public\images\deals\`

| Card | Save As | Current Localhost URL |
|------|---------|----------------------|
| Lemon Tree Hotel | `hotel-lemon-tree.png` | ✅ DOWNLOADED |
| Shimla Package | `package-shimla-manali.png` | `2d4c9922...` |
| Cordelia Cruise | `cruise-cordelia.png` | `fb039e03...` |
| Royal Caribbean | `cruise-royal-caribbean.png` | `1de67b5c...` |
| Spiti Valley Trek | `trekking-spiti-valley.png` | `4227560...` |
| Zanskar Valley | `community-zanskar-valley.png` | `a9e75614...` |
| Marriot Hotel | `luxury-marriot.png` | `3f631356...` |
| Explore More | `hotel-explore-more.png` | `165752599...` |

## 📥 How to Download from Figma

### Method 1: Export Individual Images (Recommended)

1. **Open Figma Desktop App**
   - Make sure your Figma file is open
   - Navigate to the design with the images

2. **For Hero Background**:
   - Click on the hero section
   - Find the background image layer (usually named "Rectangle" or "Image")
   - Right-click → Export
   - Settings:
     - Format: PNG
     - Scale: 2x (for retina displays)
     - Size: Minimum 3840×2160 (4K) for full-screen backgrounds
   - Click Export
   - Save as: `hero-background.png` in `D:\travel\travel\public\images\`

3. **For Deal Cards**:
   - Click on each card
   - Find the background image layer
   - Right-click → Export
   - Settings:
     - Format: PNG
     - Scale: 2x
     - Size: Minimum 820×900 (2x of 410×450)
   - Export and save with the names from the table above

### Method 2: Export from Layers Panel

1. Open the Layers panel (left sidebar)
2. Find the image layers
3. Right-click on each layer → Export
4. Follow the same export settings as Method 1

### Method 3: Use Export Panel

1. Select the layer with the image
2. Look at the right sidebar
3. Find "Export" section at the bottom
4. Click "+" to add export settings
5. Choose PNG, 2x scale
6. Click "Export [layer name]"

## ✅ After Downloading

### Check Your Files:
```
D:\travel\travel\public\images\
├── hero-background.png          ← Hero section background
└── deals\
    ├── hotel-lemon-tree.png     ← ✅ Already downloaded
    ├── package-shimla-manali.png
    ├── cruise-cordelia.png
    ├── cruise-royal-caribbean.png
    ├── trekking-spiti-valley.png
    ├── community-zanskar-valley.png
    ├── luxury-marriot.png
    └── hotel-explore-more.png
```

### Update Code:
The code has already been updated to use these paths:
- ✅ Hero background: `/images/hero-background.png`
- ✅ Lemon Tree Hotel: `/images/deals/hotel-lemon-tree.png`
- ⏳ Other cards: Still need to be updated after download

## 🎨 Image Requirements

### Hero Background:
- **Format**: PNG or JPG
- **Minimum Size**: 3840×2160 (4K)
- **Recommended**: 1920×1080 minimum for HD displays
- **Quality**: High (90-100%)
- **Aspect Ratio**: 16:9 or wider

### Deal Cards:
- **Format**: PNG (preferred for quality)
- **Size**: 820×900 pixels (2x for retina)
- **Display Size**: 410×450 pixels
- **Quality**: High (80-90%)
- **Aspect Ratio**: Maintain original

## 🚀 Quick Test

After downloading images, run:
```bash
npm run dev
```

Then check:
1. Hero background loads correctly
2. Deal cards show images (not gray placeholders)
3. Images are sharp on retina displays
4. No console errors about missing images

## 🔍 Troubleshooting

**Images not showing?**
- Check file paths are correct
- Verify files are in the right folders
- Check file names match exactly (case-sensitive)
- Make sure files are PNG format
- Restart dev server after adding images

**Images blurry?**
- Export at 2x scale from Figma
- Use PNG format for better quality
- Check original image resolution in Figma

**Large file sizes?**
- Compress images using tools like TinyPNG
- Target: < 500KB for deal cards, < 1MB for hero
- Use JPG for photos, PNG for graphics with transparency
