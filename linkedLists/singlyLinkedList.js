class Node{
  constructor(val,next = null){
    this.val = val;
    this.next = next;
  }
};

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
};

SinglyLinkedList.prototype.push = (val)=> {
  let newNode = new Node(val);
  // console.log('this is newNode',newNode)

  if ( !this.head ) {
    console.log('bingo!');
    this.head = newNode;
    this.tail = this.head;
  }
  console.log(this)

  this.length++;
  return this;

  //handles first insertion point
  // if ( this.tail === null ) {
  //   this.head = val;
  // } else {
  //   //make the tail point to the old head
  //   this.tail.next = this.head;
  //   //replace the old head w/ new head
  //   this.head = val;
  // }
  // this.length++;
};

SinglyLinkedList.prototype.__getNodeAt = (index)=> {
};

SinglyLinkedList.prototype.clear = ()=> {
};

SinglyLinkedList.prototype.pop = ()=> {
};

SinglyLinkedList.prototype.unshift = (val)=> {
};

SinglyLinkedList.prototype.shift = ()=> {
};

SinglyLinkedList.prototype.get = (index)=> {
};

SinglyLinkedList.prototype.set = (index, val)=> {
};

SinglyLinkedList.prototype.remove = (index)=> {
};

SinglyLinkedList.prototype.reverse = ()=> {
};

module.exports = {Node,SinglyLinkedList};
