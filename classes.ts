// Simple Object explicitly typed
const house: {
    noOfFloors: number;
    sqFeet: number;
  } = {
    noOfFloors: 4,
    sqFeet: 3000
  };
  console.log(house.noOfFloors)
  console.log(house.sqFeet)

  // Simple Object implicitly typed
var house1 = {
    noOfFloors1: 7,
    sqFeet1: 7000
  };
  console.log(typeof house1)
  console.log(typeof house1.noOfFloors1)
  console.log(house1.noOfFloors1)
  console.log(house1.sqFeet1)

// Simple class
class Person {
    constructor(public firstName: string, public lastName: string) {

    }
}

let p = new Person("Burton", "Machado");
console.log(p);

class Block {// readonly properties need not be decalred as private, public or protected
    readonly nonce: number;
    readonly hash: string;
    constructor(
        readonly index: number,
        readonly previousHash: string,
        readonly timestamp: number,
        readonly data: string
    ) {
        this.nonce = 1;
        this.hash = "one";
    }
    // The rest of the code is omitted for brevity
}

let myperson = {
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
}

//Abstract classes
abstract class Animal {
    constructor(public noOfLegs: number) { }

    abstract getType(): string;

    abstract speak(): string;

    getNoOfLegs(): number {
        return this.noOfLegs;
    }
}

class Dog extends Animal {
    speak(): string {
        return "woof";
    }
    getType(): string {
        return "Dog";
    }
}

class Cat extends Animal {
    speak(): string {
        return "Meow";
    }
    getType(): string {
        return "Cat";
    }
}

let dog: Animal = new Dog(4)
console.log("No of legs : " + dog.getNoOfLegs())
console.log("dog saying : " + dog.speak())
let cat: Animal = new Cat(4)
console.log("No of legs : " + cat.getNoOfLegs())
console.log("cat saying : " + cat.speak())

//Overloaded methods. Overloading is awkward in Typescript because of typeless nature of the generated javascript.
//You have to first write a method declaration for each of the overloads 
// and then one method implementation that checks its arguments to decide which overload was called.
// In general AVOID overloading in Typescript.
class Product {
    id: number;
    description: string;
    constructor();
    constructor(id: number);
    constructor(id: number, description: string);
    constructor(id?: number, description?: string) {
      // Constructor implementation goes here  )
    }
  }
