//Write a function that accepts two numbers as parameters, and returns the sum.

function getSum(param1, param2) {
    return param1 + param2;
}

console.log("sum is ", getSum(2, 2));

//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

var getLargest = function(num1, num2, num3) {
    var largest;
    if (num1 > num2 && num1 > num3) {
        largest = num1;
    } else if (num2 > num1 && num2 > num3) {
        largest = num2;
    } else {
        largest = num3;
    }
    return largest;
}

console.log("largest number is ", getLargest(1, 2, 3));

//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log("The number is", evenOrOdd(3));

//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

var stringALing = function(str) {
    if (str.length <= 20) {
        return str + str;
    } else if (str.length > 20) {
        var half = str.length / 2;
        var newStr = str.slice(0, (half));
        return newStr;
    }
}

console.log(stringALing("abcdefghijklmnopqrstuvwxyz"));

//Optional Challenge
//Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.

function printFibonacci(n) {
    var sum = 0;
    var arr = [];
    for (var i = 0; i < n; i++) {
        if (i < 2) {
            arr.push(i);
            sum += i;
            console.log(i);
        } else {
            var add2 = arr[i-1] + arr[i-2];
            arr.push(add2);
            sum += add2;
            console.log(add2);
        }
    }
    return sum;
}

console.log("sum = ", printFibonacci(10));

//Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)
// (a * (x*x)) + (b * x) + c = 0

function solveQuadraticEquation(a, b, c) {
    var result1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    if(!result1 && !result2) {
        return "The resulting x values are imaginary numbers.";
    } else {
        return [result1, result2];
    }
}
console.log(solveQuadraticEquation(1, 7, 12));


// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.

function findMostUsedLetter(str) {
    var counts = {};
    var maxCountChar = '';
    var tieArr = [];
    for (var i = 0; i < str.length; i++) {
        if (counts[str[i]]) {
            counts[str[i]]++;
        } else {
            counts[str[i]] = 1;
        }
    }
    for (var character in counts) {
        if (maxCountChar === '' || counts[character] > counts[maxCountChar]) {
            maxCountChar = character;
            tieArr = [];
        } else if (counts[character] === counts[maxCountChar]) {
            tieArr.push(character);
        }
    }
    if (tieArr.length >= 1) {
        var tieArrStr = tieArr.join(', ');
        return "There was a tie between the following letters: " + maxCountChar + ", " + tieArrStr;
    } 
    return maxCountChar;
}

console.log("maxCount =", findMostUsedLetter("aabbccdd"));

