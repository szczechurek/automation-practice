//1
function isEven(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
isEven(20);
isEven(9);

//2

function checkAge(age) {
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
}
checkAge(18);
checkAge(16);
//3
function gradeLetter(score) {
  if (score >= 90) {
    console.log("A");
  } else if (score < 90 && score >= 80) {
    console.log("B");
  } else if (score < 80 && score >= 70) {
    console.log("C");
  } else {
    console.log("F");
  }
}
gradeLetter(95);
gradeLetter(80);
gradeLetter(72);
gradeLetter(50);
//4
function isPositive(value) {
  if (value > 0) {
    console.log("Positive");
  } else if (value < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}
isPositive(18);
isPositive(-5);
isPositive(0);

//5
function canVote(age) {
  if (age >= 18) {
    console.log("Can vote");
  } else {
    console.log("Cannot vote");
  }
}
canVote(25);
canVote(18);
canVote(17);
