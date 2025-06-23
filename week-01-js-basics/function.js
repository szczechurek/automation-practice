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
