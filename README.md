# Kiran Badave - Portfolio Website

A modern, animated portfolio website showcasing my professional experience, skills, and education. Built with HTML, CSS, JavaScript, and GSAP animations.

## 🌟 Features

- **Modern Design**: Clean, professional design with gradient effects and smooth animations
- **GSAP Animations**: Stunning scroll-triggered animations and interactive elements
- **Custom Cursor**: Unique cursor effects for desktop users
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Interactive Elements**: Hover effects, magnetic buttons, and tilt animations
- **Performance Optimized**: Fast loading and smooth animations
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Dual CV Versions**:
  - **Product Company CV** (1-Page) - Impact-driven, ATS-optimized for ₹30-45+ LPA roles
  - **Detailed CV** (Multi-Page) - Comprehensive experience showcase
- **Easy CV Switching**: Toggle between CV versions with one click
- **Centralized Data**: Single source of truth for all content (data.js)
- **Profile Picture**: Animated profile photo with 3D effects
- **Easter Egg**: Hidden Konami code surprise! 🎮

## 🚀 Live Demo

Visit the live website: [https://kiran-badave.github.io/](https://kiran-badave.github.io/)

## 📁 Project Structure

```
kiran-portfolio-website/
├── index.html                  # Main portfolio website
├── cv-product-company.html     # Product Company CV (1-Page, ATS-optimized)
├── cv-product-company.css      # Product Company CV styles
├── cv-print.html               # Detailed CV (Multi-Page)
├── cv-print.css                # Detailed CV styles
├── styles.css                  # Portfolio CSS styles and animations
├── script.js           # JavaScript and GSAP animations
├── data.js             # Centralized data source (SINGLE SOURCE OF TRUTH)
├── README.md                   # Project documentation
├── CV_VERSIONS_GUIDE.md        # Guide for using both CV versions
├── DEPLOYMENT.md               # Deployment guide
├── ASSETS_GUIDE.md             # Assets organization guide
├── DATA_MANAGEMENT.md          # Data management guide
├── THEME_AND_LANGUAGE_GUIDE.md # Theme & language guide
├── .gitignore          # Git ignore file
├── assets/             # Static assets folder
│   ├── profile_picture.png  # Your profile picture
│   ├── images/         # Other images (projects, etc.)
│   ├── icons/          # Icons and favicons
│   ├── documents/      # PDFs, resume, etc.
│   └── fonts/          # Custom fonts (if any)
└── Kiran_Badave_CV_JUN_2025.html  # Original CV file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive functionality
- **GSAP 3.12.5**: Professional-grade animations
- **ScrollTrigger**: Scroll-based animations
- **Google Fonts**: Inter and Space Grotesk fonts

## 📦 Installation & Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/kiran-badave/kiran-badave.github.io.git
   cd kiran-badave.github.io
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (with http-server):**
   ```bash
   npx http-server -p 8000
   ```
   
   **Using VS Code:**
   - Install "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

3. **View the website**
   - Open your browser and navigate to `http://localhost:8000`

## 🌐 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section (left sidebar)
   - Under "Source", select "main" branch
   - Select "/ (root)" folder
   - Click "Save"
   - Your site will be published at: `https://[username].github.io/kiran-portfolio-website`

### Method 2: Using GitHub CLI

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Portfolio website"

# Add remote repository
git remote add origin https://github.com/kiran-badave/kiran-badave.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main

# Enable GitHub Pages using GitHub CLI (if installed)
gh repo edit --enable-pages --pages-branch main
```

### Method 3: Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 🎨 Customization

### Update Personal Information (Centralized Data Management)

**IMPORTANT**: All content is managed in a single file: [`data.js`](data.js:1)

To update your portfolio information:

1. **Open `data.js`** - This is your single source of truth
2. **Edit the relevant section**:
   - `personal` - Name, title, contact info, profile picture
   - `summary` - Professional summary
   - `stats` - Years of experience, projects, technologies
   - `experience` - Work history and responsibilities
   - `skills` - Technical skills and expertise
   - `education` - Academic background

3. **Save the file** - Changes automatically reflect in:
   - Main portfolio website (`index.html`)
   - Printable CV (`cv-print.html`)

**Example: Updating your email**
```javascript
personal: {
    email: "newemail@example.com",  // Change here
    // ... other fields
}
```

**Example: Adding new work experience**
```javascript
experience: [
    {
        company: "New Company",
        location: "City, Country",
        role: "Your Role",
        duration: "Start - End",
        durationYears: "X years",
        responsibilities: [
            "Responsibility 1",
            "Responsibility 2"
        ],
        technologies: {
            "Category": "Tech stack"
        }
    },
    // ... existing experiences
]
```

### Modify Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary brand color */
    --accent-color: #ec4899;       /* Accent color */
    /* ... other variables */
}
```

### Adjust Animations

Modify GSAP animations in `script.js`:

```javascript
// Example: Change animation duration
gsap.from('.hero-name', {
    opacity: 0,
    y: 30,
    duration: 1.5,  // Increase duration
    delay: 0.4
});
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Optimized animations**: 60fps smooth animations

## 🎯 Key Sections

1. **Hero Section**: Eye-catching introduction with animated statistics
2. **About**: Professional summary and contact information
3. **Experience**: Detailed work history with timeline visualization
4. **Skills**: Categorized technical skills with hover effects
5. **Education**: Academic background
6. **Contact**: Multiple ways to get in touch

## 🐛 Known Issues

None at the moment. If you find any bugs, please open an issue!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kiran Badave**
- LinkedIn: [linkedin.com/in/kiran-badave](https://www.linkedin.com/in/kiran-badave)
- Email: kiranbadave06@gmail.com
- Location: Pune, Maharashtra, India

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) - Animation library
- [Google Fonts](https://fonts.google.com/) - Typography
- [IBM](https://www.ibm.com/) - Current employer
- Design inspiration from modern portfolio trends

## 📊 Project Stats

- **Lines of Code**: ~2000+
- **Files**: 4 main files
- **Animation Library**: GSAP 3.12.5
- **Development Time**: Optimized for quick deployment

## 📄 Printable CV Version

A professional, print-optimized CV is available at [`cv-print.html`](cv-print.html:1)

**Features:**
- ✅ Print-optimized layout (A4 size)
- ✅ Professional formatting for paper/PDF
- ✅ Automatic date stamping
- ✅ Black & white printer friendly
- ✅ Uses same data source as main portfolio
- ✅ One-click print button
- ✅ Responsive for screen viewing

**How to Use:**
1. **View Online**: Open `cv-print.html` in your browser
2. **Print**: Click the "🖨️ Print CV" button or use Ctrl/Cmd + P
3. **Save as PDF**: Use your browser's "Save as PDF" option when printing
4. **Share**: The printed/PDF version is perfect for job applications

**Accessing from Portfolio:**
- Click the "📄 Download CV" button in the hero section
- Or directly navigate to: `https://yourdomain.com/cv-print.html`

## � Future Enhancements

- [ ] Add blog section
- [ ] Integrate with CMS for easy content updates
- [ ] Add project showcase with live demos
- [ ] Implement dark/light theme toggle
- [ ] Add contact form with backend integration
- [ ] Include testimonials section
- [x] ~~Add downloadable resume PDF~~ (Printable CV available!)

## 💡 Tips for Interviewers

1. **Try the custom cursor** on desktop - move your mouse around!
2. **Scroll through the page** to see smooth animations
3. **Hover over elements** to see interactive effects
4. **Try the Konami code** for a surprise: ↑ ↑ ↓ ↓ ← → ← → B A
5. **Check the console** for a friendly message
6. **Test on mobile** to see the responsive design

---

**Built with ❤️ and modern web technologies**

*Last Updated: December 2025*
