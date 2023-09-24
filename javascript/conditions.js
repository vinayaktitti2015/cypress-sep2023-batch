/**
 * workspace >
 * project 1
 * project 2
 * project 3
 * project 4
 * project 5
 */

const date = new Date();
const hour = date.getHours();
const day = date.getDay();
const datePrint = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const fullDate = `${datePrint}/${month + 1}/${year}`;
console.log(fullDate);

let text = `sdsdjs 3443- 2323/-, 23232 ? sdjsj`;

/**
 * jan = 0
 * feb = 1
 * mar = 2
 */

function greet() {
  // write the code here
  //let greet;
  if (hour >= 0 && hour < 12) {
    return `Good Morning`;
  } else if (hour >= 12 && hour < 18) {
    return `Good Afternoon`;
  } else if (hour >= 18 && hour < 24) {
    return `Good Evening`;
  }
}

console.log(greet()); // invoke the function

console.log(datePrint + 5);