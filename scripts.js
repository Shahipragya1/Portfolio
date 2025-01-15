// scripts.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle mobile navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
  navbar.classList.toggle('navbar-open');
});

document.querySelectorAll('.skills__header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.parentElement;
    content.classList.toggle('skills__open');
    content.classList.toggle('skills__close');
  });
});
