class Stack {
    constructor(stackSize) {
        this.items = [];    // array to hold the stack elements
        this.stackSize = stackSize; // maximum size of the stack
    }
    push(element) {
        if(this.items.length < this.stackSize) {
            this.items.push(element); // add element to the top of the stack using push array js function. 
            console.log("Element added in stack: " + element);
        }else {
            console.log("Stack overflow! Cannot add element: " + element);
        }
    }
    pop() {
        if(this.items.length > 0) {
            let removedElement = this.items.pop();
            console.log("Element removed from stack: " + removedElement);  
        } else {
            console.log("Stack underflow! No elements to remove.");
        }
    }
    peek() {
        if(this.items.length > 0) {
            let topElement = this.items[this.items.length - 1]; // get the top element without removing it
            console.log("Top element in stack: " + topElement);
        }else {
            console.log("Stack is empty! No elements to peek.");
        }
    }
    size() {
        return this.items.length; // return the current size of the stack
    }
}

let stack = new Stack(5);
console.log("Current stack size: " + stack.size()); // print the current size of the stack
stack.peek();
stack.pop();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.push(500);
stack.peek();
stack.push(600); // This will trigger stack overflow message
stack.pop();        // remove the top element (500)
stack.pop();        // remove the next top element (400)
stack.pop();        // remove the next top element (300)
stack.peek();       // peek the current top element (200)
console.log("Current stack size: " + stack.size()); // print the current size of the stack