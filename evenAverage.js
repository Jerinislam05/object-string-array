// 1. function takes an array as parameter
// 2. give me the average number of the even numbers in the array
/**
 * 1. put even numbers in an array
 */
function evenAverage(array) {
    const even = [];
    for (const arr of array) {
        if (arr % 2 === 0) {
            even.push(arr);
        }
    }
    // even is in the array that contains even numbers
    let sum = 0;
    for (const arr of even) {
        sum = sum + arr;
    }
    const count = even.length;
    console.log(sum, count);
    const avrg = sum / count;
    return avrg;
    
}
const array = [11, 4, 22, 53, 34, 9, 3, 1]
const avrg = evenAverage(array);
console.log("average of the even number is: " ,avrg);
