//Implement an algorithm to determine if a string has all unique characters.  
//What if you cannot use additional data structures?

//repeats c
const testCase1 = 'crackingthecodinginterview';
//no repeats
const testCase2 = 'abcdefghijklmnopqrstuvwxyz';

//repeats q
const testCase3 = 'abcdefghijklmnoqqrstuvwxyz';

//interesting observations --> only ASCII characters means a string over length 128 means repeats MUST EXIST
//Including UNICODE characters, the set grows to ~135k unique characters.  ~1000+ Multilingual European character sets.

function isUnique(string){
  let hashTable = {};

  for ( let i = 0; i < string.length; i++ ) {
    if ( !hashTable.hasOwnProperty(string[i]) ) {
      hashTable[string[i]] = true;
    } else {
      return false
    }
  }
  return true;
}

console.log(isUnique(testCase1))
console.log(isUnique(testCase2))
console.log(isUnique(testCase3))

//time complexity  --> O(n)
//space complexity --> O(1)