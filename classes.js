var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Simple Object explicitly typed
var house = {
    noOfFloors: 4,
    sqFeet: 3000
};
console.log(house.noOfFloors);
console.log(house.sqFeet);
// Simple Object implicitly typed
var house1 = {
    noOfFloors1: 7,
    sqFeet1: 7000
};
console.log(typeof house1);
console.log(typeof house1.noOfFloors1);
console.log(house1.noOfFloors1);
console.log(house1.sqFeet1);
// Simple class
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var p = new Person("Burton", "Machado");
console.log(p);
var Block = /** @class */ (function () {
    function Block(index, previousHash, timestamp, data) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.nonce = 1;
        this.hash = "one";
    }
    return Block;
}());
var myperson = {
    firstName: "John",
    lastNme: "Doe",
    age: 21,
    ids: [1, 2, 3, 4],
    innerPerson: {
        firstName: "Bon",
        lastNme: "Doe",
        age: 17,
        ids: [4, 5, 6, 7]
    }
};
//Abstract classes
var Animal = /** @class */ (function () {
    function Animal(noOfLegs) {
        this.noOfLegs = noOfLegs;
    }
    Animal.prototype.getNoOfLegs = function () {
        return this.noOfLegs;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.speak = function () {
        return "woof";
    };
    Dog.prototype.getType = function () {
        return "Dog";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.speak = function () {
        return "Meow";
    };
    Cat.prototype.getType = function () {
        return "Cat";
    };
    return Cat;
}(Animal));
var dog = new Dog(4);
console.log("No of legs : " + dog.getNoOfLegs());
console.log("dog saying : " + dog.speak());
var cat = new Cat(4);
console.log("No of legs : " + cat.getNoOfLegs());
console.log("cat saying : " + cat.speak());
//Overloaded methods. Overloading is awkward in Typescript because of typeless nature of the generated javascript.
//You have to first write a method declaration for each of the overloads 
// and then one method implementation that checks its arguments to decide which overload was called.
// In general AVOID overloading in Typescript.
var Product = /** @class */ (function () {
    function Product(id, description) {
        // Constructor implementation goes here  )
    }
    return Product;
}());
