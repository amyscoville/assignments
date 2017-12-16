// let counter = 0;

// function add() {
//     let beginningOfTime = new Date(counter);
//     let minutes = beginningOfTime.getUTCMinutes();
//     let seconds = beginningOfTime.getUTCSeconds();
//     let mills = beginningOfTime.getUTCMilliseconds();
//     console.log(minutes + ":" + seconds + ":" + mills);
//     counter += 10;
//     if (counter === 60000) {
//         clearInterval(timer);
//     }
// }

// let timer = setInterval(add, 10);

let counter = 20;

function countdown() {
    let div = document.getElementById('display');
    div.innerHTML = ;
    counter--;
}

let countdownTimer = setInterval(countdown, )