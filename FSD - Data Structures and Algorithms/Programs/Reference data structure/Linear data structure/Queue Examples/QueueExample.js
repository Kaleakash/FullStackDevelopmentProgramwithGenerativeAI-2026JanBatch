class Queue {
    constructor(size) {
        this.item = [];
        this.size = size;
    }
    enqueue(element) {
        if(this.item.length < this.size) {
            this.item.push(element);
            console.log("Element added in queue : "+element);
        }else {
            console.log("Queue is full");
        }
    }
    dequeue() {
        if(this.item.length > 0) {
            let element = this.item.shift();    // remove the first element from the queue using shift() method
            console.log("Element removed from queue : "+element);
        }else {
            console.log("Queue is empty");
        }
    }
    peek() {
        if(this.item.length > 0) {
            console.log("Element at the front of the queue : "+this.item[0]);
        }else {
            console.log("Queue is empty");
        }
    }
    sizeOfQueue() {
        console.log("Size of the queue : "+this.item.length);
    }
}

let queue = new Queue(5);
queue.sizeOfQueue(); // Size of the queue : 0
queue.dequeue(); // Queue is empty
queue.peek(); // Queue is empty
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.sizeOfQueue(); // Size of the queue : 5
queue.enqueue(60);// Queue is full
queue.sizeOfQueue(); // Size of the queue : 5
queue.peek(); // Element at the front of the queue : 10
queue.dequeue();    // Element removed from queue : 10
queue.dequeue();    // Element removed from queue : 20
queue.dequeue();    // Element removed from queue : 30
queue.sizeOfQueue(); // Size of the queue : 2
queue.peek(); // Element at the front of the queue : 40
queue.dequeue();    // Element removed from queue : 40
queue.dequeue();    // Element removed from queue : 50
queue.dequeue(); // Queue is empty