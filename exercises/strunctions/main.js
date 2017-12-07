/* "It's like a function but for strings!" - Dan Hitt

Let's Practice String Methods.

Implement all of the listed String Methods below using at least 3 unique Functions.

String Methods

-.concat()
.indexOf()
-.lastIndexOf()
-.match()
-.replace()
-.slice()
-.split()
-.toLowerCase()
-.toUpperCase()
-.substr()
*/ 

function combineStrings(str1, str2) {
    return str1.concat(str2);
}

console.log(combineStrings("happy", "day"));

function fixName(str){
    var lowerCaseStr = str.toLowerCase();
    var arr = lowerCaseStr.split('');
    var firstLetter = arr[0].toUpperCase();
    var remainingLetters = arr.slice(1).join('');
    return firstLetter.concat(remainingLetters);
}

console.log(fixName("sAllY"));

function findLastInstance(str, character) {
    return str.lastIndexOf(character);
}

console.log(findLastInstance("Happy day", "a"));

function sliceStr(str, start, stop) {
    return str.slice(start, stop);
}

console.log(sliceStr("Hello world", 5, 11));

function prank(str, wordToReplace, gagWord) {
    return str.replace(wordToReplace, gagWord);
}

console.log(prank("I love dogs", "I", "Goose"));

function getItem(str, start, end) {
    return str.substring(start, end);
}

console.log(getItem("socksshoescoat", 5, 10));

function match(str, regex) {
    return str.match(regex);
}

console.log(match("Ben", /Ben/));

function findLocation(str, char) {
    return str.indexOf(char);
}

console.log(findLocation("Hello world", "world"));