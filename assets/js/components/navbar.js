/**
 * GCT Bhakkar - Navbar Component
 * Dynamic header and navigation with working dropdown
 */

class Navbar {
    constructor(options = {}) {
        this.container = options.container || 'header';
        this.basePath = options.basePath || './';
        this.currentPage = options.currentPage || 'home';
        this.init();
    }

    init() {
        this.render();
        this.attachEventListeners();
        this.handleScroll();
    }

    getNavigation() {
        return [
            { name: 'Home', href: `${this.basePath}index.html`, id: 'home' },
            { name: 'About', href: `${this.basePath}pages/about.html`, id: 'about' },
            {
                name: 'Programs',
                href: `${this.basePath}pages/programs.html`,
                id: 'programs',
                dropdown: [
                    { name: 'Computer Information Technology', href: `${this.basePath}pages/departments/cit.html` },
                    { name: 'Electrical Technology', href: `${this.basePath}pages/departments/electrical.html` },
                    { name: 'Mechanical Technology', href: `${this.basePath}pages/departments/mechanical.html` },
                    { name: 'Civil Technology', href: `${this.basePath}pages/departments/civil.html` },
                    { name: 'Electronics Technology', href: `${this.basePath}pages/departments/electronics.html` }
                ]
            },
            { name: 'Admissions', href: `${this.basePath}pages/admissions.html`, id: 'admissions' },
            { name: 'Campus Life', href: `${this.basePath}pages/campus-life.html`, id: 'campus-life' },
            { name: 'Contact', href: `${this.basePath}pages/contact.html`, id: 'contact' }
        ];
    }

    renderNavItems() {
        const navigation = this.getNavigation();

        return navigation.map(item => {
            const isActive = item.id === this.currentPage;
            const activeClass = isActive ? 'active' : '';

            if (item.dropdown) {
                return `
                    <li class="nav-item nav-dropdown">
                        <a class="nav-link ${activeClass}" href="${item.href}">
                            ${item.name}
                            <i class="fas fa-chevron-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            ${item.dropdown.map(subItem => `
                                <li><a class="dropdown-item" href="${subItem.href}">${subItem.name}</a></li>
                            `).join('')}
                        </ul>
                    </li>
                `;
            }

            return `
                <li class="nav-item">
                    <a class="nav-link ${activeClass}" href="${item.href}">${item.name}</a>
                </li>
            `;
        }).join('');
    }

    render() {
        const container = document.querySelector(this.container);
        if (!container) return;

        container.innerHTML = `
            <nav class="navbar" id="mainNavbar">
                <div class="navbar-container">
                    <!-- Brand -->
                    <a class="navbar-brand" href="${this.basePath}index.html">
                        <img src="${this.basePath}assets/favicon/favicon.png" alt="GCT Logo">
                        <span>GCT Bhakkar</span>
                    </a>
                    
                    <!-- Mobile Toggle -->
                    <button class="navbar-toggle" id="navbarToggle" aria-label="Toggle navigation">
                        <span class="navbar-toggle-bar"></span>
                        <span class="navbar-toggle-bar"></span>
                        <span class="navbar-toggle-bar"></span>
                    </button>
                    
                    <!-- Navigation -->
                    <div class="navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav">
                            ${this.renderNavItems()}
                        </ul>
                        
                        <!-- CTA Button -->
                        <div class="navbar-cta">
                            <a href="${this.basePath}pages/admissions.html#apply" class="btn btn-primary">Apply Now</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }

    attachEventListeners() {
        const toggle = document.getElementById('navbarToggle');
        const collapse = document.getElementById('navbarCollapse');

        // Mobile toggle
        if (toggle && collapse) {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                toggle.classList.toggle('active');
                collapse.classList.toggle('show');
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && collapse?.classList.contains('show')) {
                toggle?.classList.remove('active');
                collapse?.classList.remove('show');
            }
        });

        // Mobile dropdown toggle (click to expand on mobile)
        const dropdowns = document.querySelectorAll('.nav-dropdown');
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('.nav-link');

            link?.addEventListener('click', (e) => {
                // Only prevent default on mobile
                if (window.innerWidth < 992) {
                    e.preventDefault();
                    e.stopPropagation();

                    // Close other dropdowns
                    dropdowns.forEach(d => {
                        if (d !== dropdown) d.classList.remove('open');
                    });

                    dropdown.classList.toggle('open');
                }
            });
        });

        // Close mobile menu on nav link click (except dropdown toggles)
        const regularLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.nav-dropdown .nav-link)');
        regularLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    toggle?.classList.remove('active');
                    collapse?.classList.remove('show');
                }
            });
        });

        // Close mobile menu on dropdown item click
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    toggle?.classList.remove('active');
                    collapse?.classList.remove('show');
                }
            });
        });
    }

    handleScroll() {
        const navbar = document.getElementById('mainNavbar');
        if (!navbar) return;

        const scrollHandler = () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', scrollHandler);
        scrollHandler(); // Initial check
    }
}

// Auto-initialize if data attribute is present
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('[data-navbar]');
    if (header) {
        const basePath = header.dataset.basePath || './';
        const currentPage = header.dataset.currentPage || 'home';
        new Navbar({
            container: '[data-navbar]',
            basePath,
            currentPage
        });
    }
});

// Export for manual initialization
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Navbar;
}
