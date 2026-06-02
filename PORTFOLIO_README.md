# Premium Dark Futuristic Portfolio - Anjana Unni P

A modern, fully responsive portfolio website built with Next.js 16, Tailwind CSS, and Framer Motion animations. Designed to impress senior software engineers and recruiters from top tech companies like Deloitte, IBM, and Accenture.

## 🎯 Features

### Visual Design
- **Dark Futuristic Theme**: Deep navy (#0a0e27) and black backgrounds with premium styling
- **Glassmorphism Cards**: Frosted glass effect with backdrop blur and transparent backgrounds
- **Gradient Accents**: Purple (#9f7aea) to cyan (#00d9ff) gradient themes throughout
- **Glowing Effects**: Subtle box shadows and glow animations for premium feel
- **Smooth Animations**: Framer Motion animations with stagger effects and hover interactions

### Sections
1. **Navbar**: Fixed navigation with logo, menu links, social icons, and resume download
2. **Hero Section**: Eye-catching introduction with animated text, glowing circles, and CTA buttons
3. **About Me**: Three-card layout showing personality, mindset, and quick overview
4. **Technical Skills**: Categorized skills with animated progress bars and gradient icons
5. **Featured Projects**: Project showcase with tech badges, GitHub, and demo links
6. **Journey Timeline**: Vertical animated timeline showing developer growth milestones
7. **Certifications**: Certificate cards from IBM, Google, Infosys, and Microsoft
8. **Contact Section**: Contact information and connect area with social links

### Technical Features
- ✅ Fully Responsive (Mobile, Tablet, Desktop)
- ✅ Smooth Scrolling Navigation
- ✅ SEO Optimized with proper metadata
- ✅ Dark Mode by Default
- ✅ Performance Optimized
- ✅ Production-Ready Code

## 🚀 Getting Started

### Installation

```bash
# Clone the repository or download the project
cd portfolio

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
pnpm build
pnpm start
```

## 📝 Customization Guide

### Update Personal Information

Edit `/app/page.tsx` and update component imports with your data:

**Navbar Logo**
```tsx
<div className="text-2xl font-bold gradient-text">
  YOUR_NAME <span className="text-[#00d9ff]">/&gt;</span>
</div>
```

**Hero Section** - Edit `/components/hero.tsx`:
```tsx
<h1>Your Name</h1>
<p>Your desired role or title</p>
<p>Your description and tagline</p>
```

**About Section** - Edit `/components/about.tsx`:
- Update the three card contents with your bio
- Modify the achievements row with your stats
- Personalize the location and interests

**Skills** - Edit `/components/skills.tsx`:
```tsx
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Your Skill', level: 90 },
      // Add your skills here
    ]
  }
  // Add more categories
]
```

**Projects** - Edit `/components/projects.tsx`:
```tsx
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description',
    gradient: 'from-[#9f7aea] to-[#6366f1]',
    technologies: ['Tech1', 'Tech2'],
    github: 'https://github.com/yourrepo',
    demo: 'https://yourproject.com',
    icon: '🎯'
  }
  // Add your projects
]
```

**Journey** - Edit `/components/journey.tsx`:
```tsx
const milestones = [
  {
    year: '2026',
    title: 'Your Milestone',
    description: 'What you accomplished',
    icon: GraduationCap,
    position: 'left'
  }
  // Add your milestones
]
```

**Certifications** - Edit `/components/certifications.tsx`:
```tsx
const certifications = [
  {
    company: 'Company Name',
    title: 'Certification Title',
    logo: '🎓',
    color: 'from-[#0f62fe] to-[#004eeb]'
  }
  // Add your certifications
]
```

**Contact Info** - Edit `/components/contact.tsx`:
```tsx
const contactInfo = [
  {
    label: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com'
  }
  // Update contact details
]
```

### Customize Colors

Edit `/app/globals.css` to change the color scheme:

```css
:root {
  --background: #0a0e27;        /* Main background */
  --foreground: #e4e4e7;        /* Text color */
  --card: #1a1f3a;              /* Card background */
  --primary: #9f7aea;           /* Primary gradient */
  --secondary: #00d9ff;         /* Secondary gradient */
  --glow-purple: #9f7aea;       /* Purple glow */
  --glow-cyan: #00d9ff;         /* Cyan glow */
}
```

### Customize Fonts

Edit `/app/layout.tsx` to change fonts:

```tsx
import { YourFont, YourMonoFont } from 'next/font/google'

const font = YourFont({ subsets: ["latin"] })
const monoFont = YourMonoFont({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
```

## 📁 Project Structure

```
/app
  - layout.tsx          # Root layout with metadata
  - globals.css         # Global styles and design tokens
  - page.tsx            # Main page with all components

/components
  - navbar.tsx          # Navigation bar
  - hero.tsx            # Hero section
  - about.tsx           # About me section
  - skills.tsx          # Technical skills
  - projects.tsx        # Featured projects
  - journey.tsx         # Timeline section
  - certifications.tsx  # Certifications
  - contact.tsx         # Contact & footer

/ui                     # shadcn/ui components (pre-installed)
```

## 🎨 Design System

### Colors
- **Primary**: Purple (#9f7aea) - Main brand color
- **Secondary**: Cyan (#00d9ff) - Accent color
- **Background**: Dark Navy (#0a0e27) - Main background
- **Card**: Dark Slate (#1a1f3a) - Card backgrounds
- **Border**: Dark Gray (#2a2f4a) - Borders

### Typography
- **Heading Font**: Geist (sans-serif)
- **Body Font**: Geist (sans-serif)
- **Mono Font**: Geist Mono (for code)

### Spacing
- Uses Tailwind spacing scale (4px base unit)
- Consistent padding and margins throughout

### Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Glowing effects on cards and text
- Smooth transitions throughout

## 🔧 Technologies Used

- **Next.js 16**: React framework with App Router
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **TypeScript**: Type safety
- **shadcn/ui**: Pre-built UI components

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: Optimized for screens < 768px
- **Tablet**: Enhanced layout for 768px - 1024px
- **Desktop**: Full experience on screens > 1024px

## ✨ Performance

- Fast page load with Next.js optimization
- Smooth animations with GPU acceleration
- Optimized images and assets
- Clean, maintainable code structure

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- **Netlify**: `pnpm build` → deploy `out` folder
- **GitHub Pages**: Configure for static export
- **AWS**, **DigitalOcean**, **Heroku**: All support Next.js

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Shadcn/ui Documentation](https://ui.shadcn.com/)

## 📧 Support

For questions or customization help:
- Check the inline comments in component files
- Refer to official documentation links above
- Review the color and animation utilities in globals.css

## 📄 License

This portfolio template is free to use and customize for your personal or professional use.

---

**Created with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
