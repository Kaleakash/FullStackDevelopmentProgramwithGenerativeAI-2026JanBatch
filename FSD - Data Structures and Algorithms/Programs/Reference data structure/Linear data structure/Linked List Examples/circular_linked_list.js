class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Append a node to the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
    this.size++;
  }

  // Prepend a node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      newNode.next = this.head;
      this.head = newNode;
      current.next = this.head;
    }
    this.size++;
  }

  // Insert a node at a specific index
  insertAt(index, data) {
    if (index < 0 || index > this.size) return false;
    if (index === 0) return this.prepend(data);
    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
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
      if (this.size === 1) {
        this.head = null;
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        this.head = this.head.next;
        current.next = this.head;
      }
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      removedNode = current.next;
      current.next = current.next.next;
    }
    this.size--;
    return removedNode.data;
  }

  // Search for a value in the list
  search(data) {
    if (!this.head) return -1;
    let current = this.head;
    let index = 0;
    do {
      if (current.data === data) return index;
      current = current.next;
      index++;
    } while (current !== this.head);
    return -1;
  }

  // Print the list
  print() {
    if (!this.head) {
      console.log('List is empty');
      return;
    }
    let current = this.head;
    let result = [];
    do {
      result.push(current.data);
      current = current.next;
    } while (current !== this.head);
    console.log(result.join(' -> ') + ' -> (back to head)');
  }
}

// Example usage
const cll = new CircularLinkedList();
cll.append(10);
cll.append(20);
cll.prepend(5);
cll.insertAt(2, 15);
cll.print(); // 5 -> 10 -> 15 -> 20 -> (back to head)
console.log('Search 15:', cll.search(15)); // 2
cll.removeAt(2);
cll.print(); // 5 -> 10 -> 20 -> (back to head)