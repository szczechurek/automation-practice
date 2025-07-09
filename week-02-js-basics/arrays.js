const car = ["Volvo", "Toyota", "Tesla"];
car[1] = "BMW";
console.log(car[1]);

const foods = ["pizza", "pasta", "sushi"];
const empty = []; //empty array

console.log(foods[1]);
console.log(foods[2]);

foods[0] = "burger";
console.log(foods);

//Array Methods You Should Know
// .push() - adds to end - foods.push('taco')
// .pop() - removes from end - foods.pop()
// .unshift() - adds to start - foods.unshift('salad')
// .shift() - removes from start - foods.shift()
// .slice() - copies part of array (non-destructive) - foods.slice(1, 3)
// .splice() - adds/remove items (destructive) - foods.slice(1, 1, 'wrap')
// .indexOf() - finds the index of value - foods.indexOf('pasta')
