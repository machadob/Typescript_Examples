enum Weekdays1 {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
enum Weekdays2 {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}

let dayOff = Weekdays1.Tuesday;
console.log("Off Day is : " + dayOff);
let holiday = Weekdays2.Sunday;
console.log("Holiday is : " + holiday);

enum Direction {
    FtoC,
    CtoF
}

function convertTemperature(temp: number, fromTo: Direction): number {
    return (Direction.FtoC === fromTo) ?
        (temp - 32) * 5.0 / 9.0 :
        temp * 9.0 / 5.0 + 32;
}
console.log(`70F is ${convertTemperature(70, Direction.FtoC)}C`);
console.log(`21C is ${convertTemperature(21, Direction.CtoF)}F`);