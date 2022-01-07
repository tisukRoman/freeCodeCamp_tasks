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

    addAt(index, element) {
        const nodeToAdd = new Node(element);
        let currentIndex = 0;
        let current = this.head;
        let previous;

        if (index < 0 || index >= this.length) {
            return false;
        }

        if (index === 0) {
            this.head = nodeToAdd;
            this.head.next = current;
            this.length++;
        } else {
            while (current.next) {
                if (currentIndex === index) {
                    previous.next = nodeToAdd;
                    nodeToAdd.next = current;
                    this.length++;
                    return;
                } else {
                    previous = current;
                    current = current.next;
                    currentIndex++;
                }
            }
        }
    }

    remove(element) {
        let current = this.head;
        let previous;

        if (current.element === element) {
            this.head = current.next;
        } else {
            while (current.element !== element) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
    }

    removeAt(index) {
        let currentIndex = 0;
        let current = this.head;
        let previous;

        if (currentIndex === index) {
            this.head = current.next;
            this.length--;
            return current.element;
        }

        while (current.next) {
            if (currentIndex === index) {
                previous.next = current.next;
                this.length--;
                return current.element;
            } else {
                previous = current;
                current = current.next;
                currentIndex++;
            }
        }
        return null;
    }

    isEmpty() {
        return this.length === 0;
    }

    indexOf(element) {
        let index = 0;
        let current = this.head;

        while (current.next) {
            if (current.element === element) {
                return index;
            } else {
                current = current.next;
                index++;
            }
        }
        return -1;
    }

    elementAt(index) {
        let current = this.head;
        let currentIndex = 0;
        while (current.next) {
            if (currentIndex === index) {
                return current.element;
            } else {
                current = current.next;
                currentIndex++;
            }
        }
        return undefined;
    }
};

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
};


/* 
const head = {
    element: 'hello',
    next: {
        element: 'world',
        next: {
            element: 'div',
            next: {
                element: 'span',
                next: null
            }
        }
    }
} 
*/

const ll = new LinkedList();
ll.add('hello');
ll.add('world');
ll.add('div');
ll.add('span');

ll.addAt(1, 'Greek')
/* console.log(ll.addAt(3));  */

console.log(ll);