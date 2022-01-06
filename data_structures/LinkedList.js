class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    head() {
        return this.head;
    };

    size() {
        return this.length;
    };

    add(element) {
        if (this.size() === 0) {
            this.head = new Node(element);
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = new Node(element);
        }
        this.length++;
    };

    remove(element) {
        // TODO: this method
    }
};

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
};