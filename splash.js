// splash.js

document.addEventListener('DOMContentLoaded', () => {
  // Remove any existing splash particles immediately
  document.querySelectorAll('.splash-particle').forEach(el => el.remove());
});






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
    const animateParagraphs = document.querySelectorAll('.animate-words');

  animateParagraphs.forEach(paragraph => {
    const words = paragraph.innerHTML.split(/(\s+|<br>)/g); // include spaces and <br>
    paragraph.innerHTML = words.map((word, i) => {
      if (word === '<br>') return '<br>';
      if (word.trim() === '') return word; // keep spaces as is
      return `<span style="animation-delay:${i * 0.06 + 1}s">${word}</span>`;
    }).join('');
  });

// Show CTA button after 7 seconds
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var cta = document.querySelector('.cta-delayed');
    if (cta) {
      cta.style.opacity = '1';
      cta.style.pointerEvents = 'auto';
      cta.style.transition = 'opacity 0.7s';
    }
  }, 7000); // 1000 is 1 sec 
});

// === About Section Animations ===
function animateOnScroll() {
  const animatedElements = document.querySelectorAll('.fade-in, .about-achieve-item, .about-achieve-title');
  let delay = 0;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.animationDelay = `${delay}s`;
        el.classList.add('animated-element');
        observer.unobserve(el);
        delay += 0.3; // spacing between each animation
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', animateOnScroll);

