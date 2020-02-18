var Camry = /** @class */ (function () {
    function Camry() {
    }
    Camry.prototype.startEngine = function () {
        return true;
    };
    Camry.prototype.stopEngine = function () {
        return true;
    };
    Camry.prototype.brake = function () {
        return true;
    };
    Camry.prototype.accelerate = function (speed) {
        console.log("Accelerating! at : " + speed + " miles/hr");
    };
    Camry.prototype.honk = function (howLong) {
        console.log("Horn Ok!");
    };
    return Camry;
}());
var car = new Camry();
car.accelerate(100);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.startEngine = function () {
        return true;
    };
    Car.prototype.stopEngine = function () {
        return true;
    };
    Car.prototype.brake = function () {
        return true;
    };
    Car.prototype.accelerate = function (speed) {
        console.log("Accelerating! at : " + speed + " miles/hr");
    };
    Car.prototype.honk = function (howLong) {
        console.log("Horn Ok!");
    };
    Car.prototype.fly = function (howHigh) {
        return 7;
    };
    Car.prototype.land = function () {
        console.log("Landing!");
    };
    Car.prototype.swim = function (howFar) {
        console.log("Swimming! : " + howFar + " miles");
    };
    return Car;
}());
