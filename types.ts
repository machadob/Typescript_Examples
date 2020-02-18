type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 };
type person = {
  first: string;
  last: string;
};

type Feet = number;
type Pounds = number;

type Patients = {
  name: string;
  height: Feet;
  weight: Pounds;
};

let p: person = { first: "John", last: "Doe" };
console.log(p);

let patient1: Patients = {
  name: "Joe Smith",
  height: 5,
  weight: 100
};

console.log(patient1);

// unknown type
let u: unknown;
let s: string = "Hello";
u = s; //Error. to get rid of this error perform a check
if (typeof u === "string") {
  u = s;
}

//never type
function neverTest(message: string, code: number) {
  throw { message, code }; //Never returns anything
}

//never type
function neverTest2(message: string, code: number) {
    while(true){} //Never returns anything
  }
  
//Literal types:
