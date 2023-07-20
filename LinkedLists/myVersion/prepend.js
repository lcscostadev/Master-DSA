// this is my prepend linked list version

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 1
    prepend(nodeValue) {
        // 2
        const newNode = new Node(nodeValue);

        // 3
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // 4
            newNode.next = this.head;
            // 5 
            this.head = newNode;
        }
    }
}

/*
    ** Add a node at the beginning of the linked list **
    1. the prepend method has to have an node value parameter
    2. we need to create an object instantiation or object creation.
    3. we check if there isn't an head, the new node is going to be the head and also be the tail because if there isn't any element he is the first and also the last element.
    4. otherwise the newNode.next will be this.head, making the newNode the new head.
    5. after the '4.' step we update the head to be the newNode.
*/
