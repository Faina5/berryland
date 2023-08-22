const menub = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menub?.addEventListener('click', () => {
    menu.classList.toggle('menu__list-item--active');
  });


  