
interface Comparator<T> {
    compareTo(value: T): number;
}
class Rectangle implements Comparator<Rectangle> {
    constructor(private width: number, private height: number) { };
    compareTo(value: Rectangle): number {
        return this.width * this.height - value.width * value.height;
    }
}
const rect1: Rectangle = new Rectangle(2, 5);
const rect2: Rectangle = new Rectangle(2, 3);
rect1.compareTo(rect2) > 0 ? console.log("rect1 is bigger") :
    rect1.compareTo(rect2) == 0 ? console.log("rectangles are equal") :
        console.log("rect1 is smaller");

class Pair<K, V> {
    constructor(public key: K, public value: V) { }
}
function compare<K, V>(pair1: Pair<K, V>, pair2: Pair<K, V>): boolean {
    return pair1.key === pair2.key &&
        pair1.value === pair2.value;
}
let p1: Pair<number, string> = new Pair(1, "Apple");
let p2 = new Pair(1, "Orange");
console.log(compare<number, string>(p1, p2));
let p3 = new Pair("first", "Apple");
let p4 = new Pair("first", "Apple");
console.log(compare(p3, p4));

function genericSum<T>(input: T): T {
    console.log(input);
    return input;
}

let ss = genericSum<number>(4)
console.log("genericSum<number>(4) is : " + ss)

// Using Generics in Lambdas
const printMe = <T>(content: T): T => {
    console.log(content);
    return content;
}

const a = printMe("Hello");
console.log("a is : " + a)

//Generics with higher order functions.
function myFun<T>(f:(x:T)=>T, y:T){
    return f(y);
}

let res = myFun((n:number)=>{return n + 7}, 7)
console.log("res is : " + res);