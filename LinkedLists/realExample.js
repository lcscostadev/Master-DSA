class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add a node to the end of the linked list
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Add a node to the beginning of the linked list
    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // Remove a node from the linked list
    remove(value) {
        if (!this.head) {
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            if (!this.head) {
                this.tail = null;
            }
            return;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                if (!currentNode.next) {
                    this.tail = currentNode;
                }
                return;
            }
            currentNode = currentNode.next;
        }
    }

    // Search for a node in the linked list
    search(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    // Display the linked list elements
    display() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

// Example usage
const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);

linkedList.display(); // 5 -> 10 -> 20

console.log(linkedList.search(20)); // true

linkedList.remove(10);

linkedList.display(); // 5 -> 20
