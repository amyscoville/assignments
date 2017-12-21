class Player {
    constructor(star) {
        this.name;
        this.totalCoins = 0;
        this.status = 'Small';
        this.star = star;
        this.gameActive = true;
    }
    setName(namePicked) {
        this.name = namePicked;
    }
    gotHit() {
        if(this.status === 'Powered Up') {
            this.status = 'Big';
        } else if (this.status === 'Big') {
            this.status = 'Small';
        } else if (this.status === 'Small') {
            this.status = 'Dead';
            this.gameActive = false;
        }
    }
    gotPowerup() {
        //called when powerup is received
        if (this.status === 'Small') {
            this.status = 'Big';
        } else if (this.status === 'Big') {
            this.status = 'Powered Up';
        } 
    }
    addCoin() {
        this.totalCoins++;
    }
    print() {
        console.log(`Name: ${this.name} \nTotal Coins: ${this.totalCoins} \nStatus: ${this.status} \nStar: ${this.star}`);
    }
}

let mario = new Player(true);
mario.print();
mario.setName('Mario');
mario.gotPowerup();
mario.print();
mario.gotPowerup();
mario.print();
mario.gotHit();
mario.print();


function randomRange() {
    return Math.floor((Math.random() * 2));
}

console.log(randomRange());


