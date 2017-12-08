// Return true if the given string contains between 1 and 3 'e' chars.

var stringE = function(str){ 
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if(str[i] === 'e' || str[i] === 'E') {
            count++;
        } 
    }
    if (count >= 1 && count <=3) {
        return true;
    }
    return false;
}

console.log(stringE("I eat elephants all day"));

// Given a non-empty string and an int N, return the string made starting with char 0,
// and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on.
// N is 1 or more.

var everyNth = function(str, n){ 
    var newStr = '';
    for(var i = 0; i < str.length; i+=n) {
        newStr += str[i];
    }
    return newStr;
}

console.log(everyNth("abcdefg", 2));

// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
// each is smiling. We are in trouble if they are both smiling or if neither of
// them is smiling. Return true if we are in trouble.

var monkeyTrouble = function(aSmile, bSmile) { 
    if (aSmile === bSmile) {
        return true;
    }
    return false;
}

console.log(monkeyTrouble(true, true));

// We have a loud talking parrot. The 'hour' parameter is the current hour
// time in the range 0..23. We are in trouble if the parrot is talking and
// the hour is before 7 or after 20.
// Return True if we are in trouble.

var parrotTrouble=function(talking, hour) { 
    if(hour > 23) {
        return "Invalid hour";
    } else if((hour < 7 || hour > 20) && talking === true){
        return true;
    } else {
        return false;
    }
}

console.log(parrotTrouble(true, 25));

// Given three int values, a b c, return the largest.

var intMax = function(a, b, c) { 
	var largest;
  	if (a > b && a > c) {
    	largest = a;
    } else if (b > a && b > c) {
      largest = b;
    } else if (c > a && c > b) {
      largest = c;
    }
  return largest;
}

console.log(intMax(1, 2, 3));

// Given 2 positive int values, return the larger value that is in the range 10..20
// inclusive, or return 0 if neither is in that range.

var max1020 = function(a, b) { 
    if ((a >= 10 && a <= 20) && (b >= 10 && b <= 20)) {
       return a > b ? a : b;
    } else if ((a >= 10 && a <= 20) && !(b >= 10 && b <= 20)) {
        return a;
    } else if (!(a >= 10 && a <= 20) && (b >= 10 && b <= 20)){
        return b;
    } else {
        return 0;
    }
}

console.log(max1020(15,22));

// Given a string, return a new string where the last 3 chars are now in upper case.
// If the string has less than 3 chars, uppercase whatever is there. Note that
// str.toUpperCase() returns the uppercase version of a string.

var endUp=function(str) { 
    if (str.length > 2) {
        var uppercase = str.slice(-3).toUpperCase();
        return str.slice(0, -3) + uppercase;
    } else {
        return str.toUpperCase();
    }
}

console.log(endUp("hello world"));

// Given a string name, e.g. 'bob', return a greeting of the form 'Hello Bob!.

var helloName = function(name) { 
    var newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return "Hello " + newName + "!";
}

console.log(helloName("bob"));

// Given a string, return a new string where the first and last chars
// have been exchanged.

var frontBack = function(str) { 
    return str[str.length-1] + str.slice(1, -1) + str[0];
}

console.log(frontBack('abcdefg'));

function centuryFromYear(year) {
    var str = String(year);
    if (str.length === 4 && str.slice(-2) === '00') {
        return Number(str.slice(0, 2));
    } else if (str.length === 4) {
        return Number(str.slice(0,2)) + 1;
    } else if (str.length === 3 && str.slice(1) === '00') {
        return Number(str[0]);
    } else if (str.length === 3) {
        return Number(str[0]) + 1;
    } else if (str.length < 3) {
        return 1;
    }   
}


console.log(centuryFromYear(2000));
console.log(centuryFromYear(2001));
console.log(centuryFromYear(200));
console.log(centuryFromYear(201));

