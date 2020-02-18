//function definition
function mysum(a, b) {
    return a + b;
}
//function assigned to a vriable
let myfun = function (x, y) {
    return x + y;
};
//lambda assigned to a variable
let mylambda = (p, q) => p + q;
console.log("mysum : " + mysum(2, 3));
console.log("myfun : " + myfun(4, 3));
console.log("mylambda : " + mylambda(7, 3));
//Higher order function accepting a function ad a parameter.
function higherOrder(f, x, y) {
    return f(x, y);
}
console.log("higherOrder : " + higherOrder((j, k) => j * k, 4, 5));
console.log("higherOrder : " + higherOrder(mylambda, 4, 5));
//Passing optional arguments to a function.
function optionalArgs(firstName, lastName) {
    if (lastName == undefined) {
        lastName = "Doe";
    }
    console.log("Firstname : " + firstName + " Lastname : " + lastName);
}
optionalArgs("John");
//Passing default arguments to a function.
function defaultArgs(firstName, lastName = "Doe") {
    console.log("Firstname : " + firstName + " Lastname : " + lastName);
}
defaultArgs("John");
//Rest parameters
function mysumvariadic(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}
//Generator functions (* in the function definition)
function* fabonacciGen() {
    let x = 0;
    let y = 1;
    while (true) {
        yield x;
        [x, y] = [y, x + y];
    }
}
