const orderButton = document.querySelector('.card-product__button');
const modal = document.querySelector('.modal');
const form = document.querySelector('.form-sizes');

const header = document.querySelector('.header');
const buttonMenu = document.querySelector('.header__toggle');
const mainNavContainer = document.querySelector('.main-nav__container');

if (form) {
  orderButton.addEventListener('click', function () {
    modal.classList.add('modal--show');
  });

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal--show');
  });
}

header.classList.remove('header--no-js');
header.classList.add('header--closed');
mainNavContainer.classList.add('main-nav__container--closed');

buttonMenu.addEventListener('click', function() {
  header.classList.toggle('header--closed');
  header.classList.toggle('header--opened');
  mainNavContainer.classList.toggle('main-nav__container--closed');
  mainNavContainer.classList.toggle('main-nav__container--opened');
});
