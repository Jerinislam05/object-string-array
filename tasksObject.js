// task-1 --> Access the golden rod color value in output.
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};
console.log(colors["golden rod"]);
// task-2 --> For this object below add a property named passenger capacity with value 5
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car["passenger capacity"] = 5;
console.log(car);
// task-3 --> Display the physics marks as output.
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};
console.log(student["physics"]);
// task-4 --> Count the number of properties.
let student2 = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
let totalProperties = Object.keys(student2).length;
console.log(totalProperties);
// task-5 --> Loop through an object and print the key-value pairs with their types
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
// for (let obj in myObject) {
//   console.log(obj);
//   console.log(myObject[obj]);
// }
const keys = Object.keys(myObject)
console.log(keys);
for (const key of keys) {
  console.log("Key:", key, "|", "Type:", typeof myObject[key]);
}