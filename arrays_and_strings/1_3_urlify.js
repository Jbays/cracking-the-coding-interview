/*
  Write a method to replace all spaces in a string with "%20".
  You may assume that the string has sufficient space at the end to
  hold additional characters, and that you are given the true length of the string.
*/

const testCase1 = "Mr John Smith";
const testCase2 = "how much would a woodchuck chuck if a woodchuck could chuck wood";

function urlify(string){
  return string.split(' ').join('%20');
}

// console.log(urlify(testCase1));
// console.log(urlify(testCase2));