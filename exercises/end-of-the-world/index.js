let button = document.getElementById('start');
let display = document.getElementById('display');
let clock = 20;
let countdownId = 0;

button.onclick = function () {
    countdownId = setInterval("countdown()", 1000);
    display.style.color = 'red';
}

function countdown() {
    if(clock > 0) {
        clock = clock -1;
        display.innerHTML = '00:00:' + String(clock);
    } else {
        clearInterval(countdownId);
        display.style.fontSize = "60px";
        display.innerHTML = 'The end of the world has come upon us.'
    }
}