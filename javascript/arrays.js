const tools = [
  "selenium",
  "cypress",
  "playwright",
  "jest",
  "webpack",
  "protractor",
];

// convert to string
// console.log(typeof tools.toString());

// console.log(tools.join(" + "));

// // pop functions
// console.log(tools.pop());
// console.log(tools);

// console.log(tools.push("katalon studi"));
// console.log(tools);

// console.log(tools.shift());
// console.log(tools);

// console.log(tools.includes("UFT"));

// console.log(tools.unshift("mabl"));
// console.log(tools);

// console.log(tools.sort());

const fruits = ["apple", "banana", "cherry"];
fruits.sort((a, b) => a.length - b.length);

fruits.splice(1, 0, "orange");
console.log(fruits);

// enhanced loop
fruits.forEach((fruit) => {
  // arrow function
  console.log(fruit);
});

// traditional for loop
for (let i = 0; i <= fruits.length; i++) {}

const fruits2 = fruits.slice(2);
console.log(fruits2);
