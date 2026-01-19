/**
 * Portfolio Website JavaScript
 * Copyright (c) 2025 Kiran Badave
 * Licensed under the MIT License
 * https://github.com/kiran-badave/kiran-badave.github.io
 */

// ===================================
// Theme Management
// ===================================
let currentTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme on load
document.documentElement.setAttribute('data-theme', currentTheme);

// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    
    // Theme toggle handler
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', currentTheme);
            localStorage.setItem('theme', currentTheme);
        });
    }
    
    // Initialize content
    if (typeof portfolioData !== 'undefined') {
        populatePortfolioContent();
    }
});

// ===================================
// Populate Content from data.js
// ===================================

function populatePortfolioContent() {
    const data = portfolioData;
    
    // Update Hero Section
    document.querySelector('.hero-name').textContent = data.personal.name;
    document.querySelector('.hero-subtitle').textContent = data.personal.title;
    document.querySelector('.profile-image').src = data.personal.profileImage;
    document.querySelector('.profile-image').alt = data.personal.name;
    
    // Update hero description with summary
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) {
        // Use first 200 characters of summary for hero
        heroDesc.textContent = data.summary.substring(0, 200) + '...';
    }
    
    // Update Stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const statLabels = document.querySelectorAll('.stat-label');
    data.stats.forEach((stat, index) => {
        if (statNumbers[index]) {
            statNumbers[index].setAttribute('data-count', stat.number);
        }
        if (statLabels[index]) {
            statLabels[index].textContent = stat.label;
        }
    });
    
    // Update About Section
    const aboutSection = document.querySelector('.about-text');
    if (aboutSection) {
        // Split summary into paragraphs (by sentences)
        const sentences = data.summary.match(/[^.!?]+[.!?]+/g) || [data.summary];
        const paragraphs = [];
        let currentPara = '';
        
        sentences.forEach((sentence, i) => {
            currentPara += sentence;
            if ((i + 1) % 2 === 0 || i === sentences.length - 1) {
                paragraphs.push(currentPara.trim());
                currentPara = '';
            }
        });
        
        const aboutDescriptions = aboutSection.querySelectorAll('.about-description');
        paragraphs.forEach((para, index) => {
            if (aboutDescriptions[index]) {
                aboutDescriptions[index].textContent = para;
            }
        });
    }
    
    // Update About Info
    const infoItems = document.querySelectorAll('.about-info .info-item');
    if (infoItems.length >= 4) {
        infoItems[0].querySelector('.info-value').textContent = data.personal.location;
        infoItems[1].querySelector('.info-value').textContent = data.personal.email;
        infoItems[2].querySelector('.info-value a').href = data.personal.github;
        infoItems[2].querySelector('.info-value a').textContent = data.personal.githubDisplay;
        infoItems[3].querySelector('.info-value a').href = data.personal.linkedin;
        infoItems[3].querySelector('.info-value a').textContent = data.personal.linkedinDisplay;
    }
    
    // Update Experience Section
    const timelineItems = document.querySelectorAll('.timeline-item');
    data.experience.forEach((exp, index) => {
        if (timelineItems[index]) {
            const item = timelineItems[index];
            
            // Update company info
            item.querySelector('.company-name').textContent = exp.company;
            item.querySelector('.company-location').textContent = exp.location;
            item.querySelector('.timeline-date').textContent = `${exp.duration} (${exp.durationYears})`;
            item.querySelector('.job-title').textContent = exp.role;
            
            // Update products
            const productList = item.querySelector('.product-list');
            if (productList && exp.products) {
                productList.innerHTML = exp.products.map(product =>
                    `<li><a href="${product.url}" target="_blank" rel="noopener">${product.name}</a></li>`
                ).join('');
            }
            
            // Update responsibilities
            const responsibilitiesList = item.querySelector('.responsibilities');
            if (responsibilitiesList) {
                responsibilitiesList.innerHTML = exp.responsibilities.map(resp =>
                    `<li>${resp}</li>`
                ).join('');
            }
            
            // Update technologies
            const techCategories = item.querySelector('.tech-categories');
            if (techCategories && exp.technologies) {
                techCategories.innerHTML = Object.entries(exp.technologies).map(([key, value]) =>
                    `<div class="tech-category"><strong>${key}:</strong> ${value}</div>`
                ).join('');
            }
        }
    });
    
    // Update Skills Section
    const skillCategories = document.querySelectorAll('.skill-category');
    data.skills.forEach((skill, index) => {
        if (skillCategories[index]) {
            skillCategories[index].querySelector('.skill-icon').textContent = skill.icon;
            skillCategories[index].querySelector('h3').textContent = skill.title;
            skillCategories[index].querySelector('p').textContent = skill.description;
        }
    });
    
    // Update Education Section
    const educationCards = document.querySelectorAll('.education-card');
    data.education.forEach((edu, index) => {
        if (educationCards[index]) {
            const card = educationCards[index];
            card.querySelector('.education-icon').textContent = edu.icon;
            card.querySelector('h3').textContent = edu.degree;
            card.querySelector('.education-degree').textContent = edu.field;
            card.querySelector('.education-institution').textContent = edu.institution;
            card.querySelector('.education-year').textContent = edu.duration;
        }
    });
    
    // Update Technical Skills Section
    if (data.technicalSkills) {
        const categories = {
            'Frontend': document.getElementById('frontend-skills'),
            'Backend': document.getElementById('backend-skills'),
            'Database': document.getElementById('database-skills'),
            'Testing': document.getElementById('testing-skills'),
            'DevOps': document.getElementById('devops-skills'),
            'Tools': document.getElementById('tools-skills')
        };
        
        // Group skills by category
        const groupedSkills = data.technicalSkills.reduce((acc, skill) => {
            if (!acc[skill.category]) {
                acc[skill.category] = [];
            }
            acc[skill.category].push(skill);
            return acc;
        }, {});
        
        // Populate each category
        Object.entries(groupedSkills).forEach(([category, skills]) => {
            const container = categories[category];
            if (container) {
                container.innerHTML = skills.map(skill => {
                    const percentage = Math.min((skill.years / 7) * 100, 100); // Max 7 years = 100%
                    return `
                        <div class="skill-item">
                            <span class="skill-name">${skill.name}</span>
                            <div class="skill-years">
                                <span class="years-badge">${skill.years}+ ${skill.years === 1 ? 'year' : 'years'}</span>
                                <div class="skill-bar">
                                    <div class="skill-bar-fill" style="width: ${percentage}%"></div>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
            }
        });
    }
    
    // Update Contact Section
    const contactItems = document.querySelectorAll('.contact-item');
    if (contactItems.length >= 4) {
        // Email
        contactItems[0].querySelector('a').href = `mailto:${data.personal.email}`;
        contactItems[0].querySelector('a').textContent = data.personal.email;
        
        // Phone
        const phoneDetails = contactItems[1].querySelector('.contact-details');
        phoneDetails.innerHTML = '<h3>Phone</h3>' +
            data.personal.phone.map(phone => `<p>${phone}</p>`).join('');
        
        // Location
        const locationDetails = contactItems[2].querySelector('.contact-details');
        const addressParts = data.personal.address.split(',');
        locationDetails.innerHTML = '<h3>Location</h3>' +
            addressParts.map(part => `<p>${part.trim()}</p>`).join('');
        
        // LinkedIn
        contactItems[3].querySelector('a').href = data.personal.linkedin;
        contactItems[3].querySelector('a').textContent = data.personal.linkedinDisplay;
    }
}

// ===================================
// GSAP Initialization
// ===================================
gsap.registerPlugin(ScrollTrigger);

// ===================================
// Custom Cursor
// ===================================
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .skill-category, .timeline-content, .education-card, .contact-item');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// ===================================
// Mobile Navigation
// ===================================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===================================
// Smooth Scroll with Offset
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Navigation Background on Scroll
// ===================================
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===================================
// Counter Animation
// ===================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when in view
const statNumbers = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => counterObserver.observe(stat));

// ===================================
// GSAP Animations
// ===================================

// Hero Section Animations
// Profile Image Animation - Wait for image to load
window.addEventListener('load', () => {
    gsap.from('.profile-image-wrapper', {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        delay: 0.2,
        ease: 'back.out(1.7)'
    });

    gsap.from('.profile-image', {
        opacity: 1,
        scale: 0.8,
        duration: 1,
        delay: 0.4,
        ease: 'elastic.out(1, 0.5)'
    });

    // Continuous floating animation for profile image
    gsap.to('.profile-image-wrapper', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5
    });
});

gsap.from('.hero-greeting', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.3
});

gsap.from('.hero-name', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.5
});

gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.7
});

gsap.from('.hero-description', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.9
});

gsap.from('.hero-cta', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 1.1
});

gsap.from('.hero-stats', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 1.3
});

gsap.from('.scroll-indicator', {
    opacity: 0,
    duration: 1,
    delay: 1.6
});

// Gradient Orbs Animation
gsap.to('.orb-1', {
    x: 50,
    y: 50,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

gsap.to('.orb-2', {
    x: -30,
    y: -30,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

gsap.to('.orb-3', {
    x: 40,
    y: -40,
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

// Section Headers Animation
gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header.querySelector('.section-tag'), {
        scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6
    });
    
    gsap.from(header.querySelector('.section-title'), {
        scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.2
    });
});

// About Section Animation
gsap.from('.about-description', {
    scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2
});

gsap.from('.about-info', {
    scrollTrigger: {
        trigger: '.about-info',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8
});

gsap.from('.info-item', {
    scrollTrigger: {
        trigger: '.about-info',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1
});

// Timeline Animation
gsap.utils.toArray('.timeline-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: index * 0.1
    });
    
    // Animate timeline marker
    gsap.from(item.querySelector('.timeline-marker'), {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        scale: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
    });
    
    // Animate responsibilities
    gsap.from(item.querySelectorAll('.responsibilities li'), {
        scrollTrigger: {
            trigger: item,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.05
    });
});

// Skills Grid Animation
gsap.utils.toArray('.skill-category').forEach((skill, index) => {
    gsap.from(skill, {
        scrollTrigger: {
            trigger: skill,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1
    });
});

// Education Cards Animation
gsap.utils.toArray('.education-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2
    });
});

// Contact Items Animation
gsap.utils.toArray('.contact-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        delay: index * 0.1
    });
});

// ===================================
// Parallax Effect for Hero Background
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-orb');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// Active Navigation Link
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Add Hover Effect to Timeline Content
// ===================================
const timelineContents = document.querySelectorAll('.timeline-content');
timelineContents.forEach(content => {
    content.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    content.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ===================================
// Magnetic Button Effect
// ===================================
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(button, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)'
        });
    });
});

// ===================================
// Profile Image Tilt Effect
// ===================================
const profileImage = document.querySelector('.profile-image-wrapper');
if (profileImage) {
    profileImage.addEventListener('mousemove', (e) => {
        const rect = profileImage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        gsap.to(profileImage, {
            rotationX: rotateX,
            rotationY: rotateY,
            duration: 0.5,
            ease: 'power2.out',
            transformPerspective: 1000
        });
    });
    
    profileImage.addEventListener('mouseleave', () => {
        gsap.to(profileImage, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
}

// ===================================
// Skill Category Tilt Effect
// ===================================
const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach(category => {
    category.addEventListener('mousemove', (e) => {
        const rect = category.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        gsap.to(category, {
            rotationX: rotateX,
            rotationY: rotateY,
            duration: 0.5,
            ease: 'power2.out',
            transformPerspective: 1000
        });
    });
    
    category.addEventListener('mouseleave', () => {
        gsap.to(category, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// ===================================
// Text Reveal Animation
// ===================================
function splitTextIntoSpans(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const text = element.textContent;
        const splitText = text.split('').map(char => {
            return `<span class="char">${char}</span>`;
        }).join('');
        element.innerHTML = splitText;
    });
}

// Apply to hero name
splitTextIntoSpans('.hero-name');

gsap.from('.hero-name .char', {
    opacity: 0,
    y: 50,
    rotationX: -90,
    stagger: 0.02,
    duration: 1,
    delay: 0.5,
    ease: 'back.out(1.7)'
});

// ===================================
// Loading Animation
// ===================================
// Removed body opacity animation to prevent profile picture from disappearing

// ===================================
// Scroll Progress Indicator
// ===================================
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
    z-index: 9999;
    transform-origin: left;
    transform: scaleX(0);
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight);
    progressBar.style.transform = `scaleX(${scrolled})`;
});

// ===================================
// Console Message
// ===================================
console.log('%c👋 Hello! Welcome to my portfolio', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ using HTML, CSS, JavaScript, and GSAP', 'color: #8b5cf6; font-size: 14px;');
console.log('%cInterested in the code? Check out the source!', 'color: #ec4899; font-size: 14px;');

// ===================================
// Performance Optimization
// ===================================
// Lazy load images if any are added later
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===================================
// Easter Egg - Konami Code
// ===================================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

window.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        // Easter egg activated!
        gsap.to('.gradient-orb', {
            scale: 2,
            duration: 1,
            stagger: 0.2,
            yoyo: true,
            repeat: 1,
            ease: 'elastic.out(1, 0.3)'
        });
        
        console.log('%c🎉 Konami Code Activated! You found the easter egg!', 'color: #10b981; font-size: 24px; font-weight: bold;');
    }
});

