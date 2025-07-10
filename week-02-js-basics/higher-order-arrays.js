//Transform each item (map)-takes an array and returns new array where each item is transformed
const numbers = [1, 2, 3];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled);

const prices = [100, 200, 300];
const pricesWithTax = prices.map(function (num) {
  return num * 1.1;
});
console.log(pricesWithTax);

//Filter items(filter)-returns a new array with only the item that match a condition
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const prices1 = [99, 150, 220, 80, 300];
const premiumPrices = prices1.filter((num) => num >= 100);
console.log(premiumPrices);

//Combine all items into one(reduce)- processes all items in an array and reduces them to a single value
const numbers2 = [10, 20, 30];
const total = numbers2.reduce((acc, num) => acc + num, 0);
console.log(total);

const prices2 = [100, 150, 200];
const totalPrice = prices2.reduce((acc, num) => acc + num, 0);
console.log(totalPrice);

//Search(find)- returns the first element in the array that passes the test
const users = [
  { name: "Anna", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];
const userOver25 = users.find((user) => user.age > 25);
console.log(userOver25);

//Check conditions(every, some)
const score1 = [80, 90, 85];
const allPassed = score1.every((score) => score >= 70);
console.log(allPassed);

const score = [50, 60, 85];
const somePassed = score.some((score) => score >= 70);
console.log(somePassed);

const numbers3 = [5, 12, 8, 130, 44];
const firstNumberGreaterThan10 = numbers3.find((num) => num > 10);
console.log(firstNumberGreaterThan10);
const allNumbersGreaterThan4 = numbers3.every((num) => num > 4);
console.log(allNumbersGreaterThan4);
const anyNumberGreaterThan100 = numbers3.some((num) => num > 100);
console.log(anyNumberGreaterThan100);
