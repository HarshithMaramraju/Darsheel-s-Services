// Countdown Timer Script
let countdown = 600; // 10 minutes in seconds

function updateTimer() {
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  countdown--;

  if (countdown < 0) {
    clearInterval(timerInterval);
  }

}

const timerInterval = setInterval(updateTimer, 1000);

// Slide-in Form Script
setTimeout(() => {
  document.querySelector('.slide-in-form').style.display = 'block';
}, 15000);

document.getElementById('signupButton').addEventListener('click', () => {
  document.querySelector('.slide-in-form').style.display = 'block';
});
