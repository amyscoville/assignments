var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Beiber",
      occupation: "Singer"
    },
    {
      name: "Vladmir Putin",
      occupation: "Politition"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];

//PRELIMINARIES
// Write a for loop that prints to the console the numbers 0 through 9.
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// Write a for loop that prints to the console 9 through 0.
for (var i = 9; i >= 0; i--){
    console.log(i);
}

// Write a for loop that prints these fruits to the console.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

//BRONZE
// Write a for loop that will push the numbers 0 through 9 to an array.
// var arr = [];
// for (var i = 0; i < 10; i++) {
//     arr.push(i);
// }
// // Write a for loop that prints to the console only even numbers 0 through 100.
// for (var i = 0; i < 101; i++) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }
// Write a for loop that will push every other fruit to an array. 
var newArr = [];
for (var i = 0; i < fruit.length; i+=2) {
    newArr.push(fruit[i]);
}

// //SILVER
// Write a loop that will print out all the names of the people of the people array
for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
}

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
var names = [], occupations = [];
for (var i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}
console.log(names); 
console.log(occupations);


// Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to an array starting with "Singer".
var names2 = [], occupations2 = [];
for (var i = 0; i < peopleArray.length; i++) {
    if (i % 2 === 0) {
        names2.push(peopleArray[i].name);
    } else {
        occupations2.push(peopleArray[i].occupation);
    }
}
console.log(names2);
console.log(occupations2);

/* Gold Medal
1.Create an array that mimics a grid like the following using for loops:
[[0, 0, 0], 
[0, 0, 0], 
[0, 0, 0]]
*/

var myArr = [];
for (var i = 0; i < 3; i++) {
    myArr.push([]);
    for (var j = 0; j < 3; j++) {
        myArr[i].push(0);
    }
}
console.log(myArr);


/*2.Create an array that mimics a grid like the following using for loops:

[[0, 0, 0], 
[1, 1, 1], 
[2, 2, 2]]*/

var myNewArr = [];
for (var i = 0; i < 3; i++) {
    myNewArr.push([]);
    for (var j = 0; j < 3; j++) {
        myNewArr[i].push(i);
    }
}
console.log(myNewArr);


/*3.Create an array that mimics a grid like the following using for loops:

[[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]*/

var myNewArr2 = [];
for (var i = 0; i < 3; i++) {
    myNewArr2.push([]);
    for (var j = 0; j < 3; j++) {
        myNewArr2[i].push(j);
    }
}
console.log(myNewArr2);

// Given a grid like the previous ones, write a for loop that would change every number to an x.

var grid = [
    [0, 1, 2], 
    [0, 1, 2], 
    [0, 1, 2]
];

for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
        grid[i][j] = "x";
    }
}

console.log(grid);
