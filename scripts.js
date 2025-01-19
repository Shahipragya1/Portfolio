// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle mobile navigation menu
const navToggle = document.getElementById('menu-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});

// Close menu when a link is clicked
document.querySelectorAll('.navbar-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('show');
  });
});

// Toggle skills sections
document.querySelectorAll('.skills__header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.parentElement;
    content.classList.toggle('skills__open');
    content.classList.toggle('skills__close');
  });
});