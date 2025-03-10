// 1. function takes an array as parameter
// 2. give me the average number of the odd numbers in the array
/**
 * put odd numbers in an array
*/
function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }
    // odds is the array that contains only the odd numbers
    // console.log(odds);
    let sum = 0;
    for (const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}
const numbers = [13, 36, 20, 21, 19, 1, 3];
const avg = oddAverage(numbers);
console.log("average of the odd number is", avg);
