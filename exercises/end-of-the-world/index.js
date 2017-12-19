// let button = document.getElementById('start');
// let display = document.getElementById('display');
// let clock = 20;
// let countdownId = 0;

// button.onclick = function () {
//     countdownId = setInterval("countdown()", 1000);
//     display.style.color = 'red';
// }

// function countdown() {
//     if(clock > 0) {
//         clock = clock -1;
//         display.innerHTML = '00:00:' + String(clock);
//     } else {
//         clearInterval(countdownId);
//         display.style.fontSize = "60px";
//         display.innerHTML = 'The end of the world has come upon us.'
//     }
// }

let form = document.getElementById('myForm');
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let button = document.getElementById('start');
let display = document.getElementById('display');

button.onclick = function () {
    if(days.length < 2) {
        days = '0' + days;
    if (hours.length < 2) {
        hours = '0' + hours;
    } 
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    display.innerHTML = `${+days}:${+hours}:${+minutes}`;
    countdownId = setInterval("countdown()", 1000);
    display.style.color = 'red';
}

function countdown() {
    minutes = +minutes;
    hours = +hours;
    days = +days;
    if(minutes > 0) {
        minutes = minutes - 1;
        display.innerHTML = `${days}:${hours}:${minutes}`;
    } else if (minutes === 0) {
        
    }
    // } else {
    //     clearInterval(countdownId);
    //     display.style.fontSize = "60px";
    //     display.innerHTML = 'The end of the world has come upon us.'
    // }
}