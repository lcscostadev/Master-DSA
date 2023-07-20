class HashTable {
    constructor() {
        this.data = {};
    }

    // Hash function
    hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * (i + 1)) % 100;
        }
        return hash;
    }

    // key.charCodeAt(i) -> gets the ASCII value of the character position 'i' in the string 'key'

    // key.charCodeAt(i) * (i + 1) -> This multiplies the ASCII value of the character by its position i + 1. The i + 1 is added to prevent hash collisions caused by permutations of the same characters.

    // (hash + key.charCodeAt(i) * (i + 1))

    // % 100 -> it is to limit the code from 0 to 99

    // Insert 
    insert(key, value) {
        const index = this.hash(key);

        if (!this.data[index]) {
            this.data[index] = [];
        }
        this.data[index].push([key, value]);
    }
}

