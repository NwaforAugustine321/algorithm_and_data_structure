// a node is the smallest unit of a tree which contains a data[this can be in any [type]
// it also contains a link to next node otherwise known as edges

// linked list is an array like structure that doesn't that is  not indexed. 
// it has a head, tail and length attributes

class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class singleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
