document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const header = document.querySelector('.site-header');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll-triggered reveal: each top-level block in the page
  // (headings, paragraphs, lists, quotes) fades and slides into
  // view the first time it crosses into the viewport.
  if (content) {
    const blocks = Array.from(content.children);

    blocks.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 5) * 45 + 'ms';
    });

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      blocks.forEach(el => el.classList.add('in-view'));
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

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
