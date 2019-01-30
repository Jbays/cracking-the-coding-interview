const expect = require('chai').expect;
const sortedMerge = require('../../ch10.sortingAndSearching/10.1_sortedMerge.js');

describe('10.1 Sorted Merge tests',()=>{
  it('sorted Merge should merge two sorted arrays',()=>{
    let evens = [0,2,4,6,8,10];
    let odds = [1,3,5,7,9,11];

    expect(sortedMerge(evens,odds)).to.equal([0,1,2,3,4,5,6,7,8,9,10,11]);
  })
})