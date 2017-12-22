class Player {
    constructor(name) {
        this.playName = name;
        this.namePicked = '';
        this.totalCoins = 0;
        this.status = 'Small';
        this.star = false;
        this.gameActive = true;
    }
    setName(namePicked) {
        this.name = namePicked;
    }
    gotHit() {
        switch(this.status) {
            case 'Powered Up':
                this.status = 'Big';
                this.star = false;
                break;
            case 'Big':
                this.status = 'Small';
                break;
            case 'Small':
                this.status = 'Dead';
                this.gameActive = false;
        }
    }
    gotPowerup() {
        switch (this.status) {
            case 'Small':
                this.status = 'Big';
                break;
            case 'Big': 
                this.status = 'Powered Up';
                this.star = true;
        } 
    }
    addCoin() {
        this.totalCoins++;
    }
    print() {
        for(let key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }
}

let amy = new Player('Amy');
amy.setName('Mario');



function randomRange() {
    return ~~((Math.random() * 3));
}
 
while(amy.gameActive) {
     switch(randomRange()) {
         case 0:
            amy.gotHit();
            break;
        case 1:
            amy.gotPowerup();
            break;
        case 2:
            amy.addCoin();
     }
     amy.print();
 }


