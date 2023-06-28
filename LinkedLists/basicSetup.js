// Node
class Node {
    constructor(value) {
        this.value = value;
        // there is no itial value
        this.next = null;
    }
}

// Linked list
class LinkedList {
    constructor() {
        // the list doesn't exist yet so its empty.
        this.head = null;
        this.tail = null;
    }
}

// Creation of a linked list.
const linkedList = new LinkedList();

// Creating new nodes to the list -> *Manually* <- 
const newNode = new Node(10);
const newNode2 = new Node(20);
newNode.next = newNode2;

/*
    *** --- >
        The connections between nodes are usually handled by the linked list methods, such as append, prepend, or insert, rather than manually setting the next property.
    *** --- >

*/


// Real Basic Setup with methods

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

    // add a node to the end of the linked list
    append(value) {
        const newNode = new Node(value);

        // if there isnt an head, the new node is going to become the head and also tail, since there is only one element so it is both the first and last element on the list.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Add a node at the beginning of the linked list
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

    remove(value) {
        if (!this.head) {
            return;
        }

        // if this.head.value matches the value to be removed
        if (this.head.value === value) {
            // the head node needs to be removed, the next node becomes the new head.
            this.head = this.head.next;
            if (!this.head) {
                this.tail = null;
            }
            return;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            // checks if the value of the next node matches the value to be removed, if they match, the next node needs to be removed
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                //  If there is no next node after the removal (i.e., the removed node was the tail), the tail is updated to the current node.
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

