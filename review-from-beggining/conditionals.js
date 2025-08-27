let num = 10;

if (num > 10) {
  console.log("Greater than 10");
} else if (num === 10) {
  console.log("Equal to 10");
} else {
  console.log("Less than 10");
}
//Output will be Equal to 10

//2
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Other day");
}
//output will be wednesday, thursday

//Challenge 1 - chjeck if number is positive negative or zero

let number = 5;

if (number > 0) {
  console.log("positive");
} else if (number === 0) {
  console.log("zero");
} else {
  console.log("negative");
}

//Challenge 2 - grade a student based on their score

let score = 79.5;
if (score >= 90) {
  console.log("A");
} else if (score >= 80 && score < 90) {
  console.log("B");
} else if (score >= 70 && score < 80) {
  console.log("C");
} else if (score >= 60 && score < 70) {
  console.log("D");
} else {
  console.log("F");
}
