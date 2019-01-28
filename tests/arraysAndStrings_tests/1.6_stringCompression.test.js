const expect = require('chai').expect
const stringCompression = require('../../arrays_and_strings/1_6_stringCompression');

describe('stringCompression', () => {
  //should return shortened string
  const testCase1 = 'aabcccccaaa';
  const testCase2 = 'XXXxxxyyyzzzaaaYYbb'
  //should return original string
  const testCase3 = 'abcdefghi';

  it('should compress original string', () => {
    expect(stringCompression(testCase1)).to.equal('a2b1c5a3');
    expect(stringCompression(testCase2)).to.equal('X3x3y3z3a3Y2b2');
  })
  it('should return original string if compressedString.length > originalString.length', () => {
    expect(stringCompression(testCase3)).to.equal(testCase3)
  })
})