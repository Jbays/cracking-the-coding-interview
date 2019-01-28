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
};

module.exports = {Node,SinglyLinkedList};
