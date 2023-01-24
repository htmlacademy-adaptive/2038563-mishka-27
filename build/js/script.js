const orderButton = document.querySelector('.card-product__button');
const modal = document.querySelector('.modal');
const form = document.querySelector('.form-sizes');

orderButton.addEventListener('click', function(){
  modal.classList.add('modal--show');
});

form.addEventListener('submit', function(evt){
  evt.preventDefault();
  modal.classList.remove('modal--show');
});
