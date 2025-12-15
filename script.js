// Canvas Christmas Tree Background Animation
const arr = []; // tree particles
const c = document.querySelector("#c");
const ctx = c.getContext("2d");
const cw = (c.width = 4000);
const ch = (c.height = 4000);
const T = Math.PI * 2;
const m = { x: cw / 2, y: 0 }; // Fixed center position (no hover)

const arr2 = []; // snow particles
const c2 = document.querySelector("#c2");
const ctx2 = c2.getContext("2d");
c2.width = c2.height = 4000;

// Initialize tree particles
for (let i = 0; i < 999; i++) {
    arr.push({
        i: i,
        cx: cw / 2,
        cy: gsap.utils.mapRange(0, 999, 600, 3700, i),
        r: (i < 900) ? gsap.utils.mapRange(0, 999, 3, 770, i) : 50, // path radius
        dot: 9, // dot radius
        prog: 0.25,
        s: 1
    });

    const d = 99; // tree spin duration
    arr[i].t = gsap
        .timeline({ repeat: -1 })
        .to(arr[i], { duration: d, prog: "+=1", ease: "slow(0.3, 0.4)" })
        .to(arr[i], { duration: d / 2, s: 0.15, repeat: 1, yoyo: true, ease: "power3.inOut" }, 0)
        .seek(Math.random() * d);

    arr2.push({
        x: cw * Math.random(),
        y: -9,
        i: i,
        s: 3 + 5 * Math.random(),
        a: 0.1 + 0.5 * Math.random()
    });

    arr2[i].t = gsap
        .to(arr2[i], { ease: 'none', y: ch, repeat: -1 })
        .seek(Math.random() * 99)
        .timeScale(arr2[i].s / 700);
}

gsap.ticker.add(renderCanvas);

function renderCanvas() {
    ctx.clearRect(0, 0, cw, ch);
    ctx2.clearRect(0, 0, cw, ch);
    arr.forEach((c) => drawDot(c));
    arr2.forEach((c) => drawSnow(c));
}

ctx.fillStyle = ctx2.fillStyle = "#fff";
ctx.strokeStyle = "rgba(255,255,255,0.05)";
ctx.globalCompositeOperation = "lighter";

function drawDot(c) {
    const angle = c.prog * T;
    const vs = 0.2; // vertical scale of path
    const x = Math.cos(angle) * c.r + c.cx;
    const y = (Math.sin(angle) * c.r) * vs + c.cy;
    const d = Math.sqrt((x - m.x) ** 2 + (y - m.y) ** 2);
    const ms = gsap.utils.clamp(0.07, 1, d / cw);
    ctx.beginPath();
    ctx.arc(x, y, c.dot * c.s / 2 / ms, 0, T);
    ctx.fill();
    ctx.lineWidth = c.dot * c.s * 2 / ms;
    ctx.stroke();
}

function drawSnow(c) {
    const ys = gsap.utils.interpolate(1.3, 0.1, c.y / ch);
    ctx2.save();

    ctx2.beginPath();
    ctx2.translate(c.x, c.y);
    ctx2.rotate(50 * c.t.progress());
    ctx2.arc(
        gsap.utils.interpolate(-55, 55, c.i / 999),
        gsap.utils.interpolate(-25, 25, c.i / 999),
        c.s * ys, 0, T
    );
    ctx2.globalAlpha = c.a * ys;
    ctx2.fill();
    ctx2.restore();
}

// Intro animation
gsap.from(arr, { duration: 1, dot: 0, ease: 'back.out(9)', stagger: -0.0009 });
gsap.from(m, { duration: 1.5, y: ch * 1.2, ease: 'power2.inOut' });

// Enhanced interactions for the personal website

document.addEventListener('DOMContentLoaded', () => {
    initTimelineInteractions();
    initProjectsObserver();
    initSmoothScroll();
    addCursorEffect();

    // Start snow effect automatically
    startSnow();
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

// Parallax effect disabled for scroll snap sections
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     if (hero) {
//         hero.style.transform = `translateY(${scrolled * 0.3}px)`;
//         hero.style.opacity = 1 - (scrolled / 600);
//     }
// });

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

// Christmas Tree Snow Effect
let snowActive = false;
let snowflakes = [];

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.position = 'fixed';
    snowflake.style.top = '-10px';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
    snowflake.style.opacity = Math.random();
    snowflake.style.pointerEvents = 'none';
    snowflake.style.zIndex = '10000';
    snowflake.style.userSelect = 'none';

    document.body.appendChild(snowflake);

    const fallDuration = Math.random() * 3 + 2;
    const swayAmount = Math.random() * 100 - 50;

    const animation = snowflake.animate([
        {
            transform: 'translateY(0) translateX(0) rotate(0deg)',
            opacity: snowflake.style.opacity
        },
        {
            transform: `translateY(${window.innerHeight + 10}px) translateX(${swayAmount}px) rotate(360deg)`,
            opacity: 0
        }
    ], {
        duration: fallDuration * 1000,
        easing: 'linear'
    });

    animation.onfinish = () => {
        snowflake.remove();
        snowflakes = snowflakes.filter(s => s !== snowflake);
    };

    snowflakes.push(snowflake);
}

function startSnow() {
    if (snowActive) {
        // Stop snow
        snowActive = false;
        snowflakes.forEach(s => s.remove());
        snowflakes = [];
        return;
    }

    snowActive = true;

    // Create initial burst
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            if (snowActive) createSnowflake();
        }, i * 100);
    }

    // Continue creating snowflakes
    const interval = setInterval(() => {
        if (!snowActive) {
            clearInterval(interval);
            return;
        }
        createSnowflake();
    }, 200);

    // Auto-stop after 30 seconds
    setTimeout(() => {
        snowActive = false;
        clearInterval(interval);
        // Gradually remove snowflakes
        setTimeout(() => {
            snowflakes.forEach(s => s.remove());
            snowflakes = [];
        }, 5000);
    }, 30000);
}

// Snow effect is now automatically active on page load
