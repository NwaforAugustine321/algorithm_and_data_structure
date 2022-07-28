// a node is the smallest unit of a tree which contains a data[this can be any [type].
// it also contains a link to the next node otherwise known as edges.

// linked list is an array like structure that doesn't have index. 
// it has a head, tail and length attributes.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

const singleLinkedList = new SingleLinkedList();
singleLinkedList.push('first')
singleLinkedList.push('second')
singleLinkedList.push('third')
singleLinkedList.push('fourth')
singleLinkedList.pop('fourth')
singleLinkedList.pop('fourth')
console.log(singleLinkedList);