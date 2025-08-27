//Variables in JS (let, const, var)

//Task-what will happen

let x = 10;
x = 20;
console.log(x);
//x will log 20

// const y = 15;
// y = 25;
// console.log(y);
//y will crash

var z = "Hello";
z = "Hi";
console.log(z);
//z will log Hi

//Challenges-predict the output

//1
let a = 5;
let b = a;
a = 10;
console.log(a, b);
//output will be 10 and 5

//2
// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);

// arr = [9, 9, 9];
// console.log(arr);
//output will be error

//3
var name = "Alice";
if (true) {
  var name = "Bob";
}
console.log(name);
//output will be Bob

//4
let color = "red";
if (true) {
  let color = "blue";
  console.log("inside:", color);
}
console.log("outside:", color);
//output will be inside:blue then outside:red

//5
const person = { name: "John" };
person.name = "Mike";
console.log(person);

person = { name: "Sarah" };
console.log(person);
//output will be error
