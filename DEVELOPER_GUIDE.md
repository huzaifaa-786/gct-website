# GCT Bhakkar Website - Developer Documentation

## Overview

This document provides a comprehensive guide for developers to understand the structure, flow, and customization options of the GCT Bhakkar website.

---

## Project Structure

```
gct-bhakkar-website-design/
├── index.html                     # Home page
├── pages/
│   ├── about.html                 # About Us page
│   ├── admissions.html            # Admissions page
│   ├── campus-life.html           # Campus Life page
│   ├── contact.html               # Contact page
│   ├── programs.html              # Programs overview
│   └── departments/
│       ├── cit.html               # Computer IT department
│       ├── civil.html             # Civil Technology
│       ├── electrical.html        # Electrical Technology
│       ├── electronics.html       # Electronics Technology
│       └── mechanical.html        # Mechanical Technology
├── assets/
│   ├── css/
│   │   ├── main.css               # CSS entry point (imports all)
│   │   ├── styles.css             # Legacy/custom styles
│   │   ├── base/
│   │   │   ├── variables.css      # Design tokens & CSS variables
│   │   │   ├── theme.css          # Light/Dark theme system
│   │   │   ├── reset.css          # CSS reset
│   │   │   └── typography.css     # Font styles
│   │   ├── components/
│   │   │   ├── navbar.css         # Header & navigation
│   │   │   ├── footer.css         # Footer styles
│   │   │   ├── buttons.css        # Button variants
│   │   │   ├── cards.css          # Card components
│   │   │   └── hero.css           # Hero sections
│   │   ├── layouts/
│   │   │   └── sections.css       # Section layouts & grids
│   │   └── vendor/
│   │       └── bootstrap.min.css  # Bootstrap framework
│   ├── js/
│   │   ├── main.js                # Main application script
│   │   ├── components/
│   │   │   ├── navbar.js          # Dynamic header component
│   │   │   └── footer.js          # Dynamic footer component
│   │   └── utils/
│   │       ├── theme.js           # Theme toggle & smooth scroll
│   │       ├── animations.js      # Scroll animations
│   │       └── helpers.js         # Utility functions
│   ├── images/                    # Image assets
│   └── favicon/                   # Favicon files
```

---

## Component System

### Dynamic Header (navbar.js)

The header is dynamically generated using JavaScript. It auto-detects the current page and applies the active class.

**Usage in HTML:**
```html
<header data-navbar data-base-path="./" data-current-page="home"></header>
```

**Data Attributes:**
- `data-base-path`: Path to root (e.g., `./`, `../`, `../../`)
- `data-current-page`: Current page ID for active state

**Available Page IDs:**
- `home`, `about`, `programs`, `admissions`, `campus-life`, `contact`

### Dynamic Footer (footer.js)

**Usage in HTML:**
```html
<div data-footer data-base-path="./"></div>
```

---

## Theme System

### How It Works

The theme system uses CSS variables and `data-theme` attribute on the `<html>` element.

**Toggle Location:** Sun/Moon button in navbar

**Key Files:**
- `assets/css/base/theme.css` - All theme variables and overrides
- `assets/js/utils/theme.js` - ThemeManager class

### Customizing Themes

**Dark Theme (Default):**
```css
:root {
    --color-bg-primary: #0f172a;
    --color-text-primary: #ffffff;
    --color-accent-primary: #3b82f6;
}
```

**Light Theme:**
```css
[data-theme="light"] {
    --color-bg-primary: #ffffff;
    --color-text-primary: #0f172a;
}
```

### Adding New Component Theme Support

1. Add dark theme styles normally
2. Add light theme override in `theme.css`:
```css
[data-theme="light"] .your-component {
    background: #ffffff !important;
    color: #0f172a !important;
}
```

---

## CSS Architecture

### Import Order (main.css)

1. **Base**: variables.css → theme.css → reset.css → typography.css
2. **Layouts**: sections.css
3. **Components**: buttons.css → cards.css → navbar.css → footer.css → hero.css

### Design Tokens

Located in `variables.css`:

| Category | Example |
|----------|---------|
| Colors | `--color-accent-primary: #3b82f6` |
| Spacing | `--space-4: 1rem`, `--space-8: 2rem` |
| Typography | `--text-lg: 1.125rem` |
| Shadows | `--shadow-lg: 0 10px 25px rgba(0,0,0,0.3)` |
| Borders | `--radius-lg: 0.75rem` |

---

## Adding New Pages

1. **Create HTML file** in `pages/` directory
2. **Include required scripts:**

```html
<!-- In <head> -->
<link rel="stylesheet" href="../assets/css/main.css">
<link rel="stylesheet" href="../assets/css/styles.css">

<!-- Before </body> -->
<script src="../assets/js/vendor/bootstrap.bundle.min.js"></script>
<script src="../assets/js/components/navbar.js"></script>
<script src="../assets/js/components/footer.js"></script>
<script src="../assets/js/utils/theme.js"></script>
<script src="../assets/js/utils/animations.js"></script>
<script src="../assets/js/main.js"></script>
```

3. **Add header and footer:**
```html
<header data-navbar data-base-path="../" data-current-page="your-page"></header>
<!-- Your content -->
<div data-footer data-base-path="../"></div>
```

4. **Use section templates:**
```html
<section class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Section Title</h2>
            <p class="section-subtitle">Description</p>
        </div>
        <!-- Content here -->
    </div>
</section>
```

---

## Animation System

### Scroll Animations

Add `data-animate` attribute to elements:

```html
<div data-animate="fadeInUp" data-delay="200">
    Content fades in when scrolled into view
</div>
```

**Available Animations:**
- `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `scaleIn`

---

## Card Components

### Feature Card
```html
<div class="card card-feature">
    <div class="card-feature-icon"><i class="fas fa-laptop"></i></div>
    <h5 class="card-title">Title</h5>
    <p class="card-text">Description</p>
</div>
```

### Department Card
```html
<div class="card card-department">
    <img src="..." alt="..." class="card-img">
    <div class="card-body">
        <h4 class="card-title">Department Name</h4>
        <p class="card-text">Description</p>
    </div>
</div>
```

---

## Responsive Breakpoints

| Breakpoint | Max Width | Usage |
|------------|-----------|-------|
| Large | 1200px | 4-column → 2-column grid |
| Medium | 991px | 2-column → 1-column |
| Small | 768px | Mobile layout |
| X-Small | 576px | Compact mobile |

---

## Common Customization Tasks

### Changing Brand Colors

1. Edit `assets/css/base/variables.css`:
```css
--color-accent-primary: #your-color;
```

2. Update `assets/css/base/theme.css` for light theme if needed

### Updating Navigation Links

Edit `assets/js/components/navbar.js`:
```javascript
getNavigation() {
    return [
        { name: 'Home', href: '...', id: 'home' },
        // Add/modify links here
    ];
}
```

### Adding Social Links

Edit `assets/js/components/footer.js` social links array.

---

## Performance Features

- **Lazy Loading**: Images use `loading="lazy"`
- **GPU Acceleration**: Transforms use `will-change`
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **CSS Containment**: `contain: layout style` on sections

---

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

---

## Contact

For questions about this codebase, contact the development team.
