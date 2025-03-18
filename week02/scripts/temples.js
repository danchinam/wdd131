const menu = document.querySelector('nav ul');
const menuBtn = document.querySelector('.menu-open');
const closeBtn = document.querySelector('.menu-close');

menuBtn.addEventListener('click', () => {
  menu.classList.add('open')
})