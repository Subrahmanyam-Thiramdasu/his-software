const fs = require('fs');
const path = require('path');

const baseDir = 'd:/Work/his/caretechpro';

// 1. Fix animations.js
let animJs = fs.readFileSync(path.join(baseDir, 'js', 'animations.js'), 'utf8');

// Replace standard scroll reveals with a more robust pattern
// Sometimes trigger names or positions cause issues. Let's make sure they trigger.
animJs = animJs.replace(/gsap\.from\(/g, 'gsap.fromTo(');

// Now we need to fix the syntax because fromTo takes two objects.
// Since that's complex with regex, let's just rewrite the ScrollTrigger part of animations.js entirely.
const newAnimJs = `document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Hero
  const heroTl = gsap.timeline();
  heroTl.from('.hero .eyebrow', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0.2)
        .from('.hero h1', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.4)
        .from('.hero p', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.6)
        .from('.highlight-item', { y: 15, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, 0.8)
        .from('.hero-buttons', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, 1.0)
        .from('.dashboard-mockup', { y: 50, scale: 0.95, opacity: 0, duration: 1.2, ease: 'power3.out' }, 1.2)
        .from('.mobile-mockup', { x: -30, y: 30, opacity: 0, duration: 1, ease: 'back.out(1.5)' }, 1.5);

  gsap.to('.dashboard-mockup', { y: '-=15', duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' });
  gsap.to('.mobile-mockup', { y: '-=10', duration: 2.5, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 0.5 });

  // A helper function for standard scroll reveals to ensure they work
  const reveal = (selector, trigger, y = 30, stagger = 0.1) => {
    gsap.fromTo(selector, 
      { y: y, opacity: 0 },
      {
        scrollTrigger: { trigger: trigger, start: 'top 85%', toggleActions: 'play none none none' },
        y: 0, opacity: 1, duration: 0.8, stagger: stagger, ease: 'power3.out'
      }
    );
  };

  reveal('.stat-item', '.trust-stats', 30, 0.1);
  reveal('.products-section .eyebrow, .products-section h2, .products-section p', '.products-section', 30, 0.1);
  reveal('.product-card', '.products-section', 50, 0.15); // Trigger on section instead of grid
  
  reveal('#his-software .eyebrow, #his-software h2, #his-software p, .feature-list li, #his-software .btn', '#his-software', 30, 0.1);
  
  gsap.fromTo('.showcase-visual-container', 
    { x: 50, opacity: 0 },
    { scrollTrigger: { trigger: '#his-software', start: 'top 75%' }, x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
  );

  reveal('.mockup-main', '#websites', 40, 0);
  
  gsap.fromTo('.mockup-left', 
    { x: -40, opacity: 0 },
    { scrollTrigger: { trigger: '#websites', start: 'top 75%' }, x: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
  );
  gsap.fromTo('.mockup-right', 
    { x: 40, opacity: 0 },
    { scrollTrigger: { trigger: '#websites', start: 'top 75%' }, x: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: 'power3.out' }
  );

  reveal('#industries .eyebrow, #industries h2', '#industries', 30, 0.1);
  reveal('.industry-card', '#industries', 40, 0.1);

  reveal('#process .eyebrow, #process h2', '#process', 30, 0.1);
  gsap.fromTo('.process-line',
    { scaleX: 0 },
    { scrollTrigger: { trigger: '#process', start: 'top 75%' }, scaleX: 1, transformOrigin: 'left center', duration: 1.5, ease: 'power3.inOut' }
  );
  reveal('.process-step', '#process', 30, 0.2);

  reveal('#testimonials .eyebrow, #testimonials h2', '#testimonials', 30, 0.1);
  reveal('.testimonial-card', '#testimonials', 40, 0.15);
  
  // Refresh ScrollTrigger after a slight delay to ensure all DOM is settled (icons, mockups, etc)
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
});
`;

fs.writeFileSync(path.join(baseDir, 'js', 'animations.js'), newAnimJs, 'utf8');

// 2. Fix Lucide icons in index.html footer
let indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
indexHtml = indexHtml.replace('<i data-lucide="facebook" size="18"></i>', 'Facebook');
indexHtml = indexHtml.replace('<i data-lucide="twitter" size="18"></i>', 'Twitter');
indexHtml = indexHtml.replace('<i data-lucide="linkedin" size="18"></i>', 'LinkedIn');
indexHtml = indexHtml.replace('<i data-lucide="instagram" size="18"></i>', 'Instagram');
fs.writeFileSync(path.join(baseDir, 'index.html'), indexHtml, 'utf8');

console.log('Animation triggers fixed and icons updated.');
