class PriorityQueue {
    collection = [];

    printCollection() {
        console.log(this.collection);
    }

    sortByPriority() {
        this.collection.sort((a, b) => b[1] - a[1]);
    }

    enqueue(el) {
        this.collection.unshift(el);
        this.sortByPriority();
    }

    dequeue() {
        const [name, priority] = this.collection.pop();
        return name;
    }

    isEmpty() {
        return this.collection.length === 0;
    }

    front() {
        return this.collection[this.collection.length - 1][0]
    }

    size() {
        return this.collection.length;
    }
}