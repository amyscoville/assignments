Source: https://coursework.vschool.io/there-is-no-spoon/

Instructions:

In order to practice translating real-world objects into code, look around the room and pick 10 things you can see. Then write them as 10 JavaScript objects.

Each object should have at least 3 properties and one method, but you can add as many properties/methods as you want if you want to get even more practice. Try to not make everything a String type too, but include some Numbers, Booleans, Arrays, nested Objects, etc. if you can.

Example:

var pen = {  
    color: "Black",
    price: 2,
    isGelPen: false,
    write: function() {
        console.log("I'm a " + this.color + " pen that costs $" + this.price);
    }
}