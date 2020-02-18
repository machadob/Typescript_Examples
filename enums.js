var Weekdays1;
(function (Weekdays1) {
    Weekdays1[Weekdays1["Monday"] = 1] = "Monday";
    Weekdays1[Weekdays1["Tuesday"] = 2] = "Tuesday";
    Weekdays1[Weekdays1["Wednesday"] = 3] = "Wednesday";
    Weekdays1[Weekdays1["Thursday"] = 4] = "Thursday";
    Weekdays1[Weekdays1["Friday"] = 5] = "Friday";
    Weekdays1[Weekdays1["Saturday"] = 6] = "Saturday";
    Weekdays1[Weekdays1["Sunday"] = 7] = "Sunday";
})(Weekdays1 || (Weekdays1 = {}));
var Weekdays2;
(function (Weekdays2) {
    Weekdays2[Weekdays2["Monday"] = 1] = "Monday";
    Weekdays2[Weekdays2["Tuesday"] = 2] = "Tuesday";
    Weekdays2[Weekdays2["Wednesday"] = 3] = "Wednesday";
    Weekdays2[Weekdays2["Thursday"] = 4] = "Thursday";
    Weekdays2[Weekdays2["Friday"] = 5] = "Friday";
    Weekdays2[Weekdays2["Saturday"] = 6] = "Saturday";
    Weekdays2[Weekdays2["Sunday"] = 7] = "Sunday";
})(Weekdays2 || (Weekdays2 = {}));
var dayOff = Weekdays1.Tuesday;
console.log("Off Day is : " + dayOff);
var holiday = Weekdays2.Sunday;
console.log("Holiday is : " + holiday);
var Direction;
(function (Direction) {
    Direction[Direction["FtoC"] = 0] = "FtoC";
    Direction[Direction["CtoF"] = 1] = "CtoF";
})(Direction || (Direction = {}));
function convertTemperature(temp, fromTo) {
    return (Direction.FtoC === fromTo) ?
        (temp - 32) * 5.0 / 9.0 :
        temp * 9.0 / 5.0 + 32;
}
console.log("70F is " + convertTemperature(70, Direction.FtoC) + "C");
console.log("21C is " + convertTemperature(21, Direction.CtoF) + "F");
