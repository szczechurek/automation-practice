//Challenge 1
const book = {
  title: "The Hobbit",
  author: "Tolkien",
  year: 1937,
  pages: 310,
};
console.log(book.title);
console.log(book.author);

book.language = "English";
delete book.year;

for (let key in book) {
  console.log(key, ":", book[key]);
}

//Challenge 2
const user = {
  name: "Anna",
  age: 28,
  address: {
    city: "Warsaw",
    zip: "00-001",
    street: "Main St 123",
  },
};
console.log(user.address.city);
console.log(user.address);

user.address.country = "Poland";
console.log(user.address);

//Challenge 3
const student = {
  name: "Marek",
  grades: [5, 4, 3, 5],
};
console.log(student.name);
console.log(student.grades[1]);
student.grades.push(4);

let total = 0;
for (let grade of student.grades) {
  total += grade;
}
let average = total / student.grades.length;
console.log("Average Grade: ", average);

//Challenge 4
const team = {
  frontend: { name: "Alice", experience: 3 },
  backend: { name: "Bob", experience: 5 },
  qa: { name: "Charlie", experience: 2 },
};
console.log(team.qa.name);
team.backend.experience = 6;
team.devops = { name: "Dana", experience: 4 };

for (let key in team) {
  console.log(key, ":", team[key]);
}

//Challenge 5
const product = {
  name: "Laptop",
  price: 3500,
  inStock: true,
  discount: null,
  tags: ["electronics", "computers"],
};

console.log(product.name, product.price);
delete product.discount;
product.tags.push("bestseller");
console.log(product.tags);
