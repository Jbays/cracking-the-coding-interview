const singlyLinkedListCode = require('../../linkedLists/singlyLinkedList');
const expect = require('chai').expect;

describe('Singly Linked List',()=>{
  describe('Node class constructor',()=>{
    it('should create a Node',()=>{
      let newNode = new singlyLinkedListCode.Node();
      expect(newNode).to.exist;
    });
    it('should assign parameters',()=>{
      let newNode = new singlyLinkedListCode.Node(3);
      expect(newNode.val).to.equal(3);
      
      newNode = new singlyLinkedListCode.Node(4);
      expect(newNode.val).to.equal(4);
    });
  });

  describe('SinglyLinkedList class constructor',()=>{
    let myLinkedList = new singlyLinkedListCode.SinglyLinkedList();
    it('creates objects with properties head and length',()=>{
      expect(myLinkedList.hasOwnProperty('head')).to.equal(true);
      expect(myLinkedList.hasOwnProperty('length')).to.equal(true);
    });
    it('initially, object properties should be blank',()=>{
      expect(myLinkedList.head).to.equal(null);
      expect(myLinkedList.length).to.equal(0);
    });
  });

  describe('SinglyLinkedList methods',()=>{
    describe('appendNodeToTail method should',()=>{
      it('add new node when SinglyLinkedList is blank',()=>{
        let myLinkedList = new singlyLinkedListCode.SinglyLinkedList();
        expect(myLinkedList.head).to.equal(null);
        myLinkedList.appendNodeToTail(3);
        expect(myLinkedList.head.val).to.equal(3);
      });
      it('increment length count',()=>{
        let myLinkedList = new singlyLinkedListCode.SinglyLinkedList();
        expect(myLinkedList.length).to.equal(0);
        myLinkedList.appendNodeToTail(3);
        expect(myLinkedList.length).to.equal(1);
        myLinkedList.appendNodeToTail(5);
        expect(myLinkedList.length).to.equal(2);
      });
      it('add new nodes',()=>{
        let myLinkedList = new singlyLinkedListCode.SinglyLinkedList();
        myLinkedList.appendNodeToTail(3);
        myLinkedList.appendNodeToTail(5);
        myLinkedList.appendNodeToTail(7);
        myLinkedList.appendNodeToTail(9);
        expect(myLinkedList.head.next.val).to.equal(5);
        expect(myLinkedList.head.next.next.val).to.equal(7);
        expect(myLinkedList.head.next.next.next.val).to.equal(9);
        expect(myLinkedList.length).to.equal(4);
      });
    });
    describe('deleteNodeOfVal method should',()=>{
      it('remove the node in a singlyLinkedList of length 1',()=>{
        let myLinkedList = new singlyLinkedListCode.SinglyLinkedList();
        myLinkedList.appendNodeToTail(3);
        myLinkedList.deleteNodeOfVal(3);
        expect(myLinkedList.head).to.equal(null);
        expect(myLinkedList.length).to.equal(0);
      });
      it('remove the node with value equal to input val',()=>{
        let myLinkedList = new singlyLinkedListCode.SinglyLinkedList();
        myLinkedList.appendNodeToTail(3);
        myLinkedList.appendNodeToTail(5);
        myLinkedList.appendNodeToTail(7);
        myLinkedList.appendNodeToTail(9);
        myLinkedList.deleteNodeOfVal(5);
        expect(myLinkedList.head.val).to.equal(3);
        expect(myLinkedList.head.next.val).to.equal(7);
        expect(myLinkedList.head.next.next.val).to.equal(9);
        expect(myLinkedList.length).to.equal(3);
      });
      it('search the whole linkedList for value',()=>{
        let myLinkedList = new singlyLinkedListCode.SinglyLinkedList();
        myLinkedList.appendNodeToTail(3);
        myLinkedList.appendNodeToTail(5);
        myLinkedList.appendNodeToTail(7);
        myLinkedList.appendNodeToTail(9);
        myLinkedList.deleteNodeOfVal(9);
        expect(myLinkedList.head.val).to.equal(3)
        expect(myLinkedList.head.next.val).to.equal(5)
        expect(myLinkedList.head.next.next.val).to.equal(7)
        expect(myLinkedList.length).to.equal(3);
      })

      it('delete NOTHING if value not in linkedList',()=>{
        let myLinkedList = new singlyLinkedListCode.SinglyLinkedList();
        myLinkedList.appendNodeToTail(3);
        myLinkedList.appendNodeToTail(5);
        myLinkedList.appendNodeToTail(7);
        myLinkedList.appendNodeToTail(9);

        expect(myLinkedList.length).to.equal(4);
      })
    });
  });


})