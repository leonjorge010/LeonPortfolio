# Jorge Leon - Portfolio Website

A modern, responsive portfolio website showcasing my experience as an Electrical and Computer Engineering student with a Software Engineering minor.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Timeline Experience Section**: Visual timeline showcasing work experience and achievements
- **Projects Showcase**: Featured projects with detailed descriptions and technologies used
- **Skills Display**: Comprehensive list of technical skills organized by category
- **Contact Section**: Easy-to-use contact information with multiple communication channels

## Technologies Used

- **HTML5**: Semantic markup for better SEO and accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript**: Interactive features including:
  - Smooth scrolling navigation
  - Mobile hamburger menu
  - Intersection Observer animations
  - Statistics counter animations
  - Back-to-top button

## Deployment Options

### GitHub Pages (Free)

1. Create a new repository on GitHub
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. Go to repository Settings > Pages
4. Select "main" branch as source
5. Your site will be published at `https://yourusername.github.io/portfolio/`

### Netlify (Free)

1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop your project folder to Netlify
3. Your site will be live with a custom URL
4. Optional: Connect to your GitHub repository for automatic deployments

### Vercel (Free)

1. Sign up at [Vercel](https://vercel.com/)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in your project directory
4. Follow the prompts to deploy

### Custom Domain

After deploying to any platform above, you can add a custom domain:

1. Purchase a domain from providers like Namecheap, Google Domains, or GoDaddy
2. Configure DNS settings in your hosting platform (GitHub Pages, Netlify, or Vercel)
3. Add CNAME record pointing to your deployment URL

## Customization

### Updating Content

1. **Personal Information**: Edit the HTML in `index.html`

   - Update contact information in the hero and contact sections
   - Modify LinkedIn and other social links

2. **Experience**: Update the timeline items in the experience section

   - Add new positions by copying the `.timeline-item` structure
   - Update dates, descriptions, and technologies

3. **Projects**: Add your projects in the projects section

   - Copy the `.project-card` structure
   - Include project descriptions, highlights, and tech stack

4. **Skills**: Modify the skills lists
   - Add or remove skills in each category
   - Create new categories by duplicating `.skill-category`

### Styling

- **Colors**: Modify CSS variables in `styles.css` at the top of the file

  ```css
  :root {
    --primary-color: #2563eb; /* Change to your preferred color */
    --secondary-color: #10b981;
    /* ... other variables */
  }
  ```

- **Fonts**: Change the Google Fonts import in `index.html` and update the font-family in `styles.css`

- **Layout**: Adjust spacing, sizing, and grid layouts in `styles.css`

### Adding Features

The `script.js` file includes commented optional features:

- Typing effect for hero subtitle
- Back-to-top button (currently enabled)
- Custom animations

Uncomment the relevant code to enable these features.

## Project Structure

```
LeonPortfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # Interactive features and animations
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies (except Google Fonts)
- Optimized CSS with minimal specificity
- Efficient JavaScript with event delegation
- Lazy-loaded animations using Intersection Observer

## SEO Optimization

- Semantic HTML5 markup
- Meta descriptions and viewport tags
- Proper heading hierarchy
- Alt text for all images (when added)
- Fast loading times

## Accessibility

- ARIA labels for icon links
- Keyboard navigation support
- Sufficient color contrast
- Focus indicators for interactive elements
- Responsive design for all screen sizes

## Future Enhancements

Consider adding:

- [ ] Blog section for technical articles
- [ ] Project filtering by technology
- [ ] Image gallery for projects
- [ ] Downloadable resume PDF
- [ ] Contact form with backend integration
- [ ] Analytics integration (Google Analytics, Plausible)

## License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio!

## Contact

- **Email**: leonjorge010@gmail.com
- **LinkedIn**: [jorge-leon-duran](https://www.linkedin.com/in/jorge-leon-duran)

---

Built with dedication by Jorge Leon | © 2025
