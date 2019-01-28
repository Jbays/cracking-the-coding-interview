const expect = require('chai').expect
const checkPermutations = require('../../arrays_and_strings/1_2_checkPermutations');

describe('checkPermutations', () => {
  //true
  const testCase1 = 'abcd';
  const testCase2 = 'dcab';

  //false
  const testCase3 = 'potatoz';
  const testCase4 = 'potatozb';
  
  it('should return true if input strings are permutations of each other', () => {
    expect(checkPermutations(testCase1,testCase2)).to.equal(true);
    // expect(checkPermutations(testCase2)).to.equal(false);
    // expect(checkPermutations(testCase3)).to.equal(true);
  });
  it('should return false if input strings are NOT permutations of each other', () => {
    expect(checkPermutations(testCase3,testCase4)).to.equal(false);
  })
})