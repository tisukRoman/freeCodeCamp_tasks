class Queue {
    collection = [];

    print() {
        console.log(collection);
    }

    enqueue(el) {
        this.collection.unshift(el);
    }

    dequeue() {
        return this.collection.pop();
    }

    isEmpty() {
        return this.collection.length === 0;
    }

    front() {
        return this.collection[this.collection.length - 1];
    }

    size() {
        return this.collection.length;
    }
}