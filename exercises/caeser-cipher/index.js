const ask = require('readline-sync');

let text = ask.question('Enter the text you would like to encode');
let shift = ask.question('Enter a number between 1 and 25');

let output = '';
let regex = /[A-Z]/;
text = text.toUpperCase();

for(let i = 0; i < text.length; i++) {
    let newCharCode = Number(text.charCodeAt(i)) + Number(shift);
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

