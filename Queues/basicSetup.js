class Queue {
    #items = [];

    enqueue = (item) => this.#items.splice(0, 0, item);
    dequeue = () => this.#items.pop();
    isEmpty = () => this.#items.length === 0;
    empty = () => (this.#items.length = 0);
    size = () => this.#items.length;
}

// add elements
const queue = new Queue()

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.size());
queue.dequeue(3);
queue.dequeue(3);

console.log(queue.size());
queue.dequeue(3);
console.log(queue.isEmpty());

