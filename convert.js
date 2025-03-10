// 12 inch = 1 feet
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
// another way
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + " ft " + inchRemaining + " inch."
    return result;
}
const suvoHeight = inchToFeet(75);
console.log(suvoHeight);
const suvoHeight2 = inchToFeet2(75);
console.log(suvoHeight2);

// miles To kilometers
function mileToKm(mile) {
    const km = mile * 1.60934;
    return km;
}
const khulnaToDhaka = mileToKm(400);
console.log(khulnaToDhaka);
function kmToMiles(km) {
    const mile = km * 0.621371;
    return mile;
}
const dhakaToKhulna = kmToMiles(400);
console.log(dhakaToKhulna);