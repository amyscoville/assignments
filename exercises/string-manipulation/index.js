// Using the NodeJS package readline-sync, create an interactive program that asks you some personal information (name, age, favorite color, etc.) and reports back to you what you entered. Make sure to include the following string manipulations:

// Make one of the inputs all uppercase (i.e., given the string “hello” prints “HELLO”)
// Report back the number of characters in a given input
// Concatenate (add) two separate strings together
// Given a long message (more than twenty letters), return only the last half of the message
// Using the same long message (but without making the user type it in again), have your program print it to the terminal for the user to read again, but allow the user to tell your program where to begin typing from (i.e., which index to start from).
// Program specifications:

// You must use the readline-sync package.
// Make sure to store all input from the user in a variable using the question method of the readline-sync package.
// Use special string characters such as the newline character \n, or the tab character \t to make your output more readable.

//var ask = require('readline-sync');  
// console.log('Hello! My name is Betty. Help me get to know you!\n');  
// var firstName = ask.question('What is your first name? '); 

var ask = require('readline-sync');

console.log('Hello, my name is Roger. I have some questions for you!\n'); 

var firstName = ask.question('What is your first name?');

console.log('Nice to meet you, ' + firstName + '!');

var surname = ask.question('What is your surname?');

console.log('I understand that your name is ' + firstName.toUpperCase() + ' ' + surname.toUpperCase() + '.');

var confirm = ask.keyInYN('Is this correct?');

if (confirm) {
    console.log('Great! Let\'s get to know each other better.');
} else {
    console.log('Oh, sorry, I must have misunderstood. Please start over.');
}

var description = ask.question('Please briefly describe yourself.');

if (description.length > 20) {
    newDescription = description.slice(description.length/2);
    console.log('Thanks for telling me a little about yourself. This is the info I have about you:\n' + newDescription);
} else {
    console.log('Thanks for telling me a little about yourself. This is the info I have about you:\n' + description);
}

var complete = ask.keyInYN('Is this information complete?');

if(complete) {
    console.log('Great! Thanks.');
} else {
    var length = description.length;
    console.log('I apologize, I\'ll print that again. The message is ' + length + ' characters long.');
    var index = ask.questionInt('At which character would you like me to begin printing?');
    console.log('Ok, here is your summary:\n' + description.slice(index-1));
}