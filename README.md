# NiyoGen Landing Page

A modern, responsive landing page for NiyoGen's FastGraph Swarm Builder and EvolSpace platform. Built with vanilla HTML, CSS, and JavaScript for optimal performance and simplicity.

## 🚀 Quick Start

### Option 1: Direct File Opening
1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The page will load with all features working

### Option 2: Local Development Server
For the best development experience, use a local server:

#### Using Python (if installed)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

#### Using Node.js (if installed)
```bash
# Install a simple server globally
npm install -g http-server

# Run the server
http-server

# Or with a specific port
http-server -p 8080
```

#### Using PHP (if installed)
```bash
php -S localhost:8000
```

## 📁 Project Structure

```
LandingPage/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality (theme toggle, navigation)
├── assets/
│   ├── logo.svg        # NiyoGen logo
│   └── architecture.svg # System architecture diagram
├── CONTENT_PLAN.md     # Content strategy and planning document
└── README.md           # This file
```

## 🎨 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Theme**: Toggle between themes with the moon/sun button
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Modern UI**: Clean, professional design with gradients and animations
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized with vanilla HTML/CSS/JS (no frameworks)

## 🛠️ Customization

### Colors and Branding
Edit the CSS variables in `styles.css`:

```css
:root {
  --primary: #6ea8fe;      /* Primary brand color */
  --accent: #22c55e;       /* Accent color */
  --text: #e7e9ee;         /* Main text color */
  --bg: #0b0c0f;           /* Background color */
  /* ... more variables */
}
```

### Content Updates
- **Hero section**: Edit the main headline and subhead in `index.html`
- **Features**: Update the feature cards in the features section
- **FAQ**: Modify questions and answers in the FAQ section
- **Contact**: Update contact information and links

### Adding New Sections
1. Add the HTML structure in `index.html`
2. Add corresponding CSS styles in `styles.css`
3. Update navigation links if needed

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Making Changes
1. Edit the HTML, CSS, or JavaScript files
2. Refresh your browser to see changes
3. Use browser developer tools for debugging

### Testing
- Test on different screen sizes using browser dev tools
- Verify theme toggle functionality
- Check navigation smooth scrolling
- Test mobile menu on small screens

## 📦 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push
3. Get a custom domain (optional)

### Vercel
1. Import your GitHub repository
2. Deploy with zero configuration
3. Automatic deployments on git push

### Traditional Web Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Test the live site

## 🎯 Performance Tips

- **Optimize Images**: Compress SVG files if needed
- **Minify CSS/JS**: Use tools like UglifyJS or CSS minifiers for production
- **Enable Compression**: Configure gzip compression on your server
- **CDN**: Use a CDN for faster global delivery

## 🐛 Troubleshooting

### Common Issues

**Page not loading properly:**
- Ensure you're using a local server (not opening file:// directly)
- Check browser console for errors
- Verify all file paths are correct

**Theme toggle not working:**
- Check if `script.js` is loading properly
- Verify JavaScript is enabled in your browser
- Look for console errors

**Mobile menu not working:**
- Test on actual mobile device or use browser dev tools
- Check CSS media queries
- Verify touch events are working

**Styling issues:**
- Clear browser cache
- Check CSS syntax for errors
- Verify CSS variables are supported

## 📞 Support

For technical issues or questions about this landing page:
- Check the browser console for error messages
- Verify all files are present and accessible
- Test in different browsers to isolate issues

## 📄 License

This landing page is part of the NiyoGen project. All rights reserved.

---

**Built with ❤️ for NiyoGen**