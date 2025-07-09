// Challenge 1
const food = ["pizza", "pasta", "sushi", "dumplings", "steak"];
console.log(food[2]);
food[0] = "burger";
console.log(food);

// Challenge 2
const food2 = ["pizza", "pasta", "sushi", "dumplings", "steak"];
food2.push("burger", "ribs");
console.log(food2);
food2.pop();
console.log(food2);

// Challenge 3
const food3 = ["pizza", "pasta", "sushi", "dumplings", "steak"];
food3.unshift("ribs");
console.log(food3);
food3.shift();
console.log(food3);

// Challenge 4
const food4 = ["pizza", "pasta", "sushi", "dumplings", "steak"];
food4.splice(1, 2, "ribs");
console.log(food4);

// Challenge 5
const food5 = ["pizza", "pasta", "sushi", "dumplings", "steak"];
const firstThree = food5.slice(0, 3);
console.log(firstThree);
console.log(food5);
