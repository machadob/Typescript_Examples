var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    Rectangle.prototype.compareTo = function (value) {
        return this.width * this.height - value.width * value.height;
    };
    return Rectangle;
}());
var rect1 = new Rectangle(2, 5);
var rect2 = new Rectangle(2, 3);
rect1.compareTo(rect2) > 0 ? console.log("rect1 is bigger") :
    rect1.compareTo(rect2) == 0 ? console.log("rectangles are equal") :
        console.log("rect1 is smaller");
var Pair = /** @class */ (function () {
    function Pair(key, value) {
        this.key = key;
        this.value = value;
    }
    return Pair;
}());
function compare(pair1, pair2) {
    return pair1.key === pair2.key &&
        pair1.value === pair2.value;
}
var p1 = new Pair(1, "Apple");
var p2 = new Pair(1, "Orange");
console.log(compare(p1, p2));
var p3 = new Pair("first", "Apple");
var p4 = new Pair("first", "Apple");
console.log(compare(p3, p4));
function genericSum(input) {
    console.log(input);
    return input;
}
var ss = genericSum(4);
console.log("genericSum<number>(4) is : " + ss);
// Using Generics in Lambdas
var printMe = function (content) {
    console.log(content);
    return content;
};
var a = printMe("Hello");
console.log("a is : " + a);
function myFun(f, y) {
    return f(y);
}
var res = myFun(function (n) { return n + 7; }, 7);
console.log("res is : " + res);
