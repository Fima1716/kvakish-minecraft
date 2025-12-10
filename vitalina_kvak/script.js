// Splash Screen
// Preload main content immediately
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
});

// Show main content with fade after splash
setTimeout(() => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    
    splashScreen.style.display = 'none';
    mainContent.classList.add('visible');
}, 2500);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax');
    if (parallax) {
        const scrolled = window.pageYOffset;
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.principle-card, .rule-item, .punishment-row');
    animatedElements.forEach(el => observer.observe(el));
});

// Gallery Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Auto-play carousel
setInterval(nextSlide, 5000);

// Copy IP Address - Universal function
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const ip = element.textContent;
    
    navigator.clipboard.writeText(ip).then(() => {
        // Find the button next to this element
        const button = element.nextElementSibling;
        const originalText = button.textContent;
        
        button.textContent = '✓';
        button.style.background = '#7711d7';
        button.style.color = 'white';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#c4d95e';
            button.style.color = '#333';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('IP: ' + ip);
    });
}

// Legacy function for compatibility
function copyIP() {
    copyToClipboard('vanilla-ip');
}

// Navbar hide/show on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});