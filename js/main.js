<<<<<<< HEAD
// Main JavaScript file for Data Projects Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the portfolio with animations and interactivity
    initPortfolio();
});

function initPortfolio() {
    // Add scroll animations
    addScrollAnimations();
=======
// Modern Portfolio JavaScript Functionality

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the portfolio
    initPortfolio();
});

// Main initialization function
function initPortfolio() {
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize particle.js background
    initParticles();
    
    // Initialize scroll animations
    initScrollAnimations();
>>>>>>> f2860d5 (Initial commit)
    
    // Initialize project filtering
    initProjectFilters();
    
<<<<<<< HEAD
    // Add smooth scrolling for navigation
    addSmoothScrolling();
    
    // Initialize contact form validation if needed
    // initContactForm();
}

// Add animations when elements come into view
function addScrollAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .contact-item');
=======
    // Initialize scroll progress indicator
    initScrollProgress();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize skill bars animation
    initSkillBars();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize form labels
    initFormLabels();
}

// Custom cursor functionality
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (!cursor || !cursorFollower) return;
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Add a slight delay to follower for smooth effect
        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 50);
    });
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-tag, input, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursor.classList.add('cursor-hover');
            cursorFollower.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', function() {
            cursor.classList.remove('cursor-hover');
            cursorFollower.classList.remove('cursor-hover');
        });
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseout', function(e) {
        if (e.relatedTarget === null) {
            cursor.style.opacity = '0';
            cursorFollower.style.opacity = '0';
        }
    });
    
    document.addEventListener('mouseover', function() {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
    });
}

// Initialize particles.js for hero background
function initParticles() {
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#6c5ce7"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#6c5ce7",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
}

// Initialize scroll animations
function initScrollAnimations() {
    // Simple implementation of AOS (Animate On Scroll)
    const animatedElements = document.querySelectorAll('[data-aos]');
>>>>>>> f2860d5 (Initial commit)
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
<<<<<<< HEAD
                entry.target.classList.add('animate-in');
=======
                entry.target.classList.add('aos-animate');
>>>>>>> f2860d5 (Initial commit)
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
<<<<<<< HEAD
        threshold: 0.2
=======
        threshold: 0.1
>>>>>>> f2860d5 (Initial commit)
    });
    
    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
<<<<<<< HEAD
        // Add initial hidden state via class
        element.classList.add('pre-animation');
    });
}

// Add project filtering functionality
=======
    });
}

// Initialize project filtering
>>>>>>> f2860d5 (Initial commit)
function initProjectFilters() {
    // Get all unique tags from projects
    const allTags = new Set();
    const projectTags = document.querySelectorAll('.project-tag');
    
    projectTags.forEach(tag => {
        allTags.add(tag.textContent.trim());
    });
    
    // Create filter buttons if there are tags
    if (allTags.size > 0) {
        createFilterButtons(Array.from(allTags));
    }
}

// Create filter buttons based on project tags
function createFilterButtons(tags) {
    // Create filter container
<<<<<<< HEAD
    const projectsSection = document.getElementById('projects');
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-container';
=======
    const filterContainer = document.getElementById('project-filters');
    if (!filterContainer) return;
>>>>>>> f2860d5 (Initial commit)
    
    // Add "All" button
    const allButton = document.createElement('button');
    allButton.className = 'filter-button active';
    allButton.textContent = 'All';
    allButton.addEventListener('click', function() {
        filterProjects('all');
        setActiveButton(this);
    });
    filterContainer.appendChild(allButton);
    
    // Add tag buttons
    tags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'filter-button';
        button.textContent = tag;
        button.addEventListener('click', function() {
            filterProjects(tag);
            setActiveButton(this);
        });
        filterContainer.appendChild(button);
    });
<<<<<<< HEAD
    
    // Insert filter container after the projects heading
    const projectsHeading = projectsSection.querySelector('h2');
    projectsHeading.parentNode.insertBefore(filterContainer, projectsHeading.nextSibling);
    
    // Add CSS for filter buttons
    addFilterStyles();
=======
>>>>>>> f2860d5 (Initial commit)
}

// Filter projects based on selected tag
function filterProjects(tag) {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
        if (tag === 'all') {
<<<<<<< HEAD
            project.style.display = 'block';
=======
            project.style.display = 'flex';
            setTimeout(() => {
                project.style.opacity = '1';
                project.style.transform = 'translateY(0)';
            }, 10);
>>>>>>> f2860d5 (Initial commit)
            return;
        }
        
        const projectTags = project.querySelectorAll('.project-tag');
        let hasTag = false;
        
        projectTags.forEach(projectTag => {
            if (projectTag.textContent.trim() === tag) {
                hasTag = true;
            }
        });
        
<<<<<<< HEAD
        project.style.display = hasTag ? 'block' : 'none';
=======
        if (hasTag) {
            project.style.display = 'flex';
            setTimeout(() => {
                project.style.opacity = '1';
                project.style.transform = 'translateY(0)';
            }, 10);
        } else {
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
            setTimeout(() => {
                project.style.display = 'none';
            }, 300);
        }
>>>>>>> f2860d5 (Initial commit)
    });
}

