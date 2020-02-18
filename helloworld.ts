
let city = {
    name: "Paris",
    food: ["Wine", "Pasta", "Belegue", "Tempelu"],
    location: [111.173644, 77.756354],
    rank: 10
}

function calcTax(state: string, income: number, dependents: number): number {
    if (state === 'NY') {
        return income * 0.06 - dependents * 500;
    } else if (state === 'NJ') {
        return income * 0.05 - dependents * 300;
    }
}

let padding: string | number

console.log("NY tax : " + calcTax("NY",100000,2))
console.log("NJ tax : " + calcTax("NJ",100000,2))

padding = "Hello"
console.log("padding : " + padding)
padding = 7171
console.log("padding : " + padding)
if( typeof padding === "number"){
    console.log("padding is number" )
}