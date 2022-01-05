class CircularQueue {
    constructor(size) {
        this.queue = Array(size).fill(null);
        this.read = 0;
        this.write = 0;
        this.max = size - 1;
    }

    print() {
        return this.queue;
    }

    enqueue(item) {
        if (this.queue[this.write] !== null) {
            return null;
        } else {
            this.queue[this.write] = item;
            this.write++;
            if (this.write > this.max) {
                this.write = 0;
            }
            return item;
        }
    }

    dequeue() {
        if (this.queue[this.read] === null) {
            return null;
        } else {
            const el = this.queue[this.read];
            this.queue[this.read] = null;
            this.read++;
            if (this.read > this.max) {
                this.read = 0;
            }
            return el;
        }
    }
}

const queue = new CircularQueue(5);

[null, null, null, null]

queue.print()