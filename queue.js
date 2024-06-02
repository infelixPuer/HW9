// Queue Data Structure Implementation
export class Queue {
    // a pointer to the start of the queue
    #start;
    // a pointer to the end of the queue
    #end;
    // current size of the queue
    #size;

    // getter of the current size
    get size() {
        return this.#size;
    }

    constructor(length) {
        if (length === undefined)
            throw new Error("Parameter length should be defined!");

        this.length = length;
        this.items = [];
        this.#start = 0;
        this.#end = 0;
        this.#size = 0;
    }

    // A method to add new item to the queue
    // The end of the queue can be lesser than the start
    // That's why during enqueueing with the help of the % operator we can set the end to the start of the queue
    // That means, that values in the items array are places in a circular way
    enqueue(item) {
        if (this.#size === this.length)
            throw new Error("Queue is out of space!");

        this.items[this.#end] = item;
        this.#end = (this.#end + 1) % this.length;
        this.#size++;
    }

    // The same way as we did in the enqueue with the end, we are doing with the start
    dequeue() {
        if (this.#size === 0)
            throw new Error("Queue is empty!");

        const item = this.items[this.#start++];
        this.#start %= this.length;
        this.#size--;

        return item;
    }

    // A method to get the first value to dequeue but without removing it from the queue
    peek() {
        if (this.#size === 0)
            throw new Error("Queue is empty!");

        return this.items[this.#start];
    }

    print() {
        console.log("Printing queue");
        for (let i = this.#start; i < this.#start + this.#size; ++i) {
            console.log(this.items[i % this.length]);
        }
    }
}
