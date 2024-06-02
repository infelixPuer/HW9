import { Stack } from "./stack.js"
// Implementation of the MinMaxStack data structure, which is based on the three stacks
// The stack property acts like default stack and holds all values
// The minstack property holds first passed value and lesser values
// The maxstack property holds first passed value and greater values
export class MinMaxStack {
    #top;

    constructor(length) {
        this.stack = new Stack(length);
        this.minstack = new Stack(length);
        this.maxstack = new Stack(length);
        this.#top = 0;
    }

    // A method to add new value to the stack
    // If a value is lesser than first value to pop of the minstack, than it goes to the minstack
    // Otherwise, if a value is greater than first value to pop of the maxstack, than it goes to the maxstack
    push(value) {
        let result = this.stack.push(value);

        if (result === null)
            return null;

        if (this.minstack.peek() === null || this.minstack.peek() > value)
            this.minstack.push(value);

        if (this.maxstack.peek() === null || this.maxstack.peek() < value)
            this.maxstack.push(value);
    }

    // While popping a value we need to check, if we need to also pop it from the min and max stacks
    pop() {
        let popped = this.stack.pop();

        if (popped === null)
            return null;

        if (this.minstack.peek() === popped)
            this.minstack.pop();

        if (this.maxstack.peek() === popped)
            this.maxstack.pop();

        return popped;
    }

    // Just return the first value of the minstack
    getMin() {
        return this.minstack.peek();
    }

    // Just return the first value of the maxstack
    getMax() {
        return this.maxstack.peek();
    }
}
