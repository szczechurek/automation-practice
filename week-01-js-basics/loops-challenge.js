// //1
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }

// //2
// const arr = [1, 2, 3];
// const sum = arr.reduce((acc, n) => acc + n, 0);
// console.log(sum);

// //3
// function toUpper(arr) {
//   return arr.map((str) => str.toUpperCase());
// }
// console.log(toUpper(["anna", "rob", "max"]));

// //4
// function countPositive(arr) {
//   let count = 0;
//   for (let num of arr) {
//     if (num > 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countPositive([-2, 0, 3, 5, -1]));

// //5
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

//6
const reverseArray = (arr) => {
  const result = arr.reverse();

  return result;
};
const result = reverseArray([1, 2, 3]);
console.log(result);

//7

const testFunction = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
testFunction();

//change 'for' for the map

// challenge 1 for/while/for...of

for (let i = 1; i <= 10; i++) {
  console.log("Number: ", i);
}

let i = 1;
while (i <= 10) {
  console.log("Number: ", i);
  i++;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
  console.log("Number: ", number);
}

// challenge 2 loop through array and print every item

const fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}

// challenge 3 loop over keys property names in an object

const person = { name: "Anna", age: 25, city: "Warsaw" };

for (let key in person) {
  console.log(key, ":", person[key]);
}
