/*
  Given two strings, 
    write a method to decide if one is a permutation of the other.
*/

//true
const testCase1 = 'abcd';
const testCase2 = 'dcab';

//false
const testCase3 = 'potatoz';
const testCase4 = 'potatozb';

function checkPermutations(str1,str2){
  str1 = str1.split('').sort((a,b)=>{return a.localeCompare(b)}).join('');
  str2 = str2.split('').sort((a,b)=>{return a.localeCompare(b)}).join('');

  return str1 === str2;
}

// console.log(checkPermutations(testCase1,testCase2))
// console.log(checkPermutations(testCase3,testCase4))