// array has some duplicate elements
const dupliArr = ["i", "b", "b", "a", "d", "e", "e", "g"];
function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
       if (unique.includes(item) === false) {
            unique.push(item);
       }
    }
    return unique;
}
const uniqueArr = noDuplicate(dupliArr);
console.log(uniqueArr);