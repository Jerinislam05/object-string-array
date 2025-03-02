// task-1 --> Count how many times a string has the letter a
let sentence = "I am learning web development/ programming. I am enjoying about programming";
let count = 0;
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].toLocaleLowerCase() === "a") {
        count++;
    }
}
console.log("Using for loop", count);
// while loop
let sentence2 = "JavaScript is amazing! I love it and want to learn more about JavaScript";
let count2 = 0;
let i = 0;
while (i < sentence2.length) {
    if (sentence2[i].toLocaleLowerCase() === "a") {
        count2++;
    }
    i++;
}
console.log("Using while loop", count2);
// task-2 --> Count how many times a string has the letter a or A
let text = "I love to sleep and listening music. A little thing about me is that I have never been able to sleep";
let count3 = 0;
for (let i = 0; i < text.length; i++) {
    if (text[i] === "a" || text[i] === "A") {
        count3++;
    }
}
console.log("Using for loop with both a and A", count3);
// while loop
let text2 = "I love to sleep and listening music. A little thing about me is that I have never been able to sleep";
let num = 0;
let idx = 0;
while (idx < text2.length) {
    if (text2[idx] === "a" || text2[idx] === "A") {
        num++;
    }
    idx++;
}
console.log("Using while loop", num);
// task-3 --> Check whether a string contains all the vowels a, e, i, o, u
let speech = "I love to sleep and listening music";
let vowels = "aeiou";
let result = true;
for (let i = 0; i < speech.length; i++) {
    let char = speech[i].toLocaleLowerCase();
    if (vowels.includes(char)) {
        vowels = vowels.replace(char, '');
    }
    if (vowels.length === 0) {
        break
    }
}

if (vowels.length === 0) {
    console.log("The string contains all the vowels");
} else {
    console.log("The string does not contain all the vowels");
}
// while loop
let n = 0;
let vowels2 = "aeiou";
let speech2 = "I love JavaScript";
while (n < speech2.length && vowels2.length > 0) {
    let char = speech2[n].toLocaleLowerCase();
    if (vowels2.includes(char, "")) {
        vowels2 = vowels2.replace(char, '');
    }
    n++;
}

if (vowels2.length === 0) {
    console.log("The string contains all the vowels");
} else {
    console.log("The string does not contain all the vowels");
}
// task-4 --> If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let str = "x-mas-tree";
let replaceWord = "x";
let newWord = "y";
if (str.toLocaleLowerCase().includes(replaceWord.toLocaleLowerCase())) {
    str = str.split(replaceWord).join(newWord);
    console.log("Updated string", str);
} else {
    console.log("String does not contain the word");
}
// task-5 --> Capitalize Every first Letter of each word in a String
let txt = "hello world! i want to know you.";
let words = txt.split(" ");
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
}
let capitalizedWords = words.join(' ');
console.log(capitalizedWords);