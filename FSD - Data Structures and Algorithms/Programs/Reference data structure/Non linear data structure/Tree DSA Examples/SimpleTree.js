class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
let root = new Node(100);
let parent1 = new Node(50);
let parent2 = new Node(150);
let parent3 = new Node(25);
let child1 = new Node(75);
let child2 = new Node(125);
let child3 = new Node(175);
root.left = parent1;    // 100 -> 50
root.right = parent2;   // 100 -> 150
parent1.left = parent3;  // 50 -> 25
parent1.right = child1; // 50 -> 75
parent2.left = child2; // 150 -> 125
parent2.right = child3; // 150 -> 175
console.log(root);
