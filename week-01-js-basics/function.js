//Declarative function
helloOne();
function helloOne() {
  console.log("Hello One!");
}

// Anoymus function
let helloTwo = function () {
  console.log("Hello Two!");
};
helloTwo();

//ES6 function syntax or arrow function
let helloThree = () => {
  console.log("Hello Three!");
};
helloThree();

//Function with arguments
function printName(name, lastName) {
  console.log(name, lastName);
}
printName("John", "Smith");

//Function with return
function multiplyByTwo(number) {
  let result = number * 2;
  return result;
}
let myResult = multiplyByTwo(5);
console.log(myResult);

//Second day
function greet(name) {
  //greet is the function name
  console.log("Hello, " + name + "!"); //name is a parameter, like a placeholder
}

greet("Anna"); //Anna is an argument, real value you pass

function add(a, b) {
  return a + b; //return gives back a value that can be saved or used
}
let result = add(3, 5);
console.log(result); //without return, the function just does something/like printing

const multiply = (x, y) => x * y; //shorter syntax for quick functions
console.log(multiply(2, 4)); //used often in modern js and cypress

function greetUser(name = "Guest") {
  console.log(`Welcome, ${name}!`);
}
greetUser();
greetUser("Michael");

function getAge(birthYear, currentYear) {
  return currentYear - birthYear;
}

function isAdult(age) {
  return age >= 18;
}

let age = getAge(2005, 2025);
console.log("Is adult:", isAdult(age));
