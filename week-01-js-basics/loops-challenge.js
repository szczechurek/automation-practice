//1
for (let i = 0; i <= 20; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

//2
const arr = [1, 2, 3];
const sum = arr.reduce((acc, n) => acc + n, 0);
console.log(sum);

//3
function toUpper(arr) {
  return arr.map((str) => str.toUpperCase());
}
console.log(toUpper(["anna", "rob", "max"]));

//4
function countPositive(arr) {
  let count = 0;
  for (let num of arr) {
    if (num > 0) {
      count++;
    }
  }
  return count;
}
console.log(countPositive([-2, 0, 3, 5, -1]));

//5
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
