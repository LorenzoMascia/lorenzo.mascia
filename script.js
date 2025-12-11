// Enhanced interactions for the personal website

document.addEventListener('DOMContentLoaded', () => {
    initTimelineInteractions();
    initProjectsObserver();
    initSmoothScroll();
    addCursorEffect();
});

// Timeline interactions
function initTimelineInteractions() {
    const timelinePoints = document.querySelectorAll('.timeline-point');
    const timelineLabels = document.querySelectorAll('.timeline-label');

    timelinePoints.forEach((point, index) => {
        point.addEventListener('mouseenter', () => {
            timelineLabels[index].style.transform = 'scale(1.15)';
            timelineLabels[index].style.color = 'var(--color-accent)';
        });

        point.addEventListener('mouseleave', () => {
            timelineLabels[index].style.transform = 'scale(1)';
            timelineLabels[index].style.color = '';
        });

        // Click interaction
        point.addEventListener('click', () => {
            // Remove active class from all points
            timelinePoints.forEach(p => p.classList.remove('active'));
            timelineLabels.forEach(l => l.classList.remove('active'));

            // Add active class to clicked point
            point.classList.add('active');
            timelineLabels[index].classList.add('active');

            // Create ripple effect
            createRipple(point);
        });
    });
}

// Create ripple effect on timeline points
function createRipple(element) {
    const ripple = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    const cx = element.getAttribute('cx');
    const cy = element.getAttribute('cy');

    ripple.setAttribute('cx', cx);
    ripple.setAttribute('cy', cy);
    ripple.setAttribute('r', '8');
    ripple.setAttribute('fill', 'none');
    ripple.setAttribute('stroke', 'var(--color-accent)');
    ripple.setAttribute('stroke-width', '2');
    ripple.style.opacity = '0.8';

    element.parentNode.appendChild(ripple);

    // Animate ripple
    let radius = 8;
    const animate = () => {
        radius += 2;
        ripple.setAttribute('r', radius);
        ripple.style.opacity = parseFloat(ripple.style.opacity) - 0.05;

        if (parseFloat(ripple.style.opacity) > 0) {
            requestAnimationFrame(animate);
        } else {
            ripple.remove();
        }
    };

    requestAnimationFrame(animate);
}

// Intersection Observer for projects animation
function initProjectsObserver() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
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
}

// Cursor effect (optional, subtle)
function addCursorEffect() {
    let mouseX = 0;
    let mouseY = 0;
    let ballX = 0;
    let ballY = 0;
    let speed = 0.2;

    // Create cursor follower element
    const cursorBall = document.createElement('div');
    cursorBall.className = 'cursor-ball';
    cursorBall.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--color-accent);
        opacity: 0.3;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.2s ease;
        display: none;
    `;
    document.body.appendChild(cursorBall);

    // Show cursor ball only on larger screens
    if (window.innerWidth > 768) {
        cursorBall.style.display = 'block';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            cursorBall.style.display = 'block';
        } else {
            cursorBall.style.display = 'none';
        }
    });

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .timeline-point, .project-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorBall.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursorBall.style.transform = 'scale(1)';
        });
    });

    function animate() {
        // Smooth following effect
        ballX += (mouseX - ballX) * speed;
        ballY += (mouseY - ballY) * speed;

        cursorBall.style.left = ballX - 10 + 'px';
        cursorBall.style.top = ballY - 10 + 'px';

        requestAnimationFrame(animate);
    }

    animate();
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s infinite';

    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
        document.body.style.animation = '';
        style.remove();
    }, 5000);
}
