/*
  Implement a method to perform basic string compression
  using the counts of repeated characters.  
  
  For example, the string `aabcccccaaa` would become a2b1c5a3.

  If the "compressed" string would not become smaller than the original string,
  your method should return the original string.

  You can assume the string has only uppercase and lowercase letters (a-z).
*/

//should return shortened string
const testCase1 = 'aabcccccaaa';
const testCase3 = 'XXXxxxyyyzzzaaaYYbb'

//should return original string
const testCase2 = 'abcdefghi';

function stringCompression(string){
  let record = {};
  let output = '';

  for ( let i = 0; i < string.length; i++ ) {
    if ( !record.hasOwnProperty(string[i]) ){
      record[string[i]] = 1;
    }

    if ( string[i] === string[i-1] ){
      record[string[i]]++;
    }

    //if current character is not equal to previous
    if ( string[i] !== string[i-1] && string[i-1] ) {
      //write previous char / value to output
      output += string[i-1]+record[string[i-1]];
    
      //if current char already has key/val pair in record
      if ( record.hasOwnProperty(string[i]) ) {
        record[string[i]] = 1;
      }
    }

    if ( i === string.length-1 ) {
      output += string[i]+record[string[i]];
    }
  }
  return output.length < string.length ? output : string;
}

// console.log(stringCompression(testCase1));
// console.log(stringCompression(testCase2));
// console.log(stringCompression(testCase3));