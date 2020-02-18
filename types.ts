type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };

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

