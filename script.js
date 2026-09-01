  // Animate meter bars when they scroll into view
  const meters = document.querySelectorAll('.meter-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.dataset.pct + '%';
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  meters.forEach(m => observer.observe(m));
