// Theme toggle: remembers the choice, otherwise follows the system setting.
const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');

function currentTheme() {
  if (root.dataset.theme) return root.dataset.theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

themeToggle.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
});

// Mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');

function setMenu(open) {
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  navLinks.classList.toggle('open', open);
}

navToggle.addEventListener('click', () => setMenu(navToggle.getAttribute('aria-expanded') !== 'true'));
navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

// Header border once the page is scrolled
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Project links that aren't live yet (data-live="false") can't be clicked or focused.
document.querySelectorAll('.project-link[data-live="false"]').forEach((a) => {
  a.removeAttribute('href');
  a.setAttribute('aria-disabled', 'true');
  a.setAttribute('aria-label', `${a.textContent.trim()} (coming soon)`);
});

document.getElementById('year').textContent = new Date().getFullYear();
