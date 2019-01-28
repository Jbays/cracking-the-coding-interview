const SinglyLinkedList = require('./singlyLinkedList').SinglyLinkedList;


SinglyLinkedList.prototype.removeDups = function(){
  if ( this.head !== null ) {
    return removeDupHelper(this.head,{});
  } 
  console.log('hello from removeDups!');
  
  return null;

  function removeDupHelper(node,hash){
    if ( !hash.hasOwnProperty(node.val) ) {
      console.log('node.val>>>',node.val)
      hash[node.val] = 1;
    } else {
      
      console.log('probably duplicate!');
      console.log('this is hash',hash);
      console.log('this is your node',node);

    }

    while ( node.next !== null ) {
      return removeDupHelper(node.next,hash);
    }

    // console.log('this>>>',JSON.stringify(this,null,2));
  }
}

module.exports = SinglyLinkedList;