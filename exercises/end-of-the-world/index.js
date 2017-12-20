let hours = '00';
let minutes = '01';
let seconds = '05';
let button = document.getElementById('start');
let display = document.getElementById('display');

function convertInt(int){
    str = String(int);
    if(str.length < 2) {
        return '0' + str;
    }
    return str;
}

button.onclick = function () {
    display.innerHTML = `${hours}:${minutes}:${seconds}`;
    countdownId = setInterval("countdown()", 1000);
    display.style.color = 'red';
}

function countdown() {
    hours = +hours;
    minutes = +minutes;
    seconds = +seconds;
    if(seconds > 0 || minutes > 0 || hours > 0) {
        if(seconds > 0) {
            seconds = seconds - 1;
        } else if (seconds === 0 && minutes > 0) {
            seconds = 59;
            minutes = minutes - 1;
        } else if (seconds === 0 && minutes === 0 && hours >= 1) {
            seconds = 59;
            minutes = 59;
            hours = hours - 1;
        }
        display.innerHTML = `${convertInt(hours)}:${convertInt(minutes)}:${convertInt(seconds)}`;
    } else if (seconds === 0 && minutes === 0 && hours === 0) {
        clearInterval(countdownId);
        display.style.fontSize = "60px";
        display.innerHTML = 'The end of the world has come upon us.'
    }
}
