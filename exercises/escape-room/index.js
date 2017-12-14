const ask = require('readline-sync');

console.log('You have found yourself in a locked room. \n There is a door, a hidden key, and a hole in the wall. \n You need to find the key in the room and open the door.');

let firstAction = ask.question('What would you like to do?');

//look - 
//open door - if you have key, go out, if not, you fail (print back must have key)
//hand in hole/reach into hole - DIE


