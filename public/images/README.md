# Images for Production

## 📥 How to Download Images from Figma

### Step-by-Step Guide:

1. **Open Figma File**
   - Go to your Figma design file
   - Navigate to the "Deals & Offers" section

2. **Select Image Layers**
   - Click on each card's background image
   - Look for layers named like:
     - "Rectangle 4375" (Lemon Tree Hotel)
     - "Rectangle 4376" (Shimla Package)
     - "Rectangle 4377" (Cordelia Cruise)
     - "Rectangle 4378" (Spiti Valley Trek)
     - etc.

3. **Export Images**
   - Right-click on the image layer
   - Select "Export" or use Export panel (right sidebar)
   - Choose format: **PNG** (recommended) or JPG
   - Scale: **2x** for retina displays
   - Click "Export"

4. **Save to This Folder**
   Save with these names:
   ```
   /public/images/deals/
   ├── hotel-lemon-tree.png
   ├── package-shimla-manali.png
   ├── cruise-cordelia.png
   ├── cruise-royal-caribbean.png
   ├── trekking-spiti-valley.png
   ├── community-zanskar-valley.png
   ├── luxury-marriot.png
   └── hotel-explore-more.png
   ```

## 🎨 Image Requirements

- **Format**: PNG (with transparency) or JPG
- **Size**: Minimum 820px × 900px (2x for 410×450 display)
- **Quality**: High quality, 80-90% compression
- **Aspect Ratio**: Maintain original aspect ratio

## 🔄 Alternative: Use Figma API

If you have many images, you can use Figma's API:

```bash
# Get your Figma Personal Access Token
# Settings → Account → Personal Access Tokens

# Use the Figma API to export images
curl -H "X-Figma-Token: YOUR_TOKEN" \
  "https://api.figma.com/v1/images/FILE_KEY?ids=NODE_ID&format=png&scale=2"
```

## 📝 Current Image URLs (from localhost)

These are the current Figma localhost URLs that need to be replaced:

1. `http://localhost:3845/assets/2d4c9922a164c963c1119287efbea275a823655f.png`
   → Save as: `hotel-lemon-tree.png`

2. `http://localhost:3845/assets/fb039e036b15c368d0cd499657492ecfc3992662.png`
   → Save as: `package-shimla-manali.png`

3. `http://localhost:3845/assets/1de67b5c25346458f2bbfd0e3e119a6fd9b3d28d.png`
   → Save as: `cruise-cordelia.png`

4. `http://localhost:3845/assets/4227560266b28cdb08330ef24b434cf30c979a14.png`
   → Save as: `cruise-royal-caribbean.png`

5. `http://localhost:3845/assets/a9e756141a308eb9f6f011cd32e8275328dcffcf.png`
   → Save as: `trekking-spiti-valley.png`

6. `http://localhost:3845/assets/3f6313564fd24cbc3b33dfba7eb3291cfe334e84.png`
   → Save as: `community-zanskar-valley.png`

7. `http://localhost:3845/assets/165752599f7ec9d3b6e278d0024ae76ede6db6bd.png`
   → Save as: `luxury-marriot.png`

## 🚀 After Downloading

1. Place all images in `/public/images/deals/`
2. Update `components/deals/DealsSection.tsx` with new paths
3. Replace `http://localhost:3845/assets/...` with `/images/deals/...`

Example:
```typescript
// Before
imageUrl: "http://localhost:3845/assets/2d4c9922a164c963c1119287efbea275a823655f.png"

// After
imageUrl: "/images/deals/hotel-lemon-tree.png"
```

## 🎯 Quick Fix for Now

If images aren't showing, check:
1. Is Figma desktop app running?
2. Is the Figma file open?
3. Is the MCP server connected?

For production, you MUST download and save images locally!
