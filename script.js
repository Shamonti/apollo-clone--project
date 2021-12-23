'user strict';

const jobList = document.querySelector('.jobList');
const body = document.querySelector('body');

const inputJob = document.getElementById('job');

inputJob.addEventListener('keyup', function () {
  jobList.classList.remove('hide');
  jobList.classList.add('show');
});

body.addEventListener('click', function () {
  jobList.classList.remove('show');
  jobList.classList.add('hide');
});
