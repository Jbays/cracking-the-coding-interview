class Node{
  constructor(val,next = null){
    this.val = val;
    this.next = next;
  }
};

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.length = 0;
  }

  appendNodeToTail(value){
    let attachNewNode = new Node(value)
    if ( this.head === null ) {
      this.head = attachNewNode;
    } else {
      if ( this.head.next === null ) {
        this.head.next = attachNewNode;
      } else {
        this.appendNodeHelper(this.head.next,attachNewNode);
      }
    }
    this.length++;
  }

  appendNodeHelper(node,attachNode){
    while ( node.next !== null ) {
      return this.appendNodeHelper(node.next,attachNode);
    }

    node.next = attachNode;
  }

  deleteNodeOfVal(value){
    if ( this.head.next === null ) {
      this.head = null;
      this.length--;
    } else {
      this.deleteNodeHelper(this.head.next,value);
    }
  }

  deleteNodeHelper(node,searchVal){
    if ( node.val === searchVal ) {
      if ( node.next === null ) {
        node.val = null;
        delete node.next;
      } else {
        node.val = node.next.val;
        node.next = node.next.next ? node.next.next : null;
      }
      this.length--;
      return node;
    }

    while ( node.next !== null ) {
      return this.deleteNodeHelper(node.next,searchVal);
    }

    return null;
  }
};

module.exports = {Node,SinglyLinkedList};
