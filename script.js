document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });
});
