var called = 0;

var hash = (string) => {
    called++;
    var hashed = 0;
    for (var i = 0; i < string.length; i++) {
        hashed += string.charCodeAt(i).toString();
    }
    return hashed;
};

class HashTable {
    collection = {};

    add(key, value) {
        const hashedKey = hash(key);
        this.collection[hashedKey] = value;
    }

    remove(key) {
        const hashedKey = hash(key);
        delete this.collection[hashedKey];
    }

    lookup(key) {
        const hashedKey = hash(key);
        if (this.collection[hashedKey]) {
            return this.collection[hashedKey];
        } else {
            return null;
        }
    }
};
