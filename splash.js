// splash.js

document.addEventListener('DOMContentLoaded', () => {
    // Mouse trail effect
    document.addEventListener('mousemove', function(e) {
      const trail = document.createElement('div');
      trail.style.position = 'fixed';
      trail.style.width = '10px';
      trail.style.height = '10px';
      trail.style.borderRadius = '50%';
      trail.style.background = `linear-gradient(45deg, #00F5FF, #EA047E, #FCE700)`;
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      trail.style.pointerEvents = 'none';
      trail.style.zIndex = '999';
      trail.style.animation = 'trailFade 1s ease-out forwards';
      document.body.appendChild(trail);
  
      setTimeout(() => {
        trail.remove();
      }, 1000);
    });
  
    // Inject keyframes for fade effect
    const style = document.createElement('style');
    style.textContent = `
      @keyframes trailFade {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
      }
    `;
    document.head.appendChild(style);
  
    // Parallax splash particles (if present)
    document.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const particles = document.querySelectorAll('.splash-particle');
      particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.5;
        particle.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  
    // Random color change for particles
    setInterval(() => {
      const particles = document.querySelectorAll('.splash-particle');
      const colors = ['#00F5FF', '#EA047E', '#FCE700', '#FF6D28'];
      particles.forEach(p => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        p.style.background = randomColor;
      });
    }, 3000);
  });
  