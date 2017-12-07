// The square's color will change as follows:

// Blue when the mouse hovers over the square
// Red when the mouse button is held down over the square
// Yellow when the mouse button is let go over the square
// Green when the mouse is double clicked in the square
// Orange when the mouse scroll is used somewhere in the window (not just over the square).
// You should also be able to press the first letter of the above colors and have the box change to that color. 

var square = document.getElementById('square');

square.onmouseenter = function(){
    square.style.backgroundColor = 'blue';
}

square.onmousedown = function() {
    square.style.backgroundColor = 'red';
}

square.onmouseup = function() {
    square.style.backgroundColor = 'yellow';
}

square.oncontextmenu = function() {
    square.style.backgroundColor = 'green';
}

window.onwheel = function() {
    square.style.backgroundColor = 'orange';
}

window.onkeypress = function(event) {
    console.log(event);
    if(event.keyCode === 121) {
        square.style.backgroundColor = 'yellow';
    } else if (event.keyCode === 114) {
        square.style.backgroundColor = 'red';
    } else if (event.keyCode === 98) {
        square.style.backgroundColor = 'blue';
    } else if (event.keyCode === 103) {
        square.style.backgroundColor = 'green';
    } else if (event.keyCode === 111) {
        square.style.backgroundColor = 'orange';
        
    }
}