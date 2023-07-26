// Stacks with Arrays
const stack = [];

stack.push('Dog');
stack.push('Cat');
stack.push('Bear');
stack.pop()

// Peek -> Viewing the topmost element without removing it.

stack[stack.length - 1];

// Stacks with Linked List

class StackNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val) {
        // if the Stack is empty, the top is the new value that we added. if there is elements on the Stack we store the new value on a variable, and we .next this variable to be the top, because LAST IN, so every last element on the Stack will be the top.
        if (this.size === 0) {
            this.top = new StackNode(val);
        } else {
            const pushedNode = new StackNode(val);
            pushedNode.next = this.top;
            this.top = pushedNode;
        }
        // increment the size to have control on how many items we have in our Stack. 
        this.size++;
    }

    pop() {
        // if its empty return null, store poppedNode to keep track in the value removed, and its assigned to the this.top, since the first out node will be the top node. this.top = this.top.next making the second last element in the stack become the top node. we decrement the count size, since were removing an item and then we return the poppedNode value to know what we removed from the Stack. 
        if (this.size === 0) return null;
        // current top, last node.
        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.val;
    }

    getTop() {
        return this.top.val;
    }
}


// Questions to make you remember how to push an value.
/**
 How would you add a new value to the stack?
By creating a new node and making it the new top node of the stack.

What needs to be checked before adding the value to the stack?
The size of the stack should be checked to determine if it's empty or if there are existing elements.

If the stack is empty, what should be done differently compared to when it already has elements?
If the stack is empty, a new node with the given value should be directly assigned as the top node.

What is an instantiation of a new StackNode object?
const pushedNode = new StackNode(val);

How would you create a new node to hold the value being pushed?
By instantiating a new StackNode object with the given value.

What should be the next node for the newly created node?
The next node for the newly created node should be the current top node of the stack.

What should be the new top node of the stack after pushing a value?
The newly created node should become the new top node of the stack.

Should the size of the stack change when a value is pushed? If so, how?
Yes, the size of the stack should be incremented by 1 after pushing a value.

What would be the consequences of pushing a value incorrectly?
Pushing a value incorrectly could lead to incorrect stack behavior, such as incorrect top node or incorrect ordering of elements. It's important to ensure that the pushing operation is implemented correctly to maintain the integrity of the stack data structure.
 *
 *
 * ////////////////////////////----------------------------------////////////////////////////
 * Questions to make you remember how to pop an value.
 *
 * How would you remove a value from the stack? 
 * To remove a value from the stack, we need to access the current top node and update the top pointer to point to the next node.
 * 
 * What should be done if the stack is empty?
 * If the stack is empty, there is nothing to remove. In that case, we can return null or any other indication that the operation cannot be performed.
 * 
 * What is the current top node of the stack?
 * The current top node of the stack is stored in the top property of the stack object.
 * 
 * How would you retrieve the value stored in the top node?
 * To retrieve the value stored in the top node, we can access the val property of the top node.
 * 
 * What should be the new top node after removing the current top node?
 * After removing the current top node, the new top node should be the node that was previously the next node in the stack.
 * 
 * Should the size of the stack change when a value is popped? If so, how?
 * Yes, the size of the stack should decrease by one when a value is popped. In the given code, the size property is decremented by one (this.size--) after removing the top node.
 * 
 * What should be returned as the popped value?
 * The value stored in the top node that is being popped should be returned.
 * 
 * Are there any special cases to consider when popping from an empty stack?
 * Yes, when popping from an empty stack (size is 0), there is no node to remove. In the given code, if the size is 0, the function returns null to indicate that no value can be popped.
 */

// Stacks with Classes

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

}
const newStack = new Stack();

newStack.push(10);
newStack.push(20);
newStack.push(30);

console.log(stack.peek()); // 30

console.log(stack.pop()); // 30
console.log(stack.pop()); // 20

console.log(stack.size()); // 1

console.log(stack.isEmpty()); // false

stack.clear();

console.log(stack.isEmpty()); // true

// Basic setup with array methods

class Stack {
    #items = [];
    push = (element) => this.#items.push(element);
    pop = () => this.#items.pop();
    isempty = () => this.#items.length === 0;
    empty = () => (this.#items.length = 0);
    size = () => this.#items.length;
}

const stacks = new Stack();
stacks.push(1);
stacks.push(2);
stacks.push(3);
console.log(stacks.size()); //3
console.log(stacks.pop()); //[ 3 ]
console.log(stacks.size()); //2