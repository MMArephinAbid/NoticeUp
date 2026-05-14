/* ========================================
   NoticeUp Landing Page JavaScript v2.0
   All Features Included
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // Mobile Navigation Toggle
    // ========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            }
        });
    }

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // ========================================
    // Cookie Consent
    // ========================================
    const cookieBanner = document.getElementById('cookieBanner');

    // Show cookie banner if not already accepted
    if (cookieBanner && !localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }

    window.acceptCookies = function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('show');
        // Enable analytics
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    };

    window.declineCookies = function() {
        localStorage.setItem('cookiesAccepted', 'false');
        cookieBanner.classList.remove('show');
    };

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL without scrolling
                history.pushState(null, null, targetId);
            }
        });
    });

    // ========================================
    // Video Demo Player
    // ========================================
    window.playVideo = function() {
        const placeholder = document.getElementById('videoPlaceholder');
        const video = document.getElementById('demoVideo');

        if (placeholder && video) {
            // Replace with your actual YouTube video ID
            const videoId = 'dQw4w9WgXcQ'; // Replace with actual video ID
            video.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            placeholder.style.display = 'none';
            video.classList.remove('hidden');
        }
    };

    // Keyboard support for video play button
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                playVideo();
            }
        });
    }

    // ========================================
    // Pricing Toggle (Monthly/Annual)
    // ========================================
    const pricingToggle = document.getElementById('pricingToggle');

    if (pricingToggle) {
        const toggleLabels = pricingToggle.querySelectorAll('.toggle-label');

        toggleLabels.forEach(label => {
            label.addEventListener('click', function() {
                const billing = this.getAttribute('data-billing');
                const isAnnual = billing === 'annual';

                // Update active state
                toggleLabels.forEach(l => {
                    l.classList.remove('active');
                    l.setAttribute('aria-selected', 'false');
                });
                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');

                // Update prices
                document.querySelectorAll('.pricing-price .price').forEach(price => {
                    const monthly = price.getAttribute('data-monthly');
                    const annual = price.getAttribute('data-annual');

                    if (monthly && annual) {
                        price.textContent = '$' + (isAnnual ? annual : monthly);
                    }
                });
            });
        });
    }

    // ========================================
    // Form Submissions
    // ========================================
    const ctaForm = document.getElementById('ctaForm');
    const exitPopupForm = document.getElementById('exitPopupForm');

    function handleFormSubmit(form, e) {
        e.preventDefault();

        const emailInput = form.querySelector('input[type="email"]');
        const button = form.querySelector('button[type="submit"]');
        const email = emailInput.value;

        if (!email) return;

        const originalText = button.innerHTML;
        button.innerHTML = 'Submitting...';
        button.disabled = true;

        // Simulate API call (replace with actual API endpoint)
        setTimeout(() => {
            // Track conversion
            if (typeof gtag === 'function') {
                gtag('event', 'sign_up', {
                    'method': 'email',
                    'email': email
                });
            }

            button.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><polyline points="20 6 9 17 4 12"/></svg> Success!';
            button.style.background = '#10B981';

            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
                button.disabled = false;
                form.reset();

                // Close exit popup if this is the popup form
                if (form.id === 'exitPopupForm') {
                    closeExitPopup();
                }
            }, 3000);
        }, 1500);
    }

    if (ctaForm) {
        ctaForm.addEventListener('submit', (e) => handleFormSubmit(ctaForm, e));
    }

    if (exitPopupForm) {
        exitPopupForm.addEventListener('submit', (e) => handleFormSubmit(exitPopupForm, e));
    }

    // ========================================
    // Exit Intent Popup
    // ========================================
    const exitPopup = document.getElementById('exitPopup');
    let exitPopupShown = false;

    function showExitPopup() {
        if (!exitPopupShown && !sessionStorage.getItem('exitPopupShown')) {
            exitPopup.hidden = false;
            exitPopupShown = true;
            sessionStorage.setItem('exitPopupShown', 'true');
            document.body.style.overflow = 'hidden';

            // Track event
            if (typeof gtag === 'function') {
                gtag('event', 'exit_intent_shown');
            }
        }
    }

    window.closeExitPopup = function() {
        if (exitPopup) {
            exitPopup.hidden = true;
            document.body.style.overflow = '';
        }
    };

    // Show popup on mouse leave (desktop)
    if (exitPopup) {
        document.addEventListener('mouseout', function(e) {
            if (e.clientY < 10 && !exitPopupShown) {
                showExitPopup();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !exitPopup.hidden) {
                closeExitPopup();
            }
        });

        // Close on click outside
        exitPopup.querySelector('.exit-popup-overlay').addEventListener('click', closeExitPopup);
    }

    // ========================================
    // Live Chat Widget
    // ========================================
    window.toggleChat = function() {
        const chatWindow = document.getElementById('chatWindow');
        const chatToggle = document.querySelector('.chat-toggle');

        if (chatWindow && chatToggle) {
            const isExpanded = chatToggle.getAttribute('aria-expanded') === 'true';
            chatToggle.setAttribute('aria-expanded', !isExpanded);
            chatWindow.classList.toggle('hidden');
        }
    };

    // ========================================
    // Intersection Observer for Animations
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll(
        '.problem-card, .feature-card, .step, .testimonial-card, .pricing-card, .faq-item, .stat-item'
    ).forEach(el => {
        el.style.opacity = '0';
        animateOnScroll.observe(el);
    });

    // ========================================
    // Counter Animation for Stats
    // ========================================
    function animateCounter(element, target, suffix = '') {
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(counter);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber) {
                    const text = statNumber.textContent;
                    const number = parseInt(text.replace(/[^0-9]/g, ''));
                    const suffix = text.includes('+') ? '+' : (text.includes('%') ? '%' : '');

                    if (number) {
                        statNumber.textContent = '0' + suffix;
                        setTimeout(() => {
                            animateCounter(statNumber, number, suffix);
                        }, 200);
                    }
                }
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-item').forEach(stat => {
        statsObserver.observe(stat);
    });

    // ========================================
    // Pricing Card Hover Effect
    // ========================================
    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            pricingCards.forEach(c => {
                if (c !== this && !c.classList.contains('popular')) {
                    c.style.transform = 'scale(0.98)';
                    c.style.opacity = '0.7';
                }
            });
        });

        card.addEventListener('mouseleave', function() {
            pricingCards.forEach(c => {
                c.style.transform = '';
                c.style.opacity = '';
            });
        });
    });

    // ========================================
    // Testimonials Auto-rotate (Mobile)
    // ========================================
    function setupTestimonialCarousel() {
        if (window.innerWidth < 768) {
            const testimonials = document.querySelectorAll('.testimonial-card');
            let currentIndex = 0;

            if (testimonials.length > 1) {
                testimonials.forEach((t, i) => {
                    t.style.display = i === 0 ? 'block' : 'none';
                });

                setInterval(() => {
                    testimonials[currentIndex].style.display = 'none';
                    currentIndex = (currentIndex + 1) % testimonials.length;
                    testimonials[currentIndex].style.display = 'block';
                }, 5000);
            }
        }
    }

    // Only enable on mobile
    // setupTestimonialCarousel();

    // ========================================
    // Parallax Effect on Hero (Subtle)
    // ========================================
    const heroVisual = document.querySelector('.hero-visual');

    if (heroVisual && window.innerWidth > 768) {
        let ticking = false;

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const scrolled = window.pageYOffset;
                    if (scrolled < 800) {
                        heroVisual.style.transform = `translateY(${scrolled * 0.2}px)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ========================================
    // Track Scroll Depth for Analytics
    // ========================================
    let maxScrollDepth = 0;
    const scrollMilestones = [25, 50, 75, 100];

    window.addEventListener('scroll', debounce(function() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((window.pageYOffset / scrollHeight) * 100);

        scrollMilestones.forEach(milestone => {
            if (scrollPercent >= milestone && maxScrollDepth < milestone) {
                maxScrollDepth = milestone;
                if (typeof gtag === 'function') {
                    gtag('event', 'scroll_depth', {
                        'percent_scrolled': milestone
                    });
                }
            }
        });
    }, 500), { passive: true });

    // ========================================
    // Track Time on Page
    // ========================================
    let timeOnPage = 0;
    const timeTrackingInterval = setInterval(() => {
        timeOnPage += 30;
        if (timeOnPage === 30 || timeOnPage === 60 || timeOnPage === 180) {
            if (typeof gtag === 'function') {
                gtag('event', 'time_on_page', {
                    'seconds': timeOnPage
                });
            }
        }
        if (timeOnPage >= 300) {
            clearInterval(timeTrackingInterval);
        }
    }, 30000);

    // ========================================
    // Keyboard Navigation for FAQ
    // ========================================
    document.querySelectorAll('.faq-item summary').forEach(summary => {
        summary.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // ========================================
    // Copy to Clipboard Utility
    // ========================================
    window.copyToClipboard = function(text) {
        navigator.clipboard.writeText(text).then(() => {
            // Show toast notification
            showToast('Copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    };

    // Toast notification
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: #0F172A;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 9999;
            animation: fadeInUp 0.3s ease;
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // ========================================
    // Lazy Load Images
    // ========================================
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ========================================
    // Service Worker Registration (PWA)
    // ========================================
    if ('serviceWorker' in navigator) {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js');
    }

    // ========================================
    // Console Welcome Message
    // ========================================
    console.log(
        '%c NoticeUp ',
        'background: linear-gradient(135deg, #F97316, #FB923C); color: white; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 8px;'
    );
    console.log('Welcome to NoticeUp! 🚀');
    console.log('Interested in working with us? hello@noticeup.io');

});

// ========================================
// Utility Functions
// ========================================
function debounce(func, wait = 10, immediate = false) {
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// Performance Monitoring
// ========================================
if (window.performance && performance.timing) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const timing = performance.timing;
            const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
            const domReady = timing.domContentLoadedEventEnd - timing.navigationStart;

            console.log(`Page Load Time: ${pageLoadTime}ms`);
            console.log(`DOM Ready: ${domReady}ms`);

            // Send to analytics
            if (typeof gtag === 'function') {
                gtag('event', 'timing_complete', {
                    'name': 'page_load',
                    'value': pageLoadTime
                });
            }
        }, 0);
    });
}
