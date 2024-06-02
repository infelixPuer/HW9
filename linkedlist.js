// The implementation of the single node of the linked list
// It's holding a value and a pointer to the next node of the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// The implementation of the singly Linked List
// The Linked list has a head property, which is holding the start node of the list
// The size property indicates the number of nodes in the list
export class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.size = 1;
    }

    // a method to add new node to the end of the linked list
    appendNode(value) {
        let node = this.head;

        while (true) {
            if (node.next) {
                node = node.next;
                continue;
            }

            node.next = new Node(value);
            this.size++;
            return;
        }
    }

    // a method to add new node to the start of the linked list
    prependNode(value) {
        let node = new Node(value);

        node.next = this.head;
        this.head = node;
        this.size++;
    }

    // a method to delete a node from the linked list
    // Firstly we need to walk through the list until we find the node to delete
    deleteNode(value) {
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;

        while (true) {
            if (!current.next)
                return new Error(`Node with value ${value} was not found!`);

            if (current.next.value === value) {
                current.next = current.next.next;
                this.size--;
                return;
            }

            current = current.next;
        }
    }

    // A method to find and return desired node based on it's value
    // It works just like deleteNode method
    searchNode(value) {
        if (this.head.value === value)
            return this.head;

        let current = this.head;

        while (true) {
            if (!current.next)
                return new Error(`Node with value ${value} was not found!`);

            if (current.next.value === value)
                return current.next;

            current = current.next;
        }
    }

    // This method is used to create a cycle inside linked list to test cycle detection function
    // Basically, it grabs the last node and sets the next pointer to one of the existing nodes of the list
    createCycle(cyclePosition) {
        if (cyclePosition <= 0 || cyclePosition >= this.size)
            throw new Error(`Wrong position: ${cyclePosition}, while size: ${this.size}`);

        let counter = 0;
        let node = this.head;
        let aimedNode = null

        while (counter < this.size) {
            if (counter === cyclePosition) {
                aimedNode = node;
            }

            if (!node.next) {
                node.next = aimedNode;
                return;
            }

            node = node.next;
            counter++;
        }
    }

    print() {
        let node = this.head;
        let output = "";
        let counter = 0;

        while (node) {
            if (counter > this.size) {
                console.log("Cycle detected!");
                break;
            }

            output += node.value + " -> ";
            node = node.next;
            counter++;
        }

        console.log(output + "null");
    }
}
