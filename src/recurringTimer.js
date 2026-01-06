
let recurringTimerId;

function recurringTimer(message, interval) {
  recurringTimerId = setInterval(() => {
    console.log(message);
  }, interval);
  return recurringTimerId; // returned 
}

function stopRecurringTimer() {
  clearInterval(recurringTimerId);
}

module.exports = { recurringTimer, stopRecurringTimer };
