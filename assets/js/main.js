document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const header = document.querySelector('.site-header');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll-triggered reveal: each top-level block in the page fades
  // and slides into view as it enters the viewport, and fades back
  // out if scrolled past — headings float up from below, body
  // content alternates sliding in from the left and right.
  if (content) {
    const blocks = Array.from(content.children);

    blocks.forEach((el, i) => {
      const isHeading = /^H[1-4]$/.test(el.tagName);
      const direction = isHeading ? 'reveal-up' : (i % 2 === 0 ? 'reveal-left' : 'reveal-right');
      el.classList.add('reveal', direction);
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
    });

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      blocks.forEach(el => el.classList.add('in-view'));
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          entry.target.classList.toggle('in-view', entry.isIntersecting);
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

      blocks.forEach(el => observer.observe(el));
    }
  }

  // Header gains a hairline border once the page has scrolled a bit.
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});
