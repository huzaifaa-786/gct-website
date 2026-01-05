/**
 * GCT Bhakkar - Animation Utilities
 * Scroll animations and visual effects
 */

const Animations = {
    /**
     * Initialize scroll-based animations
     */
    initScrollAnimations() {
        const animatedElements = document.querySelectorAll('[data-animate]');

        if (animatedElements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const animation = element.dataset.animate || 'fadeInUp';
                        const delay = element.dataset.delay || 0;

                        setTimeout(() => {
                            element.classList.add('animated', `animate-${animation}`);
                        }, parseInt(delay));

                        observer.unobserve(element);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        animatedElements.forEach((el) => observer.observe(el));
    },

    /**
     * Initialize counter animations
     */
    initCounters() {
        const counters = document.querySelectorAll('[data-counter]');

        if (counters.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        this.animateCounter(counter);
                        observer.unobserve(counter);
                    }
                });
            },
            { threshold: 0.5 }
        );

        counters.forEach((counter) => observer.observe(counter));
    },

    /**
     * Animate a single counter element
     * @param {HTMLElement} element - Counter element to animate
     */
    animateCounter(element) {
        const target = parseInt(element.dataset.counter) || 0;
        const suffix = element.dataset.suffix || '';
        const duration = parseInt(element.dataset.duration) || 2000;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(easeOutQuart * target);

            element.textContent = currentValue + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + suffix;
            }
        };

        requestAnimationFrame(updateCounter);
    },

    /**
     * Initialize parallax effects
     */
    initParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        if (parallaxElements.length === 0) return;

        let ticking = false;

        const updateParallax = () => {
            parallaxElements.forEach((element) => {
                const speed = parseFloat(element.dataset.parallax) || 0.5;
                const rect = element.getBoundingClientRect();
                const scrolled = window.scrollY;

                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const yPos = -(scrolled * speed);
                    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            });
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });
    },

    /**
     * Initialize stagger animation for lists
     */
    initStaggerAnimation() {
        const staggerContainers = document.querySelectorAll('[data-stagger]');

        staggerContainers.forEach((container) => {
            const children = container.children;
            const delay = parseInt(container.dataset.stagger) || 100;

            Array.from(children).forEach((child, index) => {
                child.style.animationDelay = `${index * delay}ms`;
            });
        });
    },

    /**
     * Initialize all animations
     */
    init() {
        this.initScrollAnimations();
        this.initCounters();
        this.initParallax();
        this.initStaggerAnimation();
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    Animations.init();
});

// Export for manual use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Animations;
}
