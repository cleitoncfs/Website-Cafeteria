// script.js
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');

  menuToggle.addEventListener('click', () => {
    navMobile.classList.toggle('active');
  });
});
