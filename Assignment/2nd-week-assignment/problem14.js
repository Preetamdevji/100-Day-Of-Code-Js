// Create an object car with properties make, model, and a method startEngine that logs a message. Instantiate the object and call the method.

function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.startEngine = function () {
    console.log("The engine of the " + this.make + " " + this.model + " is started.");
};

var myCar = new Car("LandRover", "RangeRover");
myCar.startEngine();
