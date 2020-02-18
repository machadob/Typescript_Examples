//function definition
function mysum(a:number, b:number){
    return a+b;
}
//function assigned to a vriable
let myfun = function(x:number, y:number){
    return x+y
}

//lambda assigned to a variable
let mylambda = (p:number, q:number) => p+q
console.log("mysum : " + mysum(2,3))
console.log("myfun : " + myfun(4,3))
console.log("mylambda : " + mylambda(7,3))

//Higher order function accepting a function ad a parameter.
function higherOrder(f:(p:number, q:number)=>number,x:number,y:number ):number{
    return f(x,y)
}
console.log("higherOrder : " + higherOrder((j:number,k:number)=>j*k ,4 , 5))
console.log("higherOrder : " + higherOrder(mylambda ,4 , 5))

//Passing optional arguments to a function.
function optionalArgs(firstName:string, lastName?){
    if(lastName==undefined){
        lastName="Doe"
    }
    console.log("Firstname : " + firstName + " Lastname : " + lastName)
}
optionalArgs("John")

//Passing default arguments to a function.
function defaultArgs(firstName:string, lastName = "Doe"){
    console.log("Firstname : " + firstName + " Lastname : " + lastName)
}
defaultArgs("John")

//Rest parameters
function mysumvariadic(...nums:number[]):number{
    return nums.reduce((total, n) => total + n, 0)
}

//Generator functions (* in the function definition)
// Use tsc -t ES6 functions.ts to compile this.
// function* fabonacciGen(){
//     let x = 0
//     let y = 1
//     while(true){
//         yield x;
//         [x, y] = [y, x + y]
//     }
// }

//Iterator functions
