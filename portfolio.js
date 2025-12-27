// Smooth scrolling pour les liens d'ancrage
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

// Masquer l'indicateur de scroll après le défilement
window.addEventListener('scroll', () => {
    const indicator = document.querySelector('.scroll-indicator');
    if (indicator) {
        if (window.scrollY > 100) {
            indicator.style.opacity = '0';
            indicator.style.transition = 'opacity 0.3s ease';
        } else {
            indicator.style.opacity = '1';
        }
    }
});

// Intersection Observer pour les animations au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease forwards';
        }
    });
}, observerOptions);

// Appliquer l'observer aux éléments animés
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-card, .timeline-item, .vision-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// Animation de la navbar au scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll vers le bas
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll vers le haut
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Ajouter une transition à la navbar
if (navbar) {
    navbar.style.transition = 'transform 0.3s ease';
}