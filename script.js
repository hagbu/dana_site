const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'פתיחת תפריט' : 'סגירת תפריט');
  mainNav.classList.toggle('open', !isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'פתיחת תפריט');
    mainNav.classList.remove('open');
  });
});

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');

document.querySelectorAll('[data-image]').forEach((item) => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = item.dataset.caption || 'תמונה מוגדלת';
    lightboxCaption.textContent = item.dataset.caption || '';
    lightbox.showModal();
  });
});

lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

document.querySelector('#year').textContent = new Date().getFullYear();
