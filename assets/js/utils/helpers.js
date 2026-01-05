/**
 * GCT Bhakkar - Helper Utilities
 * Common utility functions
 */

const Helpers = {
    /**
     * Debounce function execution
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in ms
     * @returns {Function} Debounced function
     */
    debounce(func, wait = 100) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Throttle function execution
     * @param {Function} func - Function to throttle
     * @param {number} limit - Limit time in ms
     * @returns {Function} Throttled function
     */
    throttle(func, limit = 100) {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    },

    /**
     * Smooth scroll to element
     * @param {string|HTMLElement} target - Target selector or element
     * @param {number} offset - Offset from top (for fixed header)
     */
    scrollTo(target, offset = 80) {
        const element = typeof target === 'string'
            ? document.querySelector(target)
            : target;

        if (!element) return;

        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    },

    /**
     * Initialize smooth scroll for anchor links
     */
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                this.scrollTo(href);
            });
        });
    },

    /**
     * Initialize back to top button
     */
    initBackToTop() {
        const button = document.querySelector('.back-to-top');
        if (!button) return;

        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                button.classList.add('visible');
            } else {
                button.classList.remove('visible');
            }
        };

        window.addEventListener('scroll', this.throttle(toggleVisibility, 100));

        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    /**
     * Format number with commas
     * @param {number} num - Number to format
     * @returns {string} Formatted number
     */
    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    /**
     * Check if element is in viewport
     * @param {HTMLElement} element - Element to check
     * @returns {boolean} Is in viewport
     */
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    /**
     * Get current page name from URL
     * @returns {string} Page name
     */
    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop().replace('.html', '');
        return page || 'index';
    },

    /**
     * Add loading state to element
     * @param {HTMLElement} element - Element to add loading state
     */
    setLoading(element, loading = true) {
        if (loading) {
            element.classList.add('loading');
            element.setAttribute('disabled', 'true');
        } else {
            element.classList.remove('loading');
            element.removeAttribute('disabled');
        }
    },

    /**
     * Simple form validation
     * @param {HTMLFormElement} form - Form to validate
     * @returns {boolean} Is valid
     */
    validateForm(form) {
        const inputs = form.querySelectorAll('[required]');
        let valid = true;

        inputs.forEach(input => {
            // Remove previous error states
            input.classList.remove('is-invalid');

            if (!input.value.trim()) {
                input.classList.add('is-invalid');
                valid = false;
            }

            // Email validation
            if (input.type === 'email' && input.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    input.classList.add('is-invalid');
                    valid = false;
                }
            }
        });

        return valid;
    },

    /**
     * Show toast notification
     * @param {string} message - Toast message
     * @param {string} type - Toast type (success, error, warning)
     */
    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;

        document.body.appendChild(toast);

        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 10);

        // Remove after delay
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    /**
     * Initialize all helpers
     */
    init() {
        this.initSmoothScroll();
        this.initBackToTop();
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    Helpers.init();
});

// Export for manual use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Helpers;
}
