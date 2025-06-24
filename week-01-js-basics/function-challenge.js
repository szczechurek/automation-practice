function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else {
    return number;
  }
}
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));

function isPalindrome(word) {
  const normalized = word.toLowerCase().replace(/\s+/g, "");

  const reversed = normalized.split("").reverse().join("");
  if (normalized === reversed) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("Race car"));
console.log(isPalindrome("hello"));

function getMax(a, b) {
  if (b > a) {
    return b;
  } else {
    return a;
  }
}
console.log(getMax(5, 10));
console.log(getMax(20, 3));
console.log(getMax(7, 7));

function countVowels(str) {
  const lower = str.toLowerCase();
  const vowels = "aeiou";
  let count = 0;

  for (let char of lower) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript"));
console.log(countVowels("Sky"));
