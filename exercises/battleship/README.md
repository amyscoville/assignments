Source: https://coursework.vschool.io/battleship/

Instructions:

You are going to create a simplified version of the game Battleship. You will create a grid system and generate single-point ships (one hit and it's sunk) at random coordinates. Then in the terminal the user will attempt to attack the computer by entering a coordinate. If it is a hit, the console will print, “Hit”, if it is a miss, the console will print “Miss”.

Part 1 - The Location Constructor
You'll need to create a Location constructor. When it comes time to make the grid, you'll make an array of arrays (one array with 10 arrays inside), and the inner arrays will contain 10 instances of a Location object.

Create a Javascript constructor function called Location. Every object created from this constructor function must have the following properties:

isShip: Boolean - Is there a ship at this location, yes or no?

hit: Boolean - Has this location been guessed already? (Whether or not there's a ship present.) If so, was it a hit (true) or a miss (false)?

display: String - How should this location look on a printed board (in the extra credit, if you decide to do it)? This could be an "X" for "hit" or "M" for "miss", for example. You'd probably want to default it to something neutral to start, like "~", because it looks like a wave! :)

The isShip boolean should be randomly chosen to be true about 1 in every 5 locations that gets instantiated (created) from this constructor. If your random code generates a true, make sure to mark your isShip boolean as true in your object.

Hint: check out this Stack Overflow post for how to get a random integer in a specified range.

Part 2 - The Grid
You are going to code a 2-Dimensional coordinate/point grid system, also known in math as a matrix. Grid systems are used in many applications such as any type of Match-3 game like Candy Crush, or even on your operating system’s desktop (i.e. when you arrange icons and they all line up). Every point on the grid has an X and Y coordinate which makes up the “point”.

Your grid must have 100 points/coordinates, meaning there are 10 columns and 10 rows.

If I were to make a 3 X 3 grid by hand, it might look like this:

var grid = [  
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(grid[1][1]) //Prints 5  
You won't be creating your grid by hand, however. Creating your grid will require a for loop nested inside of a for loop. If you want some extra practice before starting this project you could review the Forception warmup.

Your grid will be different from the above grid in another way, too. Instead of pushing numbers to your grid, you'll need to instantiate a new Location object and push that object to the grid.

Once you've created the grid, you should log it to the console to make sure you're getting one array with 10 arrays, each item in the array being a Location object, where about 1 in 5 of the objects have true for the ship property.

Don’t be too worried by the anticipated complexity of this problem, this grid could be written in about 12 lines of code!

Part 3 - The Game
User Input and Score

Using the readline-sync library that you have already used, you must ask the user for the first coordinate and store that in a variable, and then ask for the second coordinate and store that in a variable as well. You can also make it simpler by having the user enter both coordinates at once with a comma separator (0,1) and then parse the variables.

Since your grid is a 10 X 10 grid, the possible coordinate options go from 0,0 to 9,9.

If there is a ship at the coordinates that the user entered tell the user they had a hit. Otherwise, tell them they missed.

Update the object in the coordinate position accordingly. Then allow them to make another guess.

If the user hits 3 different ships tell them that they have won the game and then reset the game.

Extra Credit:

For extra practice, make the game more robust.

Make the experience more visual for a user. After every attack from the user, print a grid that only shows the display property of the Location object. You can use the "\n" character put each array on its own line. It might look similar to this:
     O O O O O O O O O O
     O X O O O O O O O O
     O X O M M O O O O O
     O O O O O O O O O O
     O O O O O O X O O O
     O O O O O O O O O O
If the user enters coordinates that have already been entered, tell them so.
When you generate your grid, if by chance there are not 3 total ships (this could happen with our current code), re-generate the grid until there are at least 3 ships.
Super duper above-and-beyond points:

Generate ships that can be between 1 and 5 grid units in length. Keep in mind that ships cannot go off the grid.

Keep in mind that a ship can take as many hits as it is long (so a ship that is 5 long takes 5 hits to destroy).