/**
 * primitive data types
 */

const username = "John Doe"; // initialize
let age = 30;
const isAlive = true;
const city = "San Francisco";
const country = "USA";
const nul = null;
const undef = undefined;
let address = "ASASJS 32323 !@ASASJS"; // string
const phone = 91232323222; // number or integer

// console.log("his name is: " + username);
// console.log("his age is: " + age);
// console.log("his isAlive is: " + isAlive);
// console.log("his city is: " + city);
// console.log("his country is: " + country);

/**
 * non-primitive types
 * object
 * array
 * date
 */

const person = {
  name: "John Doe",
  age: 30,
  isAlive: true,
  city: "San Francisco",
  country: "USA",
  email: "envkt@example.com",
  phone: "123-456-2323",
};

// console.log("his name is: " + person.name);
// console.log("his age is: " + person.age);
// console.log("his isAlive is: " + person.isAlive);
// console.log("his city is: " + person.city);
// console.log("his country is: " + person.country);
// console.log("his email is: " + person.email);
// console.log("his phone is: " + person.phone);

// Array
const numericArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numericArr);

const strTools = [
  "selenium", //0
  "cypress", // 1
  "playwright", //2
  "katalon studio",
  "protractor",
];

// array index starts from 0
// array length starts from 1

const mixedArray = [1, "selenium", 2, "cypress", 3, "playwright"];

console.log(strTools[0]);
console.log(strTools[1]);
console.log(strTools[2]);
console.log(strTools[3]);
console.log(strTools[4]);

// array length
console.log(strTools.length);