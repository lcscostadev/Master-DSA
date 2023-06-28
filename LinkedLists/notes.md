## What is a Linked List?



# append
    A way of adding a new element to the end of the list:
        newNode assign to the new Node(value)
        if there isn't a head, head = new Node, tail = new Node
        otherwise, tail.next = newNode and then you can make newNode the tail element assigning its value to it.

# prepend
    A way of adding a new element to the beginning of the list:
        newNode assign to the new Node(value)
        if there isn't a head, head = new Node, tail = new Node since there is only one element on the list, so its both head and tail.
        otherwise the newNode.next is pointing to the this.head which makes the head the previous head, and now the newNode is the head, so we just need to assign its value to it.

# remove
    A way of removing an element of the list
        if there isn't a head, return, there is no element to be removed.
        if the this.head.value matches the value to be removed, we re assign the head to be the next element, so this element is now removed.
                    this.head = this.head.next;
        if there isn't an head, this.tail = null; 
        assign the head to the current node.
        while there is an next element node, if the currentNode.next value matches the element to be removed, we remove the next node with the following:
                    currentNode.next = currentNode.next.next;
                        -- we "jump" the node to be removed.
        if there is no next node to be removed, it means that the element that we removed was the tail, so we need to update the tail to become the currentNode, we return it, and we move the list with, currentNode = currentNode.next;
        ** return **
            In summary, the return statement in this context is used to terminate the function and exit early after successfully removing the head node.

# search
    A way of searching an element on the list
        we assign a currentNode variable to our list head.
        if there is an currentNode
        we check if the currentNode.value is identical to the value that we are searching, if it is we return true and update the list
        with currentNode = currentNode.next;
        otherwise its just false

# display
    A way of displaying the elements of the linked list
        we assing a currentNode variable to the head of the list
        if there is a currentNode, console.log(currentNode.value) and update the list to the next value currentNode = currentNode.next