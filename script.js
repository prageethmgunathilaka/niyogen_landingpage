(function () {
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const yearEl = document.getElementById('year');

  // Year in footer
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Theme handling with localStorage preference
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark' || storedTheme === 'light') {
    html.setAttribute('data-theme', storedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
  }

  const applyThemeIcon = () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (themeToggle) themeToggle.textContent = isDark ? '☀️' : '🌙';
  };
  applyThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      applyThemeIcon();
    });
  }

  // Mobile nav toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    // Close when clicking a link (mobile)
    navMenu.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.closest('a')) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll for internal links
  document.addEventListener('click', (e) => {
    const anchor = e.target && (e.target.closest('a[href^="#"]'));
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Make <details> behave like an accordion (optional)
  const faqs = document.querySelectorAll('.faq-item');
  faqs.forEach((d) => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        faqs.forEach((other) => { if (other !== d) other.removeAttribute('open'); });
      }
    });
  });
})();


