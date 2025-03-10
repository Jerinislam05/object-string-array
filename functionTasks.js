// Task-1 ->> Take four parameters. Multiply the four numbers and then return the result

function Multiply(num1, num2, num3, num4) {
    const total = num1 * num2 * num3 * num4;
    return total;
}

const res = Multiply(2, 3, 4, 5);
console.log("total multiply number is", res);
// Task-2 ->> Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function number(num) {
    if (num % 2 === 0) {
        return num / 2;
    } else {
        return num * 2;
    }
}
const res2 = number(8);
console.log("Number res2 is", res2);
// task-3 ->> Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(arr, size) {
    if (arr.length!== size) {
        return "Array length does not match the given size";
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
const res3 = make_avg([5, 10, 15, 20], 4);

console.log("Average of array is", res3);
// task-4 ->> Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            count++;
        }
    }
    return count;
}
const res4 = count_zero("10100100010000");
console.log("Number of zeros in binary string is", res4);
// task-5 ->> Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(val) {
    if (val % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

const res5 = odd_even(5);
console.log("Number res5 is", res5);