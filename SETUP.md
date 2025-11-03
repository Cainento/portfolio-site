# Setup Guide - Avila Cainan Portfolio

This guide will help you set up and customize the portfolio website.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   
   To get EmailJS credentials:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service
   - Create an email template
   - Get your public key from the integration page

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization Guide

### 1. Personal Information

**Update Contact Information:**
- Edit `components/ContactForm.tsx` - Update email, phone, and location
- Edit `components/Footer.tsx` - Update social media links

**Update About Section:**
- Edit `components/AboutHero.tsx` - Update bio and image
- Add your resume PDF to `public/resume.pdf`

**Update Hero Section:**
- Edit `components/Hero.tsx` - Update title and tagline

### 2. Projects

**Add/Edit Projects:**
- Edit `data/projects.ts` - Add your projects with all details
- Update project images (use Unsplash or your own images)
- Update tech stack, descriptions, and links

### 3. Experience & Education

**Update Experience:**
- Edit `data/experience.ts` - Add your work experience, education, and achievements

### 4. Skills

**Update Skills:**
- Edit `data/skills.ts` - Add or modify your skills and proficiency levels

### 5. Blog Posts

**Add Blog Posts:**
- Edit `data/blogPosts.ts` - Add your blog posts
- Or set up a CMS (Sanity, Contentful, etc.) for dynamic content

### 6. Styling & Theme

**Colors:**
- Edit `tailwind.config.js` - Update primary and accent colors
- The design uses emerald/teal gradients by default

**Fonts:**
- Fonts are loaded in `app/layout.tsx`
- Default: Poppins (headings), Inter (body)

### 7. SEO & Meta Tags

**Update Meta Information:**
- Edit `app/layout.tsx` - Update default meta tags
- Each page has its own metadata export

### 8. Social Links

Update social media links in:
- `components/Footer.tsx`
- `components/ContactForm.tsx`
- `components/Navbar.tsx` (if needed)

## 🎨 Design Customization

### Color Scheme
The site uses a solar-punk inspired theme with:
- Primary: Emerald (#10B981)
- Accent: Teal/Cyan (#06B6D4)
- Background: Off-white (light) / Charcoal (dark)

### Dark Mode
Dark mode is enabled by default with localStorage persistence. Toggle is in the navbar.

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Create a new site in Netlify
3. Add environment variables
4. Build command: `npm run build`
5. Publish directory: `.next`

### Other Platforms

The site is a standard Next.js application and can be deployed to any platform that supports Next.js.

## 🔧 Troubleshooting

### Images not loading
- Make sure image URLs are correct
- Check `next.config.js` for remote image domains
- For local images, add them to `public/` folder

### EmailJS not working
- Verify environment variables are set correctly
- Check EmailJS service and template configuration
- Ensure the form fields match your EmailJS template variables

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Clear `.next` folder and rebuild
- Check TypeScript errors with `npm run lint`

## 📚 File Structure

```
portfolio-site/
├── app/              # Next.js app directory (pages)
├── components/       # React components
├── data/            # Data files (projects, experience, etc.)
├── public/           # Static assets
├── .env.local        # Environment variables (create this)
└── package.json      # Dependencies
```

## 🎯 Next Steps

1. Replace placeholder images with your own
2. Add your actual projects and experience
3. Customize colors and branding
4. Set up EmailJS for contact form
5. Add your resume PDF
6. Deploy to production

## 📄 License

This project is open source and available for personal use.

---

Happy coding! 🚀




