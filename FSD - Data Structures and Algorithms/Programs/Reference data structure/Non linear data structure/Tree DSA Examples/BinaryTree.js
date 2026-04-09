// ===== Binary Tree Node Definition =====
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// ===== Binary Search Tree (BST) Implementation =====
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // ===== Insertion =====
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined; // Duplicates not allowed
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // ===== Search =====
    search(value) {
        let current = this.root;
        while (current !== null) {
            if (value === current.value) return true;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // ===== Find Minimum =====
    findMin(node = this.root) {
        if (node === null) return null;
        while (node.left !== null) {
            node = node.left;
        }
        return node.value;
    }

    // ===== Find Maximum =====
    findMax(node = this.root) {
        if (node === null) return null;
        while (node.right !== null) {
            node = node.right;
        }
        return node.value;
    }

    // ===== Deletion =====
    delete(value) {
        this.root = this._deleteNode(this.root, value);
        return this;
    }

    _deleteNode(node, value) {
        if (node === null) return null;

        if (value < node.value) {
            node.left = this._deleteNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value);
            return node;
        } else {
            // Node to delete found
            // Case 1: No children (leaf node)
            if (node.left === null && node.right === null) {
                return null;
            }

            // Case 2: One child
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            // Case 3: Two children
            const minRight = this.findMin(node.right);
            node.value = minRight;
            node.right = this._deleteNode(node.right, minRight);
            return node;
        }
    }

    // ===== In-Order Traversal (Ascending) =====
    inOrder(node = this.root, result = []) {
        if (node !== null) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }

    // ===== Pre-Order Traversal =====
    preOrder(node = this.root, result = []) {
        if (node !== null) {
            result.push(node.value);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
        return result;
    }

    // ===== Post-Order Traversal =====
    postOrder(node = this.root, result = []) {
        if (node !== null) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.value);
        }
        return result;
    }

    // ===== Level-Order Traversal (BFS) =====
    levelOrder() {
        if (this.root === null) return [];
        
        const result = [];
        const queue = [this.root];

        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }

        return result;
    }

    // ===== Get Tree Height =====
    getHeight(node = this.root) {
        if (node === null) return -1;
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    // ===== Get Tree Size (Number of nodes) =====
    getSize(node = this.root) {
        if (node === null) return 0;
        return 1 + this.getSize(node.left) + this.getSize(node.right);
    }

    // ===== Check if Tree is Balanced =====
    isBalanced(node = this.root) {
        if (node === null) return true;

        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    // ===== Check if Tree is BST =====
    isBST(node = this.root, min = null, max = null) {
        if (node === null) return true;

        if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
            return false;
        }

        return (
            this.isBST(node.left, min, node.value) &&
            this.isBST(node.right, node.value, max)
        );
    }

    // ===== Path Sum (Check if path sum equals target) =====
    hasPathSum(targetSum) {
        return this._hasPathSumHelper(this.root, targetSum);
    }

    _hasPathSumHelper(node, sum) {
        if (node === null) return false;
        if (node.left === null && node.right === null) return sum === node.value;

        return (
            this._hasPathSumHelper(node.left, sum - node.value) ||
            this._hasPathSumHelper(node.right, sum - node.value)
        );
    }

    // ===== Find All Paths =====
    getAllPaths() {
        const result = [];
        this._getPathsHelper(this.root, [], result);
        return result;
    }

    _getPathsHelper(node, path, result) {
        if (node === null) return;

        path.push(node.value);

        if (node.left === null && node.right === null) {
            result.push([...path]);
        } else {
            this._getPathsHelper(node.left, path, result);
            this._getPathsHelper(node.right, path, result);
        }

        path.pop();
    }

    // ===== Get LCA (Lowest Common Ancestor) =====
    getLCA(p, q) {
        return this._getLCAHelper(this.root, p, q);
    }

    _getLCAHelper(node, p, q) {
        if (node === null) return null;
        if (node.value > p && node.value > q) {
            return this._getLCAHelper(node.left, p, q);
        }
        if (node.value < p && node.value < q) {
            return this._getLCAHelper(node.right, p, q);
        }
        return node.value;
    }

    // ===== Display Tree (Visual representation) =====
    display() {
        console.log("\n========== Binary Search Tree ==========");
        this._displayHelper(this.root, "", true);
        console.log("=========================================\n");
    }

    _displayHelper(node, prefix, isTail) {
        if (node === null) return;

        console.log(prefix + (isTail ? "└── " : "├── ") + node.value);

        const children = [];
        if (node.left !== null) children.push(node.left);
        if (node.right !== null) children.push(node.right);

        for (let i = 0; i < children.length; i++) {
            const isLast = i === children.length - 1;
            const extension = isTail ? "    " : "│   ";
            this._displayHelper(children[i], prefix + extension, isLast);
        }
    }

    // ===== Clear Tree =====
    clear() {
        this.root = null;
    }

    // ===== Check if Tree is Empty =====
    isEmpty() {
        return this.root === null;
    }
}

// ===== EXAMPLE USAGE =====
const bst = new BinarySearchTree();

// Insert values
console.log("Inserting values: 50, 30, 70, 20, 40, 60, 80");
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

// Display tree
bst.display();

// Traversals
console.log("In-Order (Ascending):", bst.inOrder());
console.log("Pre-Order:", bst.preOrder());
console.log("Post-Order:", bst.postOrder());
console.log("Level-Order (BFS):", bst.levelOrder());

// Tree properties
console.log("\nTree Properties:");
console.log("Height:", bst.getHeight());
console.log("Size (Number of nodes):", bst.getSize());
console.log("Is Balanced:", bst.isBalanced());
console.log("Is Valid BST:", bst.isBST());
console.log("Is Empty:", bst.isEmpty());

// Search operations
console.log("\nSearch Operations:");
console.log("Search 40:", bst.search(40));
console.log("Search 100:", bst.search(100));
console.log("Minimum:", bst.findMin());
console.log("Maximum:", bst.findMax());

// Path operations
console.log("\nPath Operations:");
console.log("Has Path Sum (200):", bst.hasPathSum(200));
console.log("Has Path Sum (150):", bst.hasPathSum(150));
console.log("All Paths:", bst.getAllPaths());

// LCA
console.log("\nLowest Common Ancestor (30, 40):", bst.getLCA(30, 40));
console.log("Lowest Common Ancestor (20, 40):", bst.getLCA(20, 40));

// Delete
console.log("\n--- After deleting 20 ---");
bst.delete(20);
bst.display();
console.log("In-Order:", bst.inOrder());

// Export for use in other modules
module.exports = { BinarySearchTree, TreeNode };
