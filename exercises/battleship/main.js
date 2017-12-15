const rs = require('readline-sync');

function whetherShip() {
    let randomNum = Math.floor(Math.random() * 10);
    return randomNum === 0;
}

function Location() {
    this.isShip = whetherShip();
    this.isHit = false;
    this.display = '~';
}

function Grid() {
    this.grid = [];
    this.totalShips = 0;
}

Grid.prototype.genGrid = function() {
    for(let i = 0; i < 8; i++) {
        this.grid.push([]);
        for(let j = 0; j < 8; j++) {
            let location = new Location();
            if (location.isShip) {
                this.totalShips++;
            }
            this.grid[i].push(location);
        }
    }
}

Grid.prototype.displayGrid = function() {
    for(let i = 0; i < this.grid.length; i++){
        let row = [];
        for(let j = 0; j < this.grid[i].length; j++){
            row.push(this.grid[i][j].display)
        }
        console.log(row.join(' '));
    }
}

Grid.prototype.attack = function(x, y) {
    let coord = this.grid[y][x];
    coord.isHit = true;
    if(coord.isShip) {
        coord.display = 'X';
        this.totalShips--;
    } else {
        coord.display = "O";
    }
}

let game = new Grid();
game.genGrid();

// GAME LOOP HELPER FUNCTIONS

function isValidCoord(x, y) {
    x = Number(x);
    y = Number(y);
    let length = game.grid.length;
    return x >= 0 && x < length && y >= 0 && y < length;
}

function isValidAttack(x, y) {
    x = Number(x);
    y = Number(y);
    return !game.grid[y][x].isHit;
}

let turnCounter = 20;
console.log('\nWelcome to Battleship\n');
game.displayGrid();
while(true) {
    console.log('\nRemaining turns: ' + turnCounter + '\n');
    console.log('\nShips left: ' + game.totalShips + '\n');
    let xLimit = game.grid.length - 1;
    let yLimit = game.grid[0].length - 1;
    let x = rs.keyIn('Choose an x coordinate between 0 and ' + xLimit + '\n', {limit: '$<0-' + xLimit + '>'});
    let y = rs.keyIn('Choose a y coordinate between 0 and ' + yLimit + '\n', {limit: '$<0-' + yLimit + '>'});
    //console.log "hit!"" or "miss!""

    if (!isValidCoord(x, y)) {
        console.log('\nSorry that is an invalid coordinate');
        rs.question('Press enter to continue');
        continue;
    } 

    if(!isValidAttack(x,y)) {
        console.log('\nSorry, you already attacked that location!\n');
        rs.question('Press enter to continue');
        continue;
    }

    game.attack(x,y);

    if(game.grid[y][x].display === 'X') {
        console.log('HIT!');
    } else {
        console.log('Miss');
    }

    rs.question('Press enter to continue');

    turnCounter--;

    if(game.totalShips === 0) {
        break;
    }

    if (turnCounter === 0) {
        break;
    }

    game.displayGrid();
}

if (turnCounter > 0) {
    console.log('Victory!');
} else {
    console.log('Defeat! You failed to hit all ships in the allotted number of turns.');
}