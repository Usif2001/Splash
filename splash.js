// splash.js

document.addEventListener('DOMContentLoaded', () => {
  // Remove any existing splash particles immediately
  document.querySelectorAll('.splash-particle').forEach(el => el.remove());
});

// Mouse trail effect (keep!)
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

// Keep the keyframes for the trail
const style = document.createElement('style');
style.textContent = `
  @keyframes trailFade {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0); }
  }
`;
document.head.appendChild(style);


    // Partner marquee animation
    const marquee = document.querySelector('.marquee-track');
    if (marquee) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    marquee.style.animation = 'scrollPartners 30s linear infinite';
                } else {
                    marquee.style.animation = 'none';
                }
            },
            { threshold: 0.1 }
        );

        const partnersSection = document.querySelector('#partnersMarquee');
        if (partnersSection) {
            observer.observe(partnersSection);
        }
    }



