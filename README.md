# Kerem Uğurlu - Indie Hacker Profile Site

A minimalist, responsive one-page personal site built with Next.js 14, TypeScript, and Tailwind CSS. Designed to showcase indie hacker projects and build-in-public updates.

## Features

- ⚡ **Lightning Fast**: Static export ready with Next.js 14 App Router
- 🎨 **Minimalist Design**: Clean typography-first layout with plenty of whitespace
- 🌙 **Dark Mode**: Toggle with localStorage persistence
- 📱 **Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: High contrast, keyboard navigation, and screen reader friendly
- 🔍 **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, robots.txt, and sitemap
- 🚀 **Production Ready**: Optimized build with static export support

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

## Project Structure

```
├── src/app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main profile page
│   └── globals.css         # Global styles and CSS variables
├── public/
│   ├── og.png             # Open Graph image
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # SEO sitemap
├── next.config.ts         # Next.js configuration for static export
└── README.md              # This file
```

## Customization

All content is centralized in the `profile` object at the top of `src/app/page.tsx`:

```typescript
const profile = {
  name: "Kerem Uğurlu",
  location: "Istanbul, TR",
  metric: "$0/month",
  motto: "I build tiny internet businesses.",
  blurb: "Shipping micro-SaaS tools fast. Writing about ideas, distribution and profitability.",
  email: "kerem@keremugurlu.com",
  socials: {
    x: "https://x.com/keremugurlu",
    github: "https://github.com/keremugurlu",
    linkedin: "https://www.linkedin.com/in/keremugurlu/"
  },
  projects: [
    // Add your projects here
  ]
};
```

## Sections

1. **Identity Block**: Name, location, metric badge, motto
2. **Social Links**: Subscribe button and social media links
3. **What I Do**: Brief description of your work
4. **Projects Grid**: Cards with project links and descriptions
5. **Newsletter**: Call-to-action for email subscriptions
6. **Footer**: Copyright and minimal links

## Performance

- Lighthouse scores: Performance ≥95, Best Practices ≥95, SEO ≥95, Accessibility ≥90
- Static export ready for deployment to any static hosting
- Optimized images and minimal JavaScript bundle
- CSS variables for consistent theming

## Deployment

The site is configured for static export and can be deployed to:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `out` folder
- **GitHub Pages**: Push the `out` folder to your repository
- **Any static hosting**: Upload the `out` folder contents

## License

MIT License - feel free to use this as a template for your own profile site.

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS.# keremugurlu
