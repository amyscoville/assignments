let button = document.getElementById('click-me');
let display = document.getElementById('display');
let reset = document.getElementById('reset');
let countdownDisplay = document.getElementById('countdown');

let counter = Number(localStorage.getItem('counter')) || 0;

window.onload = function() {
    display.innerHTML = counter;
}

button.onclick = function () {
    if(counter === 0) {
        countdownId = setInterval("countdown()", 1000);
        countdownDisplay.innerHTML = `${countdownTime} seconds left!`;
    }
    counter++;
    console.log(counter);
    display.innerHTML = counter;
    localStorage.setItem('counter', counter);
};

reset.onclick = function () {
    localStorage.clear();
    counter = 0;
    countdownTime = 10;
    display.innerHTML = 0;
    clearInterval(countdownId);
    button.disabled = false;
}

let countdownTime = 10;

function countdown() {
    if(countdownTime > 0) {
        countdownTime--;
        countdownDisplay.innerHTML = `${countdownTime} seconds left!`;
    } else {
        clearInterval(countdownId);
        button.disabled = true;
        countdownDisplay.innerHTML = `You're out of time! Click "Reset" to begin again.`;
    }
}