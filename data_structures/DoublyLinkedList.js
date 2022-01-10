class Node {
    constructor(data, prev) {
        this.data = data;
        this.prev = prev;
        this.next = null;
    }
};

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(data) {
        let node = new Node(data, this.tail);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let current = this.tail;
            current.next = node;
            this.tail = node;
        }
    }

    remove(data) {
        if (!this.head) return null;

        let current = this.head;
        while (current !== this.tail) {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = current.next;
                    current.next.prev = null;
                } else {
                    current.next.prev = current.prev; // d -> b
                    current.prev.next = current.next; // b -> d
                }
            }
            current = current.next;
        }
        if (current.data === data) {
            this.tail = current.prev;
            this.tail.next = null;
        }
    }

    reverse() {
        if (!this.head) return null;

        let temp = null;
        let current = this.head;
        this.tail = current;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        if (temp) {
            this.head = temp.prev;
        }
    }
};


let l = new DoublyLinkedList();

l.add('1');
l.add('2');
l.add('3');
l.add('4');

console.log(l);

l.reverse()

console.log(l);