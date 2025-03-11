// Task-1: Write a function to convert temperature from Celsius to Fahrenheit.
function toFahrenheit(cels) {
  const temperature = (cels * 9) / 5 + 32;
  console.log(temperature);
  return temperature;
}
const cels = toFahrenheit(25);
console.log("Celsius to fahrenheit is:", cels);
// Task-2: You are given an array of numbers. Count how many times the a number is repeated in the array. sample-input: numbers = [5,6,11,12,98, 5]find: 5
function find(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
      count++;
    }
  }
  return count;
}
const numbers = find([5, 6, 11, 12, 98, 5]);
console.log("Find out the number are:", numbers, "times");
// sample-input: numbers = [5,6,11,12,98, 5] now find: 25
function findOut(number) {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] === 25) {
      count++;
    }
  }
  return count;
}
const number = findOut([5, 6, 11, 12, 98, 5]);

console.log("Find out the number 25 are:", number, "times");
// Task-3: Write a function to count the number of vowels in a string.
function countDown(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
const string = countDown("I am learning Programming to become a programmer")

console.log("Number of vowels in the given string is:", string);
// Task-4: Write a function to find the longest word in a given string. sample-input: I am learning Programming to become a programmer sample-output: Programming
function longestWord(str) {
    const word = "Programming";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === word) {
            word++;
        }
    }
    return word;
}
const str = longestWord("I am learning Programming to become a programmer");
console.log("Longest word in the given string is:", str);
//Task-5: Generate a random number between 10 to 20.
function randomNumber() {
    return (Math.random() * 10) + 10;
}
const random = randomNumber();
console.log("Random number between 10 and 20 is:", random);
