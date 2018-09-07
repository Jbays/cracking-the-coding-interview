const expect = require('chai').expect
const isUnique = require('../arrays_and_strings/1_1_isUnique');

describe('isUnique',()=>{
  //repeats c
  const testCase1 = 'crackingthecodinginterview';
  //repeats q
  const testCase2 = 'abcdefghijklmnoqqrstuvwxyz';
  //no repeats
  const testCase3 = 'abcdefghijklmnopqrstuvwxyz';
  it('should return false if input string has all unique characters',()=>{
    expect(isUnique(testCase1)).to.equal(false);
    expect(isUnique(testCase2)).to.equal(false);
  })
  it('should return true if input string has all unique characters',()=>{
    expect(isUnique(testCase3)).to.equal(true);
  })
})