class HashTable {
    constructor() {
        this.data = {};
    }

    // hash function
    hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * (i + 1)) % 100;
        }
        return hash;
    }

    // insert, search, delete

    insert(key, value) {
        const idx = this.hash(key);

        if (!this.data[idx]) {
            this.data[idx] = [];
        }

        this.data[idx].push([key, value]);
    }

    get(key) {
        const idx = this.hash(key);

        if (this.data[idx]) {
            for (const pair of this.data[idx]) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return undefined;
    }
}