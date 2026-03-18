# TOP MALL — Kozhikode's Premier Women's Fashion Destination

> Where Every Woman Shines

A stunning, award-worthy fashion retail website for **Top Mall**, showcasing budget-friendly women's fashion including abayas, gowns, party wear, shawls, and more. Built with cutting-edge web technologies for maximum visual impact.

## ✨ Features

- **Smooth Scroll Experience** — Integrated Lenis for buttery-smooth scrolling throughout the site
- **Custom Cursor** — Interactive cursor system that reacts to links and images
- **Full-Screen Loader** — Animated loading screen with progress indicator
- **3D Canvas Scenes** — Three.js-powered 3D visualizations with Fiber/Drei
- **Scroll Animations** — Framer Motion + GSAP ScrollTrigger for stunning scroll-based effects
- **Responsive Design** — Mobile-first, fully responsive across all devices
- **Dark Luxury Aesthetic** — Rose gold and champagne color palette with modern typography
- **Instagram Integration** — Direct links to @top_mall_ Instagram
- **WhatsApp Ordering** — One-click WhatsApp integration for direct orders
- **Fast Performance** — Optimized bundle splitting and lazy loading
- **Zero Errors** — Full TypeScript support, zero console errors

## 🎨 Design System

### Color Palette
```css
--bg:       #0a0608  (Deep black)
--primary:  #c8956c  (Rose gold)
--accent:   #e8c9a0  (Champagne gold)
--blush:    #f5ddd5  (Soft blush)
--text:     #f0ece6  (Off-white)
--muted:    #7a6b63  (Muted brown)
```

### Typography
- **Display**: Playfair Display (elegant serif for headings)
- **Body**: DM Sans (clean modern sans-serif)
- **Accent**: Cormorant Garamond (italic for quotes/labels)

## 🏗️ Project Structure

```
top-mall/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Collections.tsx
│   │   ├── Featured3D.tsx
│   │   ├── Marquee.tsx
│   │   ├── About.tsx
│   │   ├── InstagramFeed.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Cursor.tsx
│   │   ├── Loader.tsx
│   │   └── FloatingWhatsApp.tsx
│   ├── hooks/
│   │   ├── useLenis.ts
│   │   └── useScrollReveal.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd top-mall

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open automatically at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Tech Stack

- **React** 19 — UI framework
- **TypeScript** — Type-safe development
- **Vite** 8 — Lightning-fast build tool
- **Tailwind CSS** v4 — Utility-first CSS framework
- **Framer Motion** — Advanced animations
- **Three.js** + **@react-three/fiber** + **@react-three/drei** — 3D graphics
- **GSAP** + **ScrollTrigger** — Scroll-based animations
- **Lenis** — Smooth scroll library
- **React Router DOM** — Client-side routing
- **React Icons** — Icon library

## 🎯 Key Sections

### Loader
- Full-screen animated loader with letter-by-letter "TOP MALL" reveal
- Dress silhouette SVG with stroke animation
- Auto-dismisses after 2.5 seconds

### Custom Cursor
- Two-element cursor system (dot + ring)
- Expands on link hover
- Changes on image hover
- 60fps smooth performance

### Hero Section
- Full viewport height
- 3D background with floating particles and rotating geometry
- Animated text with stagger effect
- Dual CTA buttons (WhatsApp + Instagram)
- Scroll indicator

### Marquee Section
- Infinite horizontal scroll with fashion keywords
- Pause on hover
- Rose gold background with contrasting text

### Collections
- Masonry grid layout
- 5 collection cards with hover effects
- Gradient overlays
- WhatsApp CTA

### Featured 3D
- Large rotating 3D TorusKnot
- GSAP ScrollTrigger pinned section
- Scroll-triggered text animations

### About Section
- Pull quote with elegant typography
- Two-column layout
- Animated concentric circles
- Location card with Google Maps link

### Instagram Feed
- 6-item grid with gradient placeholders
- Hover overlays with Instagram link
- Follow CTA button

### Contact Section
- Three contact cards (WhatsApp, Location, Instagram)
- Direct links with pre-filled messages
- Glass morphism styling

### Floating WhatsApp Button
- Fixed bottom-right position
- Pulse ring animation
- Bounces in after 3 seconds
- Hover expansion with text

### Footer
- Large faded "TOP MALL" logo
- Three-column layout
- Social links
- Copyright info

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1920px

All animations are optimized for reduced motion preferences (`prefers-reduced-motion`).

## 🔗 External Links

- **WhatsApp**: https://wa.me/918219445522
- **Instagram**: https://www.instagram.com/top_mall_/
- **Google Maps**: Maps link to Address Mall, S.M. Street, Kozhikode

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Auto-deploys on every push to main branch.

### Netlify

```bash
# Connect your repo to Netlify at netlify.com
# Build command: npm run build
# Publish directory: dist
```

### GitHub Pages

```bash
# Build and deploy to gh-pages branch
npm run build
npm run deploy
```

## ✅ Quality Assurance

- ✓ **Zero TypeScript errors** — Full type safety
- ✓ **Build succeeds** — Production-ready
- ✓ **Responsive** — Tested at 375px, 768px, 1440px+
- ✓ **Accessible** — WCAG compliance, keyboard navigation, reduced motion support
- ✓ **Performance** — Lazy loading, code splitting, cached assets
- ✓ **SEO** — Meta tags, structured data, semantic HTML
- ✓ **Git-ready** — Comprehensive .gitignore, clean commit history

## 🎬 Animation Library

### Framer Motion
Used for component entrance animations, scroll reveals, and hover effects.

```typescript
// Example: Staggered children animation
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: '-100px' }}
```

### GSAP ScrollTrigger
Used for advanced scroll-based pinning and scrubbing effects.

```typescript
scrollTrigger: {
  trigger: element,
  start: "top center",
  scrub: 1,
}
```

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Use custom port
npm run dev -- --port 3000
```

### 3D Canvas Not Rendering
- Check browser WebGL support
- Ensure no AdBlockers blocking Three.js
- Fall back to 2D CSS rendering if needed

## 📈 Performance Tips

1. **Images**: Use Next-gen formats (WebP, AVIF)
2. **Code Splitting**: Lazy load heavy components with React.lazy()
3. **Animations**: Use requestAnimationFrame for smooth 60fps motion
4. **Scroll**: Lenis provides smooth scroll without jank

## 🎓 Learning Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Three.js Documentation](https://threejs.org/docs/)
- [GSAP ScrollTrigger Guide](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Tailwind CSS](https://tailwindcss.com/docs/)

## 📄 License

Designed and built for Top Mall, Kozhikode, Kerala.

---

**Made with ❤️ in Kerala**

For inquiries, contact Top Mall:
- 📱 WhatsApp: +91 82194 45522
- 📸 Instagram: @top_mall_
- 📍 Address Mall, S.M. Street, Kozhikode – 673001
