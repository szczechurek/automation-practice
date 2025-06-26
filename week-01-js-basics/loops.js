// For loop - the classic one. Use when you need full control over the index

for (let i = 0; i < 5; i++) {
  console.log("Number:", i); //0, 1, 2, 3, 4
}

// while loop - repeats as long as condition is true. Useful when you dont know how many times you need to run

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// for...of loop - loop over arrays. Clean and simple way to go through array items

const names = ["Anna", "Bob", "Carl"];
for (let name of names) {
  console.log(name);
}

// .forEach() method - loop using array method. Used a lot in Cypress for looping DOM elements
const numbers = [10, 20, 30];
numbers.forEach((number) => {
  console.log(number);
});

// in cypress:

CSSSkewY.length(".item").each(($el) => {
  CSSSkewY.wrap($el).clicl();
});

//When do you use loops in cypress
// -Clicking multiple element
// -Asserting multiple values
// -Looping through test data
// -Interacting with list or tables

// continue and break - Loop Flow Control
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; //skip iteration when i is 2
  if (i === 4) break; //stop the Loop when i is 4
  console.log(i);
}
//Output: 0, 1, 3 (2 is skipped, loop stops before 4)
//Use continue to skip, and break to exit early

//Looping backwards. Iats useful when removing items from arrays
const items = ["a", "b", "c", "d"];
for (let i = items.length - 1; i >= 0; i--) {
  console.log(items[i]);
}
//output: d, c, b, a
//great for removing elements without breeaking the index order

//modifying arrays during loop (change through with .forEach or for...of)
const arr = [1, 2, 3, 4];
arr.forEach((num, i) => {
  if (num === 2) {
    arr.splice(i, 1); //breaks loop behavior
  }
});
//instead, use .filter() or loop over a copy of the array

//nested loops (loop inside a loop)
const matrix = [[1, 2][(3, 4)]];

for (let row of matrix) {
  for (let value of row) {
    console.log(value);
  }
}
//usefull when testing tables, grids or data structures

//using .map(), .filter(), .reduce() (loop alternatives)
//map()-transform each item
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2); //[2, 4, 6]

//filter()-keeps olny items that match
const num = [1, 2, 3, 4];
const even = num.filter((n) => n % 2 === 0); //[2, 4]

//reduce()-combines into single value
const numbrs = [1, 2, 3];
const sum = numbrs.reduce((acc, n) => acc + n, 0); //6

//async code in loops (cypress context)-if you try to run asynchronous code in a lope (cy.get()) it wont behave as expected
// cy.get('.btn).each(($el) => {
//    cy.wrap($el).click()
//})
