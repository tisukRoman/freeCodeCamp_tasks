class Set {
    constructor() {
        this.dictionary = {};
        this.length = 0;
    }

    has(element) {
        return this.dictionary[element] !== undefined;
    }

    values() {
        return Object.values(this.dictionary);
    }

    add(item) {
        if (this.has(item)) {
            return false;
        } else {
            this.dictionary[item] = item;
            this.length++;
            return true;
        }
    }

    remove(item) {
        if (!this.has(item)) {
            return false;
        } else {
            delete this.dictionary[item];
            this.length--;
            return true;
        }
    }

    size() {
        return this.length;
    }

    union(set) {
        const values = [...this.values(), ...set.values()];
        const newSet = new Set();
        values.forEach(value => newSet.add(value));
        return newSet;
    }

    intersection(set) {
        const intersection = [];
        this.values().forEach(el => {
            if (set.values().includes(el)) {
                intersection.push(el)
            }
        });
        const newSet = new Set();
        intersection.forEach(value => newSet.add(value));
        return newSet;
    }

    difference(set) {
        const values = this.values().filter(el => !set.values().includes(el));
        const newSet = new Set();
        values.forEach(value => newSet.add(value));
        return newSet;
    }

    isSubsetOf(set) {
        return this.values().every(el => set.values().includes(el));
    }
}