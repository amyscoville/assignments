var projector = {
    status: "on",
    color: "white",
    quantity: 1,
    powerOff: function() {
        return "Projector is off.";
    }
}

var door = {
    height: 3,
    width: 1,
    materials: ["glass", "wood", "metal"],
    open: function() {
        return "Turn knob and push."
    }
}

var whiteboard = {
    hasWheels: true,
    color: "white",
    height: 2.1,
    move: function() {
        return "Push";
    }
}

var stringOfLights = {
    on: true,
    cordColor: "brown",
    numWorkingLights: 25,
    bulbOut: function() {
        stringOfLights.numWorkingLights--;
    }
}

var waterBottle = {
    color: ["pink", "white"],
    oz: 24,
    empty: true,
    fill: function() {
        waterBottle.empty = false;
        console.log(waterBottle.empty);
    }
}
