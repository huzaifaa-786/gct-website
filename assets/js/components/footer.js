/**
 * GCT Bhakkar - Footer Component
 * Dynamic footer rendering
 */

class Footer {
    constructor(options = {}) {
        this.container = options.container || 'footer';
        this.basePath = options.basePath || './';
        this.init();
    }

    init() {
        this.render();
    }

    getSocialLinks() {
        return [
            { name: 'Facebook', icon: 'fab fa-facebook-f', href: 'https://facebook.com/gctbhakkar' },
            { name: 'Twitter', icon: 'fab fa-twitter', href: 'https://twitter.com/gctbhakkar' },
            { name: 'Instagram', icon: 'fab fa-instagram', href: 'https://instagram.com/gctbhakkar' },
            { name: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://linkedin.com/school/gctbhakkar' },
            { name: 'YouTube', icon: 'fab fa-youtube', href: 'https://youtube.com/@gctbhakkar' }
        ];
    }

    getQuickLinks() {
        return [
            { name: 'Home', href: `${this.basePath}index.html` },
            { name: 'About Us', href: `${this.basePath}pages/about.html` },
            { name: 'Programs', href: `${this.basePath}pages/programs.html` },
            { name: 'Admissions', href: `${this.basePath}pages/admissions.html` },
            { name: 'Contact', href: `${this.basePath}pages/contact.html` }
        ];
    }

    getPrograms() {
        return [
            { name: 'Computer Technology', href: `${this.basePath}pages/departments/cit.html` },
            { name: 'Electrical Technology', href: `${this.basePath}pages/departments/electrical.html` },
            { name: 'Mechanical Technology', href: `${this.basePath}pages/departments/mechanical.html` },
            { name: 'Civil Technology', href: `${this.basePath}pages/departments/civil.html` },
            { name: 'Electronics Technology', href: `${this.basePath}pages/departments/electronics.html` }
        ];
    }

    render() {
        const container = document.querySelector(this.container);
        if (!container) return;

        const socialLinks = this.getSocialLinks();
        const quickLinks = this.getQuickLinks();
        const programs = this.getPrograms();
        const currentYear = new Date().getFullYear();

        container.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-container">
            <!-- Brand Section -->
            <div class="footer-brand">
              <div class="footer-logo">
                <img src="${this.basePath}assets/favicon/favicon.png" alt="GCT Logo">
                <span class="footer-logo-text">GCT Bhakkar</span>
              </div>
              <p class="footer-description">
                Government College of Technology, Bhakkar is committed to providing quality technical education 
                and fostering innovation and excellence. We prepare students for successful careers in technology.
              </p>
              <div class="footer-social">
                ${socialLinks.map(link => `
                  <a href="${link.href}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="${link.name}">
                    <i class="${link.icon}"></i>
                  </a>
                `).join('')}
              </div>
            </div>
            
            <!-- Quick Links -->
            <div class="footer-section">
              <h4 class="footer-title">Quick Links</h4>
              <ul class="footer-links">
                ${quickLinks.map(link => `
                  <li>
                    <a href="${link.href}" class="footer-link">
                      <i class="fas fa-chevron-right"></i>
                      ${link.name}
                    </a>
                  </li>
                `).join('')}
              </ul>
            </div>
            
            <!-- Programs -->
            <div class="footer-section">
              <h4 class="footer-title">Programs</h4>
              <ul class="footer-links">
                ${programs.map(link => `
                  <li>
                    <a href="${link.href}" class="footer-link">
                      <i class="fas fa-chevron-right"></i>
                      ${link.name}
                    </a>
                  </li>
                `).join('')}
              </ul>
            </div>
            
            <!-- Contact Info -->
            <div class="footer-section">
              <h4 class="footer-title">Contact Info</h4>
              <div class="footer-contact">
                <div class="footer-contact-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="footer-contact-text">
                    GCT Campus, Main Road,<br>
                    Bhakkar, Punjab, Pakistan
                  </div>
                </div>
                <div class="footer-contact-item">
                  <i class="fas fa-phone"></i>
                  <div class="footer-contact-text">
                    <a href="tel:+92453123456">+92 453 123456</a>
                  </div>
                </div>
                <div class="footer-contact-item">
                  <i class="fas fa-envelope"></i>
                  <div class="footer-contact-text">
                    <a href="mailto:info@gctbhakkar.edu.pk">info@gctbhakkar.edu.pk</a>
                  </div>
                </div>
                <div class="footer-contact-item">
                  <i class="fas fa-clock"></i>
                  <div class="footer-contact-text">
                    Mon - Fri: 8:00 AM - 4:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Footer Bottom -->
          <div class="footer-bottom">
            <p class="footer-copyright">
              &copy; ${currentYear} <a href="${this.basePath}index.html">GCT Bhakkar</a>. All Rights Reserved.
            </p>
            <div class="footer-bottom-links">
              <a href="#" class="footer-bottom-link">Privacy Policy</a>
              <a href="#" class="footer-bottom-link">Terms of Service</a>
              <a href="${this.basePath}pages/contact.html" class="footer-bottom-link">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    `;
    }
}

// Auto-initialize if data attribute is present
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('[data-footer]');
    if (footer) {
        const basePath = footer.dataset.basePath || './';
        new Footer({
            container: '[data-footer]',
            basePath
        });
    }
});

// Export for manual initialization
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Footer;
}
