# Cole Richards - Personal Portfolio

A modern, responsive portfolio website for showcasing data science and analytics projects. Built with HTML, CSS, and JavaScript, optimized for GitHub Pages deployment.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode Toggle** - Automatic dark mode detection with manual toggle
- **Smooth Animations** - Intersection Observer API for scroll-triggered animations
- **Project Filtering** - Filter projects by category (Data Viz, ML, NLP)
- **Interactive Forms** - Client-side validation for contact form
- **Modern UI** - Clean design with gradient accents and smooth transitions
- **Optimized Performance** - Lightweight and fast-loading

## 📁 Project Structure

```
milescoler.github.io/
├── index.html              # Main HTML file
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── images/                 # Project images and assets
│   ├── viz-dashboard.png
│   ├── ml-project.png
│   └── nlp-project.png
├── 404.html               # Custom 404 page
├── README.md              # This file
├── deployment-guide.md    # Deployment instructions
└── design-concept.md      # Design documentation
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/milescoler/milescoler.github.io.git
cd milescoler.github.io
```

### 2. Customize Your Content

Follow the TODO comments in `index.html` to update:

- **Personal Information**: Name, bio, education
- **Social Links**: GitHub, LinkedIn URLs
- **Email**: Contact email address
- **Projects**: Add your own projects with descriptions
- **Skills**: Update the skills section
- **Images**: Replace placeholder images with your own

### 3. Test Locally

Open `index.html` in your browser to preview changes:

```bash
# Using Python's built-in server
python -m http.server 8000

# Or using Node.js http-server
npx http-server
```

Visit `http://localhost:8000` to view your site.

### 4. Deploy to GitHub Pages

1. Push your changes to the repository
2. Go to repository Settings > Pages
3. Select the branch to deploy (usually `main`)
4. Your site will be live at `https://milescoler.github.io`

See `deployment-guide.md` for detailed deployment instructions.

## ✏️ Customization Guide

### Update Personal Information

Search for `<!-- TODO:` comments in `index.html` to find all places that need customization:

1. **Hero Section** (line ~46): Update name, title, and bio
2. **Social Links** (line ~55): Update GitHub and LinkedIn URLs
3. **Projects Section** (line ~84): Add your projects with:
   - Project images (800x450px recommended)
   - Project titles and descriptions
   - Technology stack tags
   - Live demo and source code links
4. **About Section** (line ~172): Update your bio and background
5. **Skills Section** (line ~174): Customize your skills
6. **Contact Section** (line ~228): Update email and social links
7. **Footer** (line ~279): Update footer information

### Add Your Own Projects

Replace the three example projects with your own:

```html
<div class="project-card" data-category="your-category">
    <div class="project-image">
        <img src="images/your-project.png" alt="Your Project">
        <div class="project-overlay">
            <div class="project-links">
                <a href="your-demo-link" class="btn btn-sm btn-primary">Live Demo</a>
                <a href="your-github-link" class="btn btn-sm btn-outline">Source Code</a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <span class="project-tag">Your Tag</span>
        <h3>Project Title</h3>
        <p>Project description...</p>
        <div class="tech-stack">
            <span>Tech1</span>
            <span>Tech2</span>
            <span>Tech3</span>
        </div>
    </div>
</div>
```

**Project Categories** for filtering:
- `data-viz` - Data Visualization
- `machine-learning` - Machine Learning
- `nlp` - Natural Language Processing
- Add your own categories by updating the filter buttons

### Replace Images

1. Add your project images to the `images/` folder
2. Recommended size: 800x450px (16:9 aspect ratio)
3. Supported formats: PNG, JPG, SVG
4. Update the `src` attribute in `index.html`

**Current placeholder images:**
- `images/viz-dashboard.png` - Data Visualization project
- `images/ml-project.png` - Machine Learning project
- `images/nlp-project.png` - NLP project

### Add Your Resume

1. Add your resume PDF to the root directory as `resume.pdf`
2. The resume links are already configured in the navigation and footer

### Customize Colors

Edit CSS variables in `styles.css` (lines 2-25):

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --primary-dark: #4f46e5;       /* Darker shade */
    --primary-light: #818cf8;      /* Lighter shade */
    --accent-color: #ec4899;       /* Accent color */
    /* ... more variables ... */
}
```

### Configure Dark Mode

Dark mode works automatically based on system preferences and can be toggled manually. The preference is saved to localStorage.

To change dark mode colors, edit the `.dark-mode` class in `styles.css` (line ~642).

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Interactive features
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Images Not Loading

1. Check that image files are in the `images/` directory
2. Verify image paths in `index.html`
3. Ensure image file names match exactly (case-sensitive)

### Dark Mode Not Working

1. Clear browser cache and reload
2. Check browser console for JavaScript errors
3. Verify `script.js` is loading correctly

### Form Not Submitting

The contact form currently shows a demo notification. To enable real form submission:

1. Set up a form backend (Formspree, Netlify Forms, etc.)
2. Update the `action` attribute in the form tag
3. Modify the form submission handler in `script.js`

## 📝 License

This project is available under the MIT License. Feel free to use it for your own portfolio!

## 🤝 Contributing

This is a personal portfolio website, but if you find bugs or have suggestions, feel free to open an issue.

## 📧 Contact

- **Email**: cole.richards@ucla.edu
- **GitHub**: [@milescoler](https://github.com/milescoler)
- **LinkedIn**: [cole-richards](https://linkedin.com/in/cole-richards)

---

Made with ❤️ by Cole Richards | Data Scientist & Statistician
