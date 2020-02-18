
let i = 7
let j:number = 7

const k = 77 //define constant

let paddings: string | number //Union type

//Tuple
let tupleTest:[string, number] = ["Hello", 77]
console.log(typeof tupleTest)

paddings = "Hello"
console.log("paddings : " + paddings)
paddings = 7171
console.log("paddings : " + paddings)

type Foot = number;
type Pound = number;

type Patient = {
    name: string;
    height: Foot;
    weight: Pound;
  }

  let patient: Patient = {
    name: 'Joe Smith',
    height: 5,
    weight:170
}

let numList = [1, 2, 3, 4]
numList.forEach(element => {
    console.log(element)
});

let strList = ["Hello", "World", "You", "All"]
strList.forEach(str=>{
    console.log(str)
})


