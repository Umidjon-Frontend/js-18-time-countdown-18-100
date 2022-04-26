let time = 60; // time in minutes
let mainSec = time * 60;

const countdown = document.querySelector("#countdown");

function startCountdown() {
  let timer = setInterval(() => {
    if (mainSec <= 0) {
      clearInterval(timer);
      countdown.innerHTML = `Time finished`;
    } else {
      mainSec--;
      let hour = Math.floor(mainSec / 3600) % 24;
      let minut = Math.floor(mainSec / 60);
      let secund = Math.floor(mainSec % 60);
      countdown.innerHTML = `Time: ${format(hour)}:${format(minut)}:${format(
        secund
      )}`;
    }
  }, 1000);
}

function format(t) {
  return t < 10 ? `0${t}` : t;
}

startCountdown();
