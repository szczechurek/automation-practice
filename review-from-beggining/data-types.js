//Data types (string, number, boolean, null, undefined, object, array)

//PRIMITIVES
//string - text "hello"
//number - 42, 3.14
//boolean - true / false
//null - "no value"
//undefined - declared but not assigned

//REFERENCE TYPES
//object -> { key: value }
//array -> [1, 2, 3]

//TRICKY JS QUIRK
//typeof null -> "object"
//typeof [] -> 'object' too
//to check if a variable is an array: Array.isArray(variable)

//Task-predict the output
//1
console.log(typeof "hello"); //string
console.log(typeof 42); //number
console.log(typeof true); //boolean
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof []); //objuect
console.log(typeof {}); //object

//2-which of these are arrays
const a = [1, 2, 3]; //Array.isArray(a)
const b = { x: 1 }; //Array.isArray(b)
const c = "hello"; //Array.isArray(c)
// or just Array.isArray(variables)

//Challenges
//1
let x = 10;
let y = 3;
console.log(x + y); //13
console.log(x - y); //7
console.log(x * y); //30
console.log(x / y); //3.(3)
console.log(x % y); //1
console.log(x ** y); //1000

//2
console.log(5 == "5"); //true
console.log(5 === "5"); //false
console.log(7 != "7"); //false
console.log(7 !== "7"); //false
console.log(3 > 5); //false
console.log(3 <= 3); //true

//3
console.log(true && false); //false
console.log(false || true); //true
console.log(!false); //true
console.log(5 > 3 && 2 < 1); //false
console.log(5 === 5 || 3 === 4); //true
