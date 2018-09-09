const singlyLinkedListCode = require('../../linkedLists/singlyLinkedList');
const expect = require('chai').expect;

describe('Singly Linked List',()=>{
  let list;

  // console.log(singlyLinkedListCode);

  beforeEach(()=>{
    list = new singlyLinkedListCode.SinglyLinkedList();

  })

  describe('Node class constructor',()=>{
    it('should create a Node',()=>{
      let newNode = new singlyLinkedListCode.Node();
      expect(newNode).to.exist;
    })
    it('should assign parameters',()=>{
      let newNode = new singlyLinkedListCode.Node(3);
      expect(newNode.val).to.equal(3);
      
      newNode = new singlyLinkedListCode.Node(4);
      expect(newNode.val).to.equal(4);
    })
  })

  describe('Singly Linked List class constructor',()=>{
    it('creates objects with properties head, tail, and length',()=>{
      expect(list.hasOwnProperty('head')).to.equal(true);
      expect(list.hasOwnProperty('tail')).to.equal(true);
      expect(list.hasOwnProperty('length')).to.equal(true);
    })
    it('initially, object properties should be blank',()=>{
      expect(list.head).to.equal(null);
      expect(list.tail).to.equal(null);
      expect(list.length).to.equal(0);
    })
  })

  describe('push method',()=>{
    it('update the length with each call',()=>{
      console.log('this is list',list);
      list.push(2);
      console.log('after this is list',list);
      expect(list.length).to.equal(1);
      
      list.push(4);
      expect(list.length).to.equal(2);
      
      list.push(7);
      expect(list.length).to.equal(3);
    })

    xit('updates the head pointer',()=>{
      list.push(3);
      expect(list.head.val).to.equal(3);
      expect(list.head.next).to.not.exist;
      
      list.push(5);
      expect(list.head.val).to.equal(3);
      expect(list.head.next.val).to.equal(5);
      
      list.push(8);
      expect(list.head.val).to.equal(3);
      expect(list.head.next.val).to.equal(5);
    })

    xit('always points the tail to the most recently pushed item',()=>{
      list.push(1);
      expect(list.tail.val).to.equal(1);
      expect(list.tail.next).to.not.exist;
      
      list.push(2);
      expect(list.tail.val).to.equal(2);
      expect(list.tail.next).to.not.exist;
      
      list.push(3);
      expect(list.tail.val).to.equal(3);
      expect(list.tail.next).to.not.exist;
    })

    xit('properly updates head.next on lists of size === 1',()=>{
      list.push(1);
      expect(list.head.next).to.not.exist;

      list.push(4);
      expect(list.head.next.val).to.equal(4)
    })

    xit('returns self so method-chaining works',()=>{
      expect(list.length).to.equal(0);
      list.push(1).push(2);
      expect(list.length).to.equal(2);
    })
  })

})