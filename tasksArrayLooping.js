// task-1 -->> Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ["red", "blue", "green", "yellow", "orange"];
const reversedColors = [];
for (const color of colors) {
  reversedColors.unshift(color);
}
console.log(reversedColors);
// answer: [ 'orange', 'yellow', 'green', 'blue', 'red' ]

// tasks-2 -->> Write a JavaScript code to get the even numbers from an array using any looping technique.

const evenNumbers = [];
const numbers = [12, 98, 5, 41, 23, 78, 46];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers);
// answer: [ 12, 98, 5, 46 ]

// tasks-3 -->> Use a for...of loop to concatenate all the elements of an array into a single string.
const str = ["tom", "tim", "tin", "tik"];
let singleStr = "";

for (const word of str) {
  singleStr += word;
}
console.log(singleStr);
// answer: tomtimtintik

// tasks-4 -->> Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = "I am a hard working person";
let wordsArray = statement.split(" ");
let reversedArray = wordsArray.reverse();
let reversedSentence = reversedArray.join(" ");
console.log(reversedSentence);
// answer: person hard working am I
