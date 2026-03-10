# 🎨 Personal Resume Website - Customization Guide

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Customize Your Information
All your personal information is centralized in one file:
**`src/data/personalData.js`**

---

## 📝 Where to Add Your Personal Information

### 1️⃣ **Basic Information** (Lines 8-15)
```javascript
name: "Your Name",           // 👈 Your full name
firstName: "Your",            // 👈 First name (for logo/animations)
title: "Full Stack Developer", // 👈 Your professional title
subtitle: "Building...",      // 👈 Your tagline/motto
location: "San Francisco, CA", // 👈 Your city, state/country
email: "your.email@example.com", // 👈 Your email
phone: "+1 (555) 123-4567",   // 👈 Your phone (optional)
```

### 2️⃣ **Social Media Links** (Lines 19-26)
```javascript
socials: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "", // Leave empty if not applicable
  youtube: "",
  website: "",
}
```

### 3️⃣ **Hero Section** (Lines 29-37)
- **Typed Animations**: Add roles that describe you
- **Description**: Your elevator pitch (2-3 sentences)

### 4️⃣ **About Section** (Lines 40-63)
- **Bio**: Tell your story in 2-3 paragraphs
- **Facts**: Quick stats about you (education, experience, etc.)
- **Interests**: Your professional interests

### 5️⃣ **Skills Section** (Lines 66-96)
- **Technical Skills**: Add programming languages, frameworks, tools with proficiency levels (0-100)
- **Soft Skills**: Your interpersonal skills
- **Tools**: Software and platforms you use

### 6️⃣ **Experience Section** (Lines 99-130)
Add your work experience with:
- Job title
- Company name
- Duration and location
- Description
- Key achievements (bullet points)
- Technologies used

### 7️⃣ **Projects Section** (Lines 133-184)
Showcase 4-6 of your best projects with:
- Project name and description
- Technologies used
- Key features
- Live URL and GitHub links
- Set `featured: true` for your best projects

### 8️⃣ **Education Section** (Lines 187-212)
Add your degrees with:
- Degree name
- School name
- Years attended
- GPA (optional)
- Achievements
- Relevant coursework

### 9️⃣ **Additional Sections**
- **Certifications** (Lines 215-223)
- **Testimonials** (Lines 226-235)
- **Achievements** (Lines 238-246)
- **Languages** (Lines 249-252)
- **Hobbies** (Lines 255-261)

### 🔟 **Availability Status** (Lines 264-272)
Update your current availability and preferences

---

## 📧 Email Configuration (IMPORTANT!)

To enable the contact form, you need to set up EmailJS:

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service**
   - Go to "Email Services" → "Add New Service"
   - Choose your provider (Gmail, Outlook, etc.)
   - Follow the connection instructions

3. **Create Email Template**
   - Go to "Email Templates" → "Create New Template"
   - Use these variables in your template:
     ```
     From: {{from_name}} ({{from_email}})
     Subject: {{subject}}
     Message: {{message}}
     ```

4. **Get Your Credentials**
   - Service ID: Found in "Email Services"
   - Template ID: Found in "Email Templates"
   - Public Key: Found in "Account" → "API Keys"

5. **Update Configuration** (Lines 283-287)
```javascript
export const emailConfig = {
  serviceId: "YOUR_SERVICE_ID",    // 👈 Add your Service ID
  templateId: "YOUR_TEMPLATE_ID",  // 👈 Add your Template ID
  publicKey: "YOUR_PUBLIC_KEY"     // 👈 Add your Public Key
};
```

---

## 🎨 Theme Customization (Lines 290-304)

### Color Schemes
```javascript
colors: {
  primary: "blue",  // Options: blue, purple, green, red, orange
  accent: "pink",   // Options: pink, yellow, cyan, indigo
}
```

### Font Options
```javascript
fonts: {
  heading: "Inter",     // Options: Inter, Poppins, Montserrat, Playfair Display
  body: "Inter"        // Options: Inter, Open Sans, Roboto, Lato
}
```

### Animation Settings
```javascript
animations: {
  enabled: true,      // Set to false to disable animations
  speed: "normal"     // Options: slow, normal, fast
}
```

---

## 🖼️ Adding Images

### Profile Picture
- Add your photo to `/public/images/profile.jpg`
- The site will automatically use your initials if no photo is provided

### Project Screenshots
- Add project images to `/public/projects/`
- Reference in personalData.js: `image: "/projects/project1.jpg"`

### Company/School Logos (optional)
- Add to `/public/logos/`
- Reference in the respective sections

---

## 🚀 Deployment

### Deploy to GitHub Pages
1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist` folder

3. Push to GitHub and enable Pages:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main (or gh-pages)
   - Folder: /dist

### Deploy to Netlify
1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Deploy to Vercel
1. Connect your GitHub repo to [Vercel](https://vercel.com)
2. It will auto-deploy on every push

---

## 💡 Tips for Personalization

### Make It Yours
1. **Professional Photo**: Use a high-quality headshot
2. **Compelling Bio**: Tell your unique story
3. **Showcase Best Work**: Quality over quantity for projects
4. **Accurate Skills**: Be honest about proficiency levels
5. **Fresh Content**: Keep experience and projects updated
6. **Testimonials**: Add 2-3 strong recommendations
7. **Keywords**: Include relevant industry keywords for SEO

### Content Guidelines
- **Be Concise**: Use bullet points for achievements
- **Show Impact**: Include metrics and results
- **Use Action Words**: Started, Built, Led, Improved, etc.
- **Highlight Unique**: What makes you different?
- **Stay Professional**: Keep it appropriate for employers

### Performance Tips
- Optimize images (use WebP format, compress)
- Keep project images under 500KB
- Test on mobile devices
- Check loading speed with Lighthouse

---

## 🐛 Troubleshooting

### Common Issues

**Contact form not working?**
- Check EmailJS credentials
- Verify email service is connected
- Test with EmailJS dashboard

**Images not showing?**
- Check file paths (should start with `/`)
- Verify images are in `/public` folder
- Clear browser cache

**Animations laggy?**
- Disable particle background in App.jsx
- Reduce animation complexity in themeConfig

**Dark mode issues?**
- Clear localStorage
- Check system preferences

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 🤝 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify all personal data is properly formatted
3. Ensure all dependencies are installed
4. Try clearing cache and rebuilding

---

**Remember**: This is YOUR portfolio. Make it unique, keep it updated, and let your personality shine through! 🌟
