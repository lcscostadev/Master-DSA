// hash function
hashStringToInt = (s, tableSize) => {
    // this hash function needs to spread out the keys and store them in different values in the array.
    let hash = 17; // picking prime nubmers

    for (let i = 0; i < s.length; i++) {
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }
    return hash;
}

class HashTable {

    table = new Array(2001);
    numItems = 0;

    resize = () => {
        const newTable = newArray(this.table.length * 2);
        this.table.forEach(item => {
            if (item) {
                item.forEach(([key, value]) => {
                    const idx = hashStringToInt(key, newTable.length);
                    if (newTable[idx]) {
                        newTable[idx].push([key, value]);
                    } else {
                        newTable[idx] = [[key, value]];
                    }
                })
            }
        })
        this.table = newTable;
    }

    setItem = (key, value) => {
        this.numItems++;
        const loadFactor = this.numItems / this.table.length;

        if (loadFactor > .8) {
            // resize
            this.resize();
        }

        const idx = hashStringToInt(key, this.table.length);
        if (this.table[idx]) {
            this.table[idx].push([key, value]);
        } else {

            this.table[idx] = [[key, value]]; // chaining an array with key value pair, avoiding collision
        }
    }

    getItem = (key) => {
        const idx = hashStringToInt(key, this.table.length);

        if (!this.table[idx]) {
            return null;
        }

        // loop through the array and find our key.
        // O(n)
        return this.table[idx].find(x => x[0] === key)[1];
    }
}

const myTable = new HashTable();
myTable.setItem('firstName', 'bob');
myTable.setItem('lastName', 'tim');
myTable.setItem('age', 24);
myTable.setItem('dob', '18/06/1999');
console.log(myTable.getItem('firstName'));
console.log(myTable.getItem('lastName'));