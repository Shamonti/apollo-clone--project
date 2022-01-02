//SHOW USER MENU ON BUTTON CLICK
const userBtn = document.querySelector('.user-btn');
const userMenu = document.querySelector('.user-div');
let timesClicked = 0;

userBtn.addEventListener('click', function () {
  timesClicked++;

  if (timesClicked % 2 == 0) {
    userMenu.classList.remove('show-block');
    userMenu.classList.add('hide');
  } else {
    userMenu.classList.remove('hide');
    userMenu.classList.add('show-block');
  }
});
