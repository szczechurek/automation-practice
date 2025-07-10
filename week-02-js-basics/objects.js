// const objectName = {
//   key1: value1,
//   key2: value2,
//   key3: value3,
// };

const book = {
  title: "The Hobbit",
  author: "Tolkien",
  year: 1937,
};

//How to acces objects values

//Dot notation (most common)

console.log(book.title); //'The Hobbit'

//Bracket notation (useful for dynamic keys)

console.log(book["author"]); //'Tolkien'

//How to modify an object

//Add a key
book.pages = 300;

//Change's key's value
book.year = 1950;

//Delete a key
delete book.year;

//Looping through an Object

for (let key in book) {
  console.log(key, ":", book[key]);
}
