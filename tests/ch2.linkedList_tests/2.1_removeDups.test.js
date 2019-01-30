const expect = require('chai').expect
const SinglyLinkedList = require('../../linkedLists/2.1_removeDups');

describe('removeDups method should', () => {
  it('remove duplicate values from linkedList',()=>{
    let myLinkedList = new SinglyLinkedList();
    myLinkedList.appendNodeToTail(3);
    myLinkedList.appendNodeToTail(5);
    myLinkedList.appendNodeToTail(7);
    myLinkedList.appendNodeToTail(5);
    myLinkedList.removeDups()
    expect(myLinkedList.length).to.equal(3);
  });
  
  it('should remove all non-head duplicate values',()=>{
    let myLinkedList = new SinglyLinkedList();
    myLinkedList.appendNodeToTail(8);
    myLinkedList.appendNodeToTail(2);
    myLinkedList.appendNodeToTail(2);
    myLinkedList.appendNodeToTail(2);
    myLinkedList.appendNodeToTail(9);
    myLinkedList.removeDups()
    expect(myLinkedList.length).to.equal(2);
  });
  
})