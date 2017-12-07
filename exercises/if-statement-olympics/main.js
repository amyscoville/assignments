/*Preliminaries
Write an if statement that prints "is greater than" if 5 is greater than 3
Write an if statement that prints "is the length" if the length of "cat" is 3
Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.*/

if (5 > 3) {
    console.log("is greater than");
}

if ("cat".length === 3) {
    console.log("is the length");
}

if ("cat" === "dog") {
    console.log("cat is equal to dog");
} else {
    console.log("not the same");
}

/*Write an if statement that prints <theNameOfThePerson> + is allowed to go to the movie if they are old enough, 
and the opposite if they are not older than 18.*/
var person = {  
  name: "Bobby",
  age: 12
}

if (person.age > 18) {
    console.log(person.name + " is allowed to go to the movie.");
} else {
    console.log(person.name + " is not allowed to go to the movie.");
}

//Using that same object, only allow them into the movie if their name starts with "B"

if (person.name[0] === "B") {
    console.log(person.name + " is allowed to go to the movie.");
} else {
    console.log(person.name + " is not allowed to go to the movie.");
}

//Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.

if (person.name[0] === "B" && person.age > 18) {
    console.log(person.name + " is allowed to go to the movie.");
} else {
    console.log(person.name + " is not allowed to go to the movie.");
}

/*Silver Medal*/
//Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or 
//"abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.

if (1 === "1") {
    console.log("strict");
} else if (1 == "1") {
    console.log("loose");
} else {
    console.log("not equal at all");
}

//Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4
//OR!!! 3 * 4 is greater than 10 and 5 plus 10 is greater than 10.

if ((1 <= 2 && 2 <= 4) || (3*4 > 10 && 5 + 10 > 10)) {
    console.log("yes");
}

//Gold Medal
//1. Write an if statement that checks to see if "dog" is a string 

if (typeof "dog" === "string") {
    console.log("dog is a string");
}

//2. Write an if statement that checks to see if "true" is a boolean 

if (typeof true === "boolean") {
    console.log("true is a boolean");
}

//3. Write an if statement that checks to see if a variable has been defined or not 

if (typeof dolphinpants === "undefined") {
    console.log("Dolphinpants is undefined");
}

//4. Write an if statement comparing letters to numbers using < and >. Try to figure out what letters are going to be "greater than" other numbers or letters. 
if (99 > "a".charCode) {
    console.log("true");
}
else {
    console.log("false");
}

//5. Write a switch statement that returns a number spelled out ("seven" vs 7) for the numbers one through ten.

var num = 4;

switch (num) {
    case 1: 
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3: 
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 5: 
        console.log("five");
        break;
    case 6:
        console.log("six");
        break;
    case 7: 
        console.log("seven");
        break;
    case 8:
        console.log("eight");
        break;
    case 9: 
        console.log("nine");
        break;
    case 10:
        console.log("ten");
        break;
    default:
        console.log("invalid input");
}
//if using this in real life, wrap in a function and instead of console log + break, use return