class Map {
    collection = {};

    add(key, value) {
        this.collection[key] = value;
    }

    remove(key) {
        delete this.collection[key];
    }

    get(key) {
        return this.collection[key];
    }

    has(key) {
        return this.collection[key] !== undefined;
    }

    values() {
        return Object.values(this.collection);
    }

    size() {
        return this.values().length;
    }

    clear() {
        this.collection = {};
    }
};
