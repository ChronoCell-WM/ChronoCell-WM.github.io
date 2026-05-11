// ChronoCell-WM · small interactions

// Mobile nav toggle
const nav = document.getElementById('nav');
const toggle = document.querySelector('.nav__toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // Close on link click (mobile)
  document.querySelectorAll('.nav__links a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('is-open'))
  );
}

// Reveal on scroll (respects prefers-reduced-motion)
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const targets = document.querySelectorAll(
    '.card, .pillar, .pi, .timeline > li, .resource, .flow, .prose, .section__lede, .display, .h-display'
  );
  targets.forEach(t => t.classList.add('reveal'));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(t => io.observe(t));
}
