class Stack {
    collection = [];

    print() {
        console.log(collection);
    };

    push(el) {
        this.collection.push(el);
    }

    pop() {
        return this.collection.pop();
    }

    peek() {
        return this.collection[this.collection.length - 1];
    }

    isEmpty() {
        return this.collection.length === 0;
    }

    clear() {
        this.collection.length = 0;
    }
}