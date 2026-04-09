class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SingleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(value) {
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;   // if the list is empty, set head to the new node
        }else {
            let current = this.head;
            while (current.next!=null) {  // traverse to the end of the list
                current = current.next;
            }
            current.next = node;  // add the new node at the end
        }
        this.size++;
    }
    prepend(value) {
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;   // if the list is empty, set head to the new node
        }else {
            node.next = this.head;  // point the new node to the current head
            this.head = node;       // update head to the new node
        }
        this.size++;
    }
    display() {
        let current = this.head;
        while(current != null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let list = new SingleLinkedList();
list.append(100);
list.append(200);
list.append(300);
list.prepend(50);
//console.log(list);
list.display(); // 50, 100, 200, 300
