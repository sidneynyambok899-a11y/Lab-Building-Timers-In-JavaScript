
function countdownTimer(duration, interval = 1000) {
  let timeLeft = duration;

  const timerId = setInterval(() => {
    console.log(timeLeft);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerId);
    }
  }, interval);

  return timerId;
}

module.exports = { countdownTimer }; // export
