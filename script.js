'user strict';

const searchLink = document.querySelector('.nav-link__search');
const searchBox = document.querySelector('.search__details');

const body = document.querySelector('body');

searchLink.addEventListener('mouseover', function () {
  searchBox.classList.remove('hide');
  searchBox.classList.add('show');
});

body.addEventListener('click', function () {
  searchBox.classList.remove('show');
  searchBox.classList.add('hide');
});
