// Main JavaScript file for Data Projects Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the portfolio with animations and interactivity
    initPortfolio();
});

function initPortfolio() {
    // Add scroll animations
    addScrollAnimations();
    
    // Initialize project filtering
    initProjectFilters();
    
    // Add smooth scrolling for navigation
    addSmoothScrolling();
    
    // Initialize contact form validation if needed
    // initContactForm();
}

// Add animations when elements come into view
function addScrollAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .contact-item');
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
        // Add initial hidden state via class
        element.classList.add('pre-animation');
    });
}

// Add project filtering functionality
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
    const projectsSection = document.getElementById('projects');
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-container';
    
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
    
    // Insert filter container after the projects heading
    const projectsHeading = projectsSection.querySelector('h2');
    projectsHeading.parentNode.insertBefore(filterContainer, projectsHeading.nextSibling);
    
    // Add CSS for filter buttons
    addFilterStyles();
}

// Filter projects based on selected tag
function filterProjects(tag) {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
        if (tag === 'all') {
            project.style.display = 'block';
            return;
        }
        
        const projectTags = project.querySelectorAll('.project-tag');
        let hasTag = false;
        
        projectTags.forEach(projectTag => {
            if (projectTag.textContent.trim() === tag) {
                hasTag = true;
            }
        });
        
        project.style.display = hasTag ? 'block' : 'none';
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
        });
    });
}

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
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Call back to top button function
addBackToTopButton();
