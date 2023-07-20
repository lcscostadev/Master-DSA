// this is my append linked list version

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 1.
    append(nodeValue) {
        // 2.
        const newNode = new Node(nodeValue);
        // 3.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // 4.
            this.tail.next = newNode;
            // 5.
            this.tail = newNode;
        }
    }
}

/**
 *
    ** Append is a way of adding an node element at the end of the linked linkedList. ** 

    1. the append method has to have an node value parameter
    2. we need to create an object instantiation or object creation.
    3. we check if there isn't an head, the new node is going to be the head and also be the tail because if there isn't any element he is the first and also the last element.
    4. if there is an tail in the linked list the tail.next will be the element that were adding and also is going to be the new tail.
    5. when the '4.' is complete, we just update the tail to be this new element.
 */