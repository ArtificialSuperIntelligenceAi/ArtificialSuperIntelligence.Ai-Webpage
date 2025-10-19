// The Frontier - Tron Ares Inspired Interactive JavaScript
// Cinematic cyberpunk interactions and animations

class FrontierApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupNavbarEffects();
        this.setupScrollAnimations();
        this.setupTronInterface();
        this.setupIntersectionObserver();
        this.setupTaglineInteractions();
        this.setupTronEffects();
        this.setupDataStreams();
        this.setupPositionMatrix();
    }

    // Smooth scrolling for navigation links
    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 100; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Navbar scroll effects
    setupNavbarEffects() {
        const nav = document.querySelector('.nav');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Add/remove scrolled class for styling
            if (currentScrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            // Hide/show navbar on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }

            lastScrollY = currentScrollY;
        });
    }

    // Scroll-triggered animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.section, .content-text, .content-visual');
        animateElements.forEach(el => observer.observe(el));
    }

    // Tron Interface Animation
    setupTronInterface() {
        const nodes = document.querySelectorAll('.node');
        const connections = document.querySelectorAll('.connection');
        
        // Define the logical flow sequence
        const flowSequence = [
            { node: 'llms', connection: 'llms-evolution' },
            { node: 'evolution', connection: 'evolution-asi' },
            { node: 'asi', connection: 'asi-us' },
            { node: 'us', connection: null }
        ];
        
        let currentStep = 0;
        const activateNextStep = () => {
            // Deactivate all nodes and connections
            nodes.forEach(node => node.classList.remove('active'));
            connections.forEach(conn => conn.classList.remove('active'));
            
            // Activate current step
            const step = flowSequence[currentStep];
            const activeNode = document.querySelector(`[data-type="${step.node}"]`);
            if (activeNode) {
                activeNode.classList.add('active');
            }
            
            // Activate corresponding connection if it exists
            if (step.connection) {
                const activeConnection = document.querySelector(`[data-from="${step.connection.split('-')[0]}"][data-to="${step.connection.split('-')[1]}"]`);
                if (activeConnection) {
                    activeConnection.classList.add('active');
                }
            }
            
            currentStep = (currentStep + 1) % flowSequence.length;
        };

        // Start the sequence
        activateNextStep();
        setInterval(activateNextStep, 3000);

        // Interactive node clicks
        nodes.forEach((node) => {
            node.addEventListener('click', () => {
                // Deactivate all
                nodes.forEach(n => n.classList.remove('active'));
                connections.forEach(c => c.classList.remove('active'));
                
                // Activate clicked node
                node.classList.add('active');
                
                // Add click effect
                node.style.transform = 'scale(1.1)';
    setTimeout(() => {
                    node.style.transform = '';
                }, 200);
            });
        });
    }

    // Intersection observer for various effects
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
            observer.observe(item);
        });

        // Observe intersection diagram
        const intersectionDiagram = document.querySelector('.intersection-diagram');
        if (intersectionDiagram) {
            observer.observe(intersectionDiagram);
        }
    }

    // Tagline interaction effects
    setupTaglineInteractions() {
        const taglineItems = document.querySelectorAll('.tagline-item');
        
        taglineItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                // Add glow effect
                item.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.4)';
                item.style.transform = 'translateY(-2px)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.boxShadow = '';
                item.style.transform = '';
            });

            item.addEventListener('click', () => {
                // Select this tagline
                taglineItems.forEach(t => t.classList.remove('selected'));
                item.classList.add('selected');
                
                // Update footer with selected tagline
                const footerTagline = document.querySelector('.footer-tagline');
                if (footerTagline) {
                    footerTagline.textContent = item.textContent.replace(/"/g, '');
                }
            });
        });
    }

    // Tron-style effects
    setupTronEffects() {
        const tronElements = document.querySelectorAll('.accent-text, .logo-text, .section-title');
        
        tronElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.triggerTronEffect(element);
            });
        });

        // Random Tron effects
        setInterval(() => {
            if (Math.random() < 0.15) {
                const randomElement = tronElements[Math.floor(Math.random() * tronElements.length)];
                this.triggerTronEffect(randomElement);
            }
        }, 8000);
    }

    // Data streams animation
    setupDataStreams() {
        // Create additional data streams dynamically
        const dataStreamsContainer = document.querySelector('.data-streams');
        if (!dataStreamsContainer) return;

        for (let i = 0; i < 5; i++) {
            const stream = document.createElement('div');
            stream.className = 'data-stream';
            stream.style.cssText = `
                position: absolute;
                width: 1px;
                height: 100%;
                background: linear-gradient(to bottom, transparent, #00ffff, transparent);
                left: ${20 + (i * 15)}%;
                animation: dataFlow ${6 + Math.random() * 4}s linear infinite;
                animation-delay: ${Math.random() * 4}s;
                opacity: 0.6;
            `;
            dataStreamsContainer.appendChild(stream);
        }
    }

    triggerTronEffect(element) {
        // Prevent multiple effects on same element
        if (element.tronInterval) {
            return;
        }
        
        // Store original text immediately
        const originalText = element.textContent;
        const tronChars = '01';
        
        let iterations = 0;
        const maxIterations = 15;
        
        // Add glow effect
        element.style.textShadow = '0 0 50px #00bfff';
        
        element.tronInterval = setInterval(() => {
            if (iterations < maxIterations) {
                // Scramble phase - replace each character with random binary
                element.textContent = originalText
                    .split('')
                    .map((char, index) => {
                        if (char === ' ') return ' '; // Keep spaces
                        return tronChars[Math.floor(Math.random() * tronChars.length)];
                    })
                    .join('');
                iterations++;
            } else {
                // ALWAYS restore original text - this is critical
                clearInterval(element.tronInterval);
                element.tronInterval = null;
                element.textContent = originalText;
                
                // Remove glow effect
                setTimeout(() => {
                    element.style.textShadow = '';
                }, 500);
            }
        }, 80);
    }

    // Utility method for smooth animations
    animateValue(element, start, end, duration, callback) {
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = start + (end - start) * this.easeOutCubic(progress);
            callback(current);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    // Position Matrix Interactive Effects
    setupPositionMatrix() {
        const matrixCells = document.querySelectorAll('.matrix-cell');
        const connectionLines = document.querySelectorAll('.connection-line');
        
        if (!matrixCells.length) return;

        // Matrix cell interactions
        matrixCells.forEach((cell, index) => {
            cell.addEventListener('mouseenter', () => {
                // Highlight related connections
                const cellType = cell.dataset.type;
                connectionLines.forEach(line => {
                    if (line.dataset.from === cellType || line.dataset.to === cellType) {
                        line.style.opacity = '1';
                        line.style.animation = 'connectionFlow 1s ease-in-out infinite';
                    }
                });

                // Add pulse effect to cell
                cell.style.animation = 'matrixCellPulse 0.5s ease-in-out';
            });

            cell.addEventListener('mouseleave', () => {
                // Reset connections
                connectionLines.forEach(line => {
                    line.style.opacity = '';
                    line.style.animation = '';
                });

                // Reset cell animation
                cell.style.animation = '';
            });

            cell.addEventListener('click', () => {
                // Create ripple effect
                const ripple = document.createElement('div');
                ripple.className = 'matrix-ripple';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(0, 255, 255, 0.3)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.left = '50%';
                ripple.style.top = '50%';
                ripple.style.width = '100px';
                ripple.style.height = '100px';
                ripple.style.marginLeft = '-50px';
                ripple.style.marginTop = '-50px';
                ripple.style.pointerEvents = 'none';
                
                cell.style.position = 'relative';
                cell.appendChild(ripple);

                // Remove ripple after animation
                setTimeout(() => {
                    if (ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple);
                    }
                }, 600);

                // Show detailed info
                this.showMatrixDetails(cellType);
            });
        });

        // Animate connection lines periodically
        setInterval(() => {
            connectionLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '0.8';
                    setTimeout(() => {
                        line.style.opacity = '0.3';
                    }, 1000);
                }, index * 500);
            });
        }, 5000);

        // Add CSS for animations
        this.addMatrixAnimations();
    }

    showMatrixDetails(cellType) {
        const details = {
            llms: {
                title: 'Current Market Analysis',
                content: 'Large Language Models and Machine Learning represent the current state of AI development. Market value: $50B+, 1000+ companies competing.',
                metrics: ['Market Cap: $50B+', 'Competitors: 1000+', 'Growth Rate: 25%', 'Maturity: High']
            },
            evolution: {
                title: 'Critical Transition Phase',
                content: 'The moment AGI achieves self-modification capability. Timeline: 2-5 years. Risk level: Extreme. This is where most will fail.',
                metrics: ['Timeline: 2-5 years', 'Success Rate: <5%', 'Risk Level: Extreme', 'Preparation: Critical']
            },
            asi: {
                title: 'Superintelligence Destination',
                content: 'Artificial Superintelligence - the end goal. Infinite value potential, but control becomes absolutely critical.',
                metrics: ['Value: Infinite', 'Control: Critical', 'Timeline: Unknown', 'Impact: Revolutionary']
            },
            us: {
                title: 'Our Strategic Position',
                content: 'ArtificialSuperIntelligence.Ai is already positioned at the destination. We\'re not racing to get there - we\'re already there, ready.',
                metrics: ['Status: Prepared', 'Advantage: First Mover', 'Readiness: 100%', 'Position: Optimal']
            }
        };

        const detail = details[cellType];
        if (detail) {
            // Create modal or update existing display
            console.log(`${detail.title}: ${detail.content}`);
            // You can expand this to show a modal or update a detail panel
        }
    }

    addMatrixAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes matrixCellPulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
            
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            @keyframes connectionFlow {
                0%, 100% { 
                    background: linear-gradient(90deg, var(--tron-cyan), var(--tron-blue), var(--tron-cyan));
                }
                50% { 
                    background: linear-gradient(90deg, var(--tron-blue), var(--tron-cyan), var(--tron-blue));
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// CSS animations for scroll-triggered effects
const style = document.createElement('style');
style.textContent = `
    .section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .section.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .content-text {
        opacity: 0;
        transform: translateX(-30px);
        transition: all 0.8s ease;
    }
    
    .content-text.animate-in {
        opacity: 1;
        transform: translateX(0);
    }
    
    .content-visual {
        opacity: 0;
        transform: translateX(30px);
        transition: all 0.8s ease;
    }
    
    .content-visual.animate-in {
        opacity: 1;
        transform: translateX(0);
    }
    
    .timeline-item {
        opacity: 0;
        transform: translateX(-20px);
        transition: all 0.6s ease;
    }
    
    .timeline-item.visible {
        opacity: 1;
        transform: translateX(0);
    }
    
    .intersection-diagram {
        opacity: 0;
        transform: scale(0.8);
        transition: all 1s ease;
    }
    
    .intersection-diagram.visible {
        opacity: 1;
        transform: scale(1);
    }
    
    .nav {
        transition: transform 0.3s ease, background-color 0.3s ease;
    }
    
    .nav.scrolled {
        background: rgba(10, 10, 10, 0.98);
        backdrop-filter: blur(25px);
    }
    
    .tagline-item {
        transition: all 0.3s ease;
    }
    
    .tagline-item.selected {
        border-color: var(--accent-primary);
        background: rgba(0, 255, 136, 0.05);
        color: var(--accent-primary);
        box-shadow: 0 0 25px rgba(0, 255, 136, 0.3);
    }
    
    .code-line {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .code-line.typing {
        opacity: 1;
    }
`;

document.head.appendChild(style);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FrontierApp();
});

// Add some additional interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Dynamic cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(0, 255, 136, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Hide cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .tagline-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = 'rgba(0, 255, 136, 0.8)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'rgba(0, 255, 136, 0.5)';
        });
    });
});