// Set active filter button
function setActiveButton(activeButton) {
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

<<<<<<< HEAD
// Add CSS for filter buttons
function addFilterStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .filter-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 1.5rem 0;
        }
        
        .filter-button {
            background-color: var(--light-color);
            border: none;
            border-radius: 20px;
            padding: 8px 16px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }
        
        .filter-button:hover {
            background-color: var(--secondary-color);
            color: white;
        }
        
        .filter-button.active {
            background-color: var(--secondary-color);
            color: white;
        }
        
        .pre-animation {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// Add smooth scrolling for navigation links
function addSmoothScrolling() {
    // Create navigation if it doesn't exist
    if (!document.querySelector('nav')) {
        createNavigation();
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
=======
// Initialize scroll progress indicator
function initScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (!scrollProgress) return;
    
    window.addEventListener('scroll', () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        scrollProgress.style.width = progress + '%';
    });
}

// Initialize theme toggle
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
    
    // Check for saved theme preference or use default
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Initialize mobile menu
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuToggle || !navLinks) return;
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
>>>>>>> f2860d5 (Initial commit)
        });
    });
}

<<<<<<< HEAD
// Create navigation menu
function createNavigation() {
    const header = document.querySelector('header');
    const nav = document.createElement('nav');
    nav.className = 'main-nav';
    
    const navContainer = document.createElement('div');
    navContainer.className = 'container nav-container';
    
    const navLinks = document.createElement('ul');
    navLinks.className = 'nav-links';
    
    // Add navigation items
    const sections = [
        { id: 'projects', text: 'Projects' },
        { id: 'about', text: 'About' },
        { id: 'skills', text: 'Skills' },
        { id: 'contact', text: 'Contact' }
    ];
    
    sections.forEach(section => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${section.id}`;
        link.textContent = section.text;
        listItem.appendChild(link);
        navLinks.appendChild(listItem);
    });
    
    navContainer.appendChild(navLinks);
    nav.appendChild(navContainer);
    
    // Add mobile menu toggle
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.addEventListener('click', toggleMobileMenu);
    navContainer.appendChild(menuToggle);
    
    // Insert navigation before header content
    header.insertBefore(nav, header.firstChild);
    
    // Add navigation styles
    addNavigationStyles();
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Add navigation styles
function addNavigationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .main-nav {
            background-color: var(--primary-color);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
        }
        
        .nav-links {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        
        .nav-links li {
            margin-left: 30px;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }
        
        .nav-links a:hover {
            color: var(--secondary-color);
        }
        
        .menu-toggle {
            display: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        /* Adjust header padding to account for fixed nav */
        header {
            padding-top: 120px !important;
        }
        
        @media (max-width: 768px) {
            .menu-toggle {
                display: block;
            }
            
            .nav-links {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: var(--primary-color);
                flex-direction: column;
                align-items: center;
                padding: 20px 0;
                clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
                transition: clip-path 0.4s ease;
            }
            
            .nav-links.active {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
            
            .nav-links li {
                margin: 15px 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Back to top button functionality
function addBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
    
    // Add styles for the button
    const style = document.createElement('style');
    style.textContent = `
        #back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: var(--secondary-color);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
            cursor: pointer;
            display: none;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease;
            z-index: 999;
        }
        
        #back-to-top:hover {
            background-color: var(--primary-color);
        }
        
        #back-to-top.visible {
            display: block;
        }
    `;
    document.head.appendChild(style);
    
    // Show/hide button based on scroll position
=======
// Initialize skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percentage = bar.parentElement.previousElementSibling.querySelector('.skill-percentage').textContent;
                bar.style.setProperty('--progress', percentage);
                bar.classList.add('animate');
                // Unobserve after animation is triggered
                observer.unobserve(bar);
            }
        });
    }, {
        threshold: 0.2
    });
    
    // Observe each skill bar
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize back to top button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;
    
>>>>>>> f2860d5 (Initial commit)
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
<<<<<<< HEAD
    // Scroll to top when clicked
=======
>>>>>>> f2860d5 (Initial commit)
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

<<<<<<< HEAD
// Call back to top button function
addBackToTopButton();
=======
// Initialize form labels animation
function initFormLabels() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        // Set initial state for inputs with values
        if (input.value !== '') {
            const label = input.nextElementSibling;
            if (label && label.tagName === 'LABEL') {
                label.classList.add('active');
            }
        }
        
        // Add event listeners
        input.addEventListener('focus', () => {
            const label = input.nextElementSibling;
            if (label && label.tagName === 'LABEL') {
                label.classList.add('active');
            }
        });
        
        input.addEventListener('blur', () => {
            if (input.value === '') {
                const label = input.nextElementSibling;
                if (label && label.tagName === 'LABEL') {
                    label.classList.remove('active');
                }
            }
        });
    });
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Glitch effect for hero title
function initGlitchEffect() {
    const glitchElement = document.querySelector('.glitch');
    if (!glitchElement) return;
    
    // Add random glitch intervals
    setInterval(() => {
        glitchElement.classList.add('active');
        setTimeout(() => {
            glitchElement.classList.remove('active');
        }, 200);
    }, 3000);
}

// Initialize typing effect
function initTypingEffect() {
    const element = document.querySelector('.typing-effect');
    if (!element) return;
    
    const text = element.getAttribute('data-text');
    const speed = parseInt(element.getAttribute('data-speed')) || 100;
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
}

// Call additional effects
initGlitchEffect();
initTypingEffect();
>>>>>>> f2860d5 (Initial commit)
