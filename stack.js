// Stack Data Structure Implementation
export class Stack {
    // top property is a pointer to the top of the stack
    #top;

    constructor(length) {
        if (length === undefined)
            throw new Error("Parameter length should be defined!");

        this.length = length;
        this.items= [];
        this.#top = 0;
    }

    // A method to add new item to the top of the stack
    push(item) {
        if (this.#top === this.length)
            return null;

        this.items[this.#top++] = item;
    }

    // a method to get the item from the top of the stack
    pop() {
        if (this.#top === 0)
            return null;

        return this.items[--this.#top];
    }

    // a method to get the item from the top of the stack without removing it
    peek() {
        if (this.#top === 0)
            return null;

        return this.items[this.#top - 1];
    }

    print() {
        console.log("Printing stack");
        for (let i = 0; i < this.#top; ++i) {
            console.log(this.items[i]);
        }
    }
}
