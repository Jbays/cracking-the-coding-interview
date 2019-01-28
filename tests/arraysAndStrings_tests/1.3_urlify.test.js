const expect = require('chai').expect
const urlify = require('../../arrays_and_strings/1_3_urlify');

describe('urlify', () => {
  const testCase1 = "Mr John Smith";
  const testCase2 = "how much would a woodchuck chuck if a woodchuck could chuck wood";

  it('should convert all spaces into `%20`', () => {
    expect(urlify(testCase1)).to.equal('Mr%20John%20Smith');
    expect(urlify(testCase2)).to.equal('how%20much%20would%20a%20woodchuck%20chuck%20if%20a%20woodchuck%20could%20chuck%20wood');
  })
})