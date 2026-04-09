class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Append a node to the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  // Prepend a node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  // Insert a node at a specific index
  insertAt(index, data) {
    if (index < 0 || index > this.size) return false;
    if (index === 0) return this.prepend(data);
    if (index === this.size) return this.append(data);

    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    newNode.prev = current;
    current.next.prev = newNode;
    current.next = newNode;
    this.size++;
    return true;
  }

  // Remove a node at a specific index
  removeAt(index) {
    if (index < 0 || index >= this.size) return null;
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
    } else if (index === this.size - 1) {
      removedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      removedNode = current;
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.size--;
    return removedNode.data;
  }

  // Search for a value in the list
  search(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  // Print the list
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(' <-> '));
  }
}

// Example usage
const dll = new DoubleLinkedList();
dll.append(10);
dll.append(20);
dll.prepend(5);
dll.insertAt(2, 15);
dll.print(); // 5 <-> 10 <-> 15 <-> 20
console.log('Search 15:', dll.search(15)); // 2
dll.removeAt(2);
dll.print(); // 5 <-> 10 <-> 20