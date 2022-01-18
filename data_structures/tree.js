const displayTree = tree => console.log(JSON.stringify(tree, null, 2));

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root = null;

    add(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = new Node(value);
                    return;
                } else {
                    current = current.left;
                }
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = new Node(value);
                    return;
                }
                else {
                    current = current.right;
                }
            } else if (value === current.value) {
                return null;
            }
        }
    }

    findMin() {
        if (!this.root) return null;

        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        return current.value;
    }

    findMax() {
        if (!this.root) return null;

        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current.value;
    }

    isPresent(value) {
        if (!this.root) return false;

        let current = this.root;
        while (current) {
            if (value === current.value) {
                return true;
            } else {
                if (value < current.value) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
        }
        return false;
    }
}

const tree = new BinarySearchTree();

tree.add(8);
tree.add(3);
tree.add(10);
tree.add(1);
tree.add(6);
tree.add(9);

displayTree(tree);

console.log(tree.isPresent(9));

console.log(tree.isPresent(11));


function isBinarySearchTree(tree) {
    if (!tree.root) return null;

    // TODO: logic
}