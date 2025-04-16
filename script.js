// Enhanced portfolio interactions with smooth transitions and animations
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    // Add active class to navigation links based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('.section');
        const scrollPosition = window.scrollY + 100; // Offset to trigger earlier
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);
            
            if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else if (navLink) {
                navLink.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Run once on page load
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                this.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                this.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (nav && menuToggle && !nav.contains(event.target) && !menuToggle.contains(event.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Dark Mode Toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    // Check for system preference and local storage
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme === 'dark' || (!storedTheme && prefersDarkScheme)) {
        document.documentElement.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark-mode');
            
            if (document.documentElement.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('theme', 'light');
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }
    
    // Enhanced animations for elements as they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.dataset.animation || 'fade-in';
                element.classList.add(animationType);
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Apply animations to different sections
    const elementsToAnimate = document.querySelectorAll('.animate');
    elementsToAnimate.forEach(element => {
        animateOnScroll.observe(element);
    });
    
    // Apply animations for section content
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const content = section.querySelector('.container');
        if (content) {
            content.classList.add('animate');
            content.dataset.animation = 'fade-in';
            animateOnScroll.observe(content);
        }
    });
    
    // Skill bar animation
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skill => {
        skill.style.width = '0%';
    });
    
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const category = entry.target;
                const skills = category.querySelectorAll('.skill-level');
                
                skills.forEach((skill, index) => {
                    setTimeout(() => {
                        const width = skill.style.width;
                        skill.style.width = '0%';
                        
                        // Trigger reflow
                        void skill.offsetWidth;
                        
                        skill.style.width = width;
                    }, 100 * index);
                });
                
                observer.unobserve(category);
            }
        });
    }, observerOptions);
    
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        skillObserver.observe(category);
    });
    
    // Interactive project cards with hover effect
    const allProjectCards = document.querySelectorAll('.project-card');
    allProjectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-15px)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Simple form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let valid = true;
            const inputs = contactForm.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.borderColor = 'var(--error-color)';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (valid) {
                // Normally would submit the form here
                alert('Form submitted successfully! (This is just a demo)');
                contactForm.reset();
            }
        });
    }
    
    // D3.js visualization in the header
    if (document.querySelector('.data-visualization')) {
        createDataVisualization();
    }
    
    // Create interactive data visualization
    function createDataVisualization() {
        // Basic D3 visualization - bubbles moving randomly
        const width = document.querySelector('.data-visualization').clientWidth;
        const height = document.querySelector('.data-visualization').clientHeight;
        
        const svg = d3.select('.data-visualization')
            .append('svg')
            .attr('width', width)
            .attr('height', height);
        
        // Create random data
        const numNodes = 20;
        const nodes = Array.from({ length: numNodes }, () => ({
            radius: Math.random() * 20 + 10,
            x: Math.random() * width,
            y: Math.random() * height,
            vx: Math.random() * 2 - 1,
            vy: Math.random() * 2 - 1
        }));
        
        // Create circles
        const circles = svg.selectAll('circle')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('r', d => d.radius)
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('fill', 'rgba(255, 255, 255, 0.2)')
            .attr('stroke', 'rgba(255, 255, 255, 0.5)')
            .attr('stroke-width', 1);
        
        // Animate
        function tick() {
            circles
                .attr('cx', d => {
                    d.x += d.vx;
                    if (d.x < d.radius) {
                        d.x = d.radius;
                        d.vx = -d.vx;
                    }
                    if (d.x > width - d.radius) {
                        d.x = width - d.radius;
                        d.vx = -d.vx;
                    }
                    return d.x;
                })
                .attr('cy', d => {
                    d.y += d.vy;
                    if (d.y < d.radius) {
                        d.y = d.radius;
                        d.vy = -d.vy;
                    }
                    if (d.y > height - d.radius) {
                        d.y = height - d.radius;
                        d.vy = -d.vy;
                    }
                    return d.y;
                });
            
            requestAnimationFrame(tick);
        }
        
        tick();
    }
    
    // Sample data visualization for the dedicated visualization section
    if (document.getElementById('visualization-container')) {
        createMainVisualization();
    }
    
    function createMainVisualization() {
        const width = document.getElementById('visualization-container').clientWidth;
        const height = 400;
        const margin = { top: 40, right: 30, bottom: 60, left: 60 };
        
        // Sample data - monthly data engagement
        const data = [
            { month: 'Jan', value: 45 },
            { month: 'Feb', value: 52 },
            { month: 'Mar', value: 48 },
            { month: 'Apr', value: 63 },
            { month: 'May', value: 75 },
            { month: 'Jun', value: 72 },
            { month: 'Jul', value: 85 },
            { month: 'Aug', value: 92 },
            { month: 'Sep', value: 87 },
            { month: 'Oct', value: 78 },
            { month: 'Nov', value: 68 },
            { month: 'Dec', value: 59 }
        ];
        
        const svg = d3.select('#visualization-container')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        
        // X axis
        const x = d3.scaleBand()
            .domain(data.map(d => d.month))
            .range([0, width - margin.left - margin.right])
            .padding(0.3);
        
        svg.append('g')
            .attr('transform', `translate(0,${height - margin.top - margin.bottom})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
            .style('font-size', '12px');
        
        // Y axis
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value) * 1.1])
            .range([height - margin.top - margin.bottom, 0]);
        
        svg.append('g')
            .call(d3.axisLeft(y))
            .selectAll('text')
            .style('font-size', '12px');
        
        // Add title
        svg.append('text')
            .attr('x', (width - margin.left - margin.right) / 2)
            .attr('y', -margin.top / 2)
            .attr('text-anchor', 'middle')
            .style('font-size', '16px')
            .style('font-weight', 'bold')
            .text('Monthly Data Engagement Score');
        
        // X axis label
        svg.append('text')
            .attr('x', (width - margin.left - margin.right) / 2)
            .attr('y', height - margin.top - margin.bottom + 40)
            .attr('text-anchor', 'middle')
            .style('font-size', '14px')
            .text('Month');
        
        // Y axis label
        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -margin.left + 15)
            .attr('x', -(height - margin.top - margin.bottom) / 2)
            .attr('text-anchor', 'middle')
            .style('font-size', '14px')
            .text('Engagement Score');
        
        // Create a tooltip
        const tooltip = d3.select('#visualization-container')
            .append('div')
            .style('opacity', 0)
            .attr('class', 'tooltip')
            .style('background-color', 'white')
            .style('border', '1px solid #ddd')
            .style('border-radius', '8px')
            .style('padding', '10px')
            .style('position', 'absolute')
            .style('pointer-events', 'none')
            .style('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.15)')
            .style('font-size', '12px');
        
        // Functions for tooltips
        const mouseover = function() {
            tooltip.style('opacity', 1);
            d3.select(this)
                .style('opacity', 0.8)
                .style('stroke', 'white')
                .style('stroke-width', 2);
        };
        
        const mousemove = function(event, d) {
            tooltip
                .html(`Month: ${d.month}<br>Score: ${d.value}`)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 50) + 'px');
        };
        
        const mouseleave = function() {
            tooltip.style('opacity', 0);
            d3.select(this)
                .style('opacity', 1)
                .style('stroke', 'none');
        };
        
        // Create gradient
        const defs = svg.append('defs');
        
        const gradient = defs.append('linearGradient')
            .attr('id', 'bar-gradient')
            .attr('x1', '0%')
            .attr('y1', '100%')
            .attr('x2', '0%')
            .attr('y2', '0%');
        
        gradient.append('stop')
            .attr('offset', '0%')
            .attr('stop-color', '#3b82f6');
        
        gradient.append('stop')
            .attr('offset', '100%')
            .attr('stop-color', '#8b5cf6');
        
        // Add bars with animation
        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => x(d.month))
            .attr('y', height - margin.top - margin.bottom)
            .attr('width', x.bandwidth())
            .attr('height', 0)
            .attr('fill', 'url(#bar-gradient)')
            .attr('rx', 4)
            .on('mouseover', mouseover)
            .on('mousemove', mousemove)
            .on('mouseleave', mouseleave)
            .transition()
            .duration(800)
            .delay((d, i) => i * 100)
            .attr('y', d => y(d.value))
            .attr('height', d => height - margin.top - margin.bottom - y(d.value));
    }

    // Create header visualization
    function createHeaderVisualization() {
        const container = document.getElementById('header-visualization');
        if (!container) return;

        const width = container.clientWidth;
        const height = container.clientHeight;
        const svg = d3.select(container)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        // Create random data points
        const numPoints = 50;
        const points = Array.from({ length: numPoints }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 4 + 2,
            opacity: Math.random() * 0.5 + 0.2
        }));

        // Add points
        svg.selectAll('circle')
            .data(points)
            .enter()
            .append('circle')
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', d => d.size)
            .attr('fill', 'white')
            .attr('opacity', d => d.opacity);

        // Add connecting lines
        const lines = [];
        points.forEach((p1, i) => {
            points.slice(i + 1).forEach(p2 => {
                const distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
                if (distance < 150) {
                    lines.push({
                        x1: p1.x,
                        y1: p1.y,
                        x2: p2.x,
                        y2: p2.y,
                        opacity: 0.1
                    });
                }
            });
        });

        svg.selectAll('line')
            .data(lines)
            .enter()
            .append('line')
            .attr('x1', d => d.x1)
            .attr('y1', d => d.y1)
            .attr('x2', d => d.x2)
            .attr('y2', d => d.y2)
            .attr('stroke', 'white')
            .attr('stroke-width', 1)
            .attr('opacity', d => d.opacity);

        // Add animation
        function animate() {
            svg.selectAll('circle')
                .transition()
                .duration(2000)
                .attr('cx', d => {
                    const newX = d.x + (Math.random() - 0.5) * 20;
                    return Math.max(d.size, Math.min(width - d.size, newX));
                })
                .attr('cy', d => {
                    const newY = d.y + (Math.random() - 0.5) * 20;
                    return Math.max(d.size, Math.min(height - d.size, newY));
                })
                .on('end', animate);
        }

        animate();
    }

    // Initialize header visualization
    createHeaderVisualization();

    // Animate skill bars when they come into view
    function animateSkillBars() {
        const skillLevels = document.querySelectorAll('.skill-level');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillLevel = entry.target;
                    const width = skillLevel.style.width;
                    skillLevel.classList.add('animate');
                    skillLevel.style.setProperty('--skill-level', width);
                    
                    // Trigger animation
                    setTimeout(() => {
                        skillLevel.classList.add('show');
                    }, 100);
                    
                    observer.unobserve(skillLevel);
                }
            });
        }, {
            threshold: 0.5
        });

        skillLevels.forEach(skillLevel => {
            observer.observe(skillLevel);
        });
    }

    // Initialize skill bar animations
    animateSkillBars();
});