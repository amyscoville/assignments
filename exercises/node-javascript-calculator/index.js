// Your script must have:
// A function that adds two numbers and returns the result
// A function that multiplies two numbers and returns the result
// A function that divides two numbers and returns the result
// A function that subtracts two numbers and returns the result
// Each function will have 2 parameters, num1, num2
// On the console the prompt will print to the user:
// Please enter your first number (store that number)
// Please enter your second number (store that number)
// Please enter the operation to perform: add, sub, mul, div (then store the operation)
// Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
// You will then print to the console: The result is: [the result]


var ask = require('readline-sync');

var number1 = ask.questionInt('Please enter your first number:');
var number2 = ask.questionInt('Please enter your second number:');
var operations = ['add', 'subtract', 'multiply', 'divide'];
var index = ask.keyInSelect(operations, 'Please enter the operation to perform');
var requestedOperation = operations[index];

var result = function(num1, num2, operation) {
    switch(operation) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
    }
}

function add(num1, num2) {
   return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

console.log('The result is: ' + result(number1, number2, requestedOperation));