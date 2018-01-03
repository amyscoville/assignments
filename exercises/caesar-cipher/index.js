const ask = require('readline-sync');

let text = ask.question('Enter the text you would like to encode');
let shift = ask.question('Enter a number');

let output = '';
let regex = /[A-Z]/;
text = text.toUpperCase();
shift = Math.round(shift % 26);
console.log('shift:', shift);

for(let i = 0; i < text.length; i++) {
    let newCharCode = text.charCodeAt(i) + shift;
    if(regex.test(text[i])) {
        if(newCharCode > 90) {
            let diff = newCharCode - 90;
            newCharCode = 64 + diff;
        }
        output += String.fromCharCode(newCharCode);
    } else {
        output += text[i];
    }
}
console.log('Here is your encoded message: ', output);

