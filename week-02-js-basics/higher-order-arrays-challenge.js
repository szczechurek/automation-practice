//Challenge 1
const nums = [3, 7, -2, 9, -5, 1];
const firstNegative = nums.find((num) => num < 0);
console.log(firstNegative);

//Challenge 2
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
];
const allUsersOverEighteen = users.every((user) => user.age >= 18);
console.log(allUsersOverEighteen);

//Challenge 3
const scores = [88, 92, 45, 70, 55];
const anyScoreBelow50 = scores.some((score) => score < 50);
console.log(anyScoreBelow50);

//Challenge 4
const products = [
  { id: 1, name: "Shirt", onSale: false },
  { id: 2, name: "Pants", onSale: true },
  { id: 3, name: "Shoes", onSale: false },
];
const firstOnSale = products.find((product) => product.onSale === true);
console.log(firstOnSale);

//Challenge 5
const tasks = [
  { id: 1, title: "Laundry", completed: true },
  { id: 2, title: "Dishes", completed: false },
  { id: 3, title: "Vacum", completed: true },
];
const allTasksCompleted = tasks.every((task) => task.completed);
console.log(allTasksCompleted);
