//Conditional statement

// if (condition) {
//   //execute some code here
// } else {
//   //execute some code here
// }

// If hour between 6 and 12 print "Good Morning"
//If hour between 12 and 18 print "Good Afternoon"
//Otherwise print "Good Evening"
let hour = 5;

if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

let ageIsMoreThanEighteen = true;
let isUSCitizen = false;

if (ageIsMoreThanEighteen && isUSCitizen) {
  console.log("Customer is eligible for DL");
} else {
  console.log("Customer is NOT eligible dor DL");
}

//Comparison operators
// === equal value & type
// !== not equal (strict)
// > greater than
// < less than
// >= greater or equal
// <= less or equal

let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Keep trying!");
}

//JavaScript Falsy Values
//false - the boolean false
//0 - the number 0
//"" - empty string
//null - null means no value
//undefined - variable declared but not assigned
//nan - not a number

//JavaScript Truthy Values
//"0" - not empty string even 0
//"false" - not empty string
//" " - string with space
//{} - empty object
//[] - empty array
//any number other than 0

function checkTruthiness(value) {
  if (value) {
    console.log(`${JSON.stringify(value)} is TRUTHY`);
  } else {
    console.log(`${JSON.stringify(value)} is FALSY`);
  }
}

checkTruthiness(false);
checkTruthiness(0);
checkTruthiness("");
checkTruthiness(null);
checkTruthiness(undefined);
checkTruthiness(NaN);
checkTruthiness("0");
checkTruthiness("false");
checkTruthiness(" ");
checkTruthiness({});
checkTruthiness([]);
checkTruthiness(42);
checkTruthiness(-1);
