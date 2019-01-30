/*
  Given two strings, 
    write a method to decide if one is a permutation of the other.
*/

//time complexity O(n*m) --> where n is str1.length && m is str2.length
//space complexity 0(1)
function checkPermutations(str1,str2){
  str1 = str1.split('').sort((a,b)=>{return a.localeCompare(b)}).join('');
  str2 = str2.split('').sort((a,b)=>{return a.localeCompare(b)}).join('');

  return str1 === str2;
}

module.exports = checkPermutations;