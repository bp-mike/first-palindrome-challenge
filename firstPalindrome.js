// problem Statement
/*
    Write a function named firstPalindrome which takes a parameter:
    words. Given an array of strings words, return the first palindromic
    string in the array. If there is no such string, return an empty string "".
    A string is palindromic if it reads the same forward and backward.
*/
function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  // console.log(reversedWord)
  return word === reversedWord;
}
// isPalindrome("level");

function firstPalindrome(words) {
  for (let word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }
  return "";
}

let words = ["abc", "cool", "hello", "racecar", "world"];
let result = firstPalindrome(words);
console.log(result);
