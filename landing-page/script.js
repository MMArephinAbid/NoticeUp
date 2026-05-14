/* ========================================
   NoticeUp Landing Page JavaScript
   Smooth Interactions & Animations
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // Mobile Navigation Toggle
    // ========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ========================================
    // FAQ Accordion
    // ========================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Form Submission
    // ========================================
    const ctaForm = document.getElementById('ctaForm');

    if (ctaForm) {
        ctaForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = this.querySelector('input[type="email"]').value;
            const button = this.querySelector('button');
            const originalText = button.innerHTML;

            // Simulate form submission
            button.innerHTML = 'Submitting...';
            button.disabled = true;

            setTimeout(() => {
                button.innerHTML = 'Success! Check your email';
                button.style.background = '#10B981';

                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.style.background = '';
                    button.disabled = false;
                    this.reset();
                }, 3000);
            }, 1500);
        });
    }

    // ========================================
    // Intersection Observer for Animations
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.problem-card, .feature-card, .step, .testimonial-card, .pricing-card, .faq-item'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // ========================================
    // Pricing Card Hover Effect
    // ========================================
    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            pricingCards.forEach(c => c.style.transform = 'scale(0.98)');
            this.style.transform = 'scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            pricingCards.forEach(c => {
                if (c.classList.contains('popular')) {
                    c.style.transform = 'scale(1.05)';
                } else {
                    c.style.transform = 'scale(1)';
                }
            });
        });
    });

    // ========================================
    // Testimonial Auto-rotate (Optional)
    // ========================================
    // Uncomment below for auto-rotating testimonials on mobile
    /*
    if (window.innerWidth < 768) {
        const testimonials = document.querySelectorAll('.testimonial-card');
        let currentTestimonial = 0;

        setInterval(() => {
            testimonials.forEach(t => t.style.display = 'none');
            testimonials[currentTestimonial].style.display = 'block';
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }, 5000);
    }
    */

    // ========================================
    // Parallax Effect on Hero (Subtle)
    // ========================================
    const heroVisual = document.querySelector('.hero-visual');

    if (heroVisual && window.innerWidth > 768) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            heroVisual.style.transform = `translateY(${rate}px)`;
        });
    }

    // ========================================
    // Counter Animation for Stats
    // ========================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);

        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target + '+';
                clearInterval(counter);
            } else {
                element.textContent = Math.floor(start) + '+';
            }
        }, 16);
    }

    // ========================================
    // Copy to Clipboard for Demo URL
    // ========================================
    // If you add a "Copy URL" button later
    window.copyToClipboard = function(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard!');
        });
    };

    // ========================================
    // Keyboard Navigation Support
    // ========================================
    document.addEventListener('keydown', function(e) {
        // Close mobile menu on Escape
        if (e.key === 'Escape') {
            mobileMenuBtn?.classList.remove('active');
            navLinks?.classList.remove('active');
        }
    });

    // ========================================
    // Preload Critical Images
    // ========================================
    function preloadImage(src) {
        const img = new Image();
        img.src = src;
    }

    // Add any critical images here
    // preloadImage('/path/to/image.jpg');

    console.log('NoticeUp Landing Page Loaded Successfully!');
});

// ========================================
// Performance: Debounce Scroll Events
// ========================================
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
