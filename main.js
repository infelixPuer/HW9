import { Stack } from "./stack.js"
import { Queue } from "./queue.js"
import { BinaryTree } from "./binarytree.js";
import { LinkedList} from "./linkedlist.js";
import { Graph} from "./graph.js";
import { MinMaxStack } from "./minmaxstack.js";


// **************************************
// Stack Implementation Showcase
// **************************************
console.log("***************");
console.log("Stack implementation");
console.log("***************");
let stack = new Stack(5);
stack.push(1);
stack.push(3);
console.log("First value to pop: ", stack.peek());
stack.push(5);
stack.print();
console.log("Popped value: ", stack.pop());
stack.print();

// **************************************
// Queue Implementation Showcase
// **************************************
console.log("***************");
console.log("Queue implementation");
console.log("***************");
let queue = new Queue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
console.log(`First value to dequeue: ${queue.peek()}`);
console.log(`Dequeued value: ${queue.dequeue()}`);
console.log(`First value to dequeue: ${queue.peek()}`);
queue.dequeue();
queue.enqueue(5);
queue.enqueue(6);
queue.print();

// **************************************
// Binary Tree Implementation Showcase
// **************************************
const bt = new BinaryTree();

bt.insertValue(1);
bt.insertValue(3);
bt.insertValue(7);
bt.insertValue(5);
bt.insertValue(10);
bt.insertValue(8);
bt.insertValue(11);

console.log("***************");
console.log("Binary tree implementation");
console.log("***************");
console.log(`Binary tree size: ${bt.size}`);
console.log(`Binary tree height: ${bt.height}`);

let path = [];
bt.inOrder(path);
console.log("In order binary tree traversal:");
console.log(path);
path = [];
console.log("Pre order binary tree traversal:");
bt.preOrder(path);
console.log(path);
path = [];
console.log("Post order binary tree traversal:");
bt.postOrder(path);
console.log(path);

console.log("BFS search:");
console.log(bt.bfs(8));
console.log("DFS search:");
console.log(bt.dfs(10));

// **************************************
// Graph Implementation Showcase
// **************************************
console.log("***************");
console.log("Graph implementation");
console.log("***************");
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

const dfsSearchedNode = graph.dfs("A", "E");
console.log("DFS: ", dfsSearchedNode, dfsSearchedNode.getEdges());
const bfsSearchedNode = graph.bfs("A", "E");
console.log("BFS: ", bfsSearchedNode, bfsSearchedNode.getEdges());

// **************************************
// Linked List Implementation Showcase
// **************************************
console.log("***************");
console.log("Linked List implementation");
console.log("***************");
let linkedList = new LinkedList(1);
linkedList.appendNode(2);
linkedList.appendNode(5);
linkedList.appendNode(8);
linkedList.appendNode(14);
linkedList.appendNode(22);
linkedList.print();
linkedList.prependNode(0);
linkedList.print();
linkedList.deleteNode(5);
linkedList.print();
console.log("Search for the node with value 8: ");
console.log(linkedList.searchNode(8));

// **************************************
// Min-Max Stack Class Implementation
// **************************************
console.log("***************");
console.log("MinMaxStack implementation");
console.log("***************");
let minMaxStack = new MinMaxStack(10);

minMaxStack.push(-1);
minMaxStack.push(2);
minMaxStack.push(7);
minMaxStack.push(10);
minMaxStack.push(8);
minMaxStack.push(-5);
console.log(`Min: ${minMaxStack.getMin()};\nMax: ${minMaxStack.getMax()};`);
minMaxStack.pop();
console.log(`Min: ${minMaxStack.getMin()};\nMax: ${minMaxStack.getMax()};`);
minMaxStack.pop();
console.log(`Min: ${minMaxStack.getMin()};\nMax: ${minMaxStack.getMax()};`);
minMaxStack.pop();
console.log(`Min: ${minMaxStack.getMin()};\nMax: ${minMaxStack.getMax()};`);
minMaxStack.pop();
console.log(`Min: ${minMaxStack.getMin()};\nMax: ${minMaxStack.getMax()};`);

// **************************************
// Linked List Cycle Detection Function
// **************************************
// detecCycle method uses a Floyd's Hare and Tortoise cycle detection algorithm
function detectCycle(head) {
    if (head === null || head.next === null)
        throw new Error("Linked list must have at least two elements!");

    let tortoise, hare;
    tortoise = head;
    hare = head;

    while (hare !== null || hare.next !== null) {
        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise === hare)
            break;
    }

    if (hare === null)
        return null;

    let ptr = head;

    while (ptr !== tortoise) {
        ptr = ptr.next;
        tortoise = tortoise.next;
    }

    return ptr;
}

console.log("***************");
console.log("Cycle detection implementation");
console.log("***************");
let linkedListWithCycle= new LinkedList(5);
linkedListWithCycle.appendNode(7);
linkedListWithCycle.appendNode(13);
linkedListWithCycle.appendNode(3);
linkedListWithCycle.appendNode(17);
linkedListWithCycle.appendNode(21);
linkedListWithCycle.appendNode(4);
linkedListWithCycle.appendNode(9);
linkedListWithCycle.appendNode(6);
linkedListWithCycle.appendNode(25);
linkedListWithCycle.createCycle(5);
console.log(detectCycle(linkedListWithCycle.head));

// **************************************
// Check Binary Tree Whether It's BST
// **************************************
// checkBST function checks, whether the given tree is Binary Search Tree or not
// It simply firstly check the left side of the tree with recursion and after that checks right side
function checkBST(root) {
    function check(node, cmpRule, rootValue) {
        if (!node) return true;

        if (!cmpRule(node.value, rootValue)) return false;
        if (!check(node.left, cmpRule, rootValue)) return false;
        return check(node.right, cmpRule, rootValue);
    }

    const leftSubtreeResult = check(root.left, (a, b) => {
        return a < b;
    }, root.value);

    if (!leftSubtreeResult) return false;

    const rightSubtreeResult = check(root.right, (a, b) => {
        return a > b;
    }, root.value);

    return rightSubtreeResult;
}

console.log("***************");
console.log("Check for BST implementation");
console.log("***************");
let bst = new BinaryTree();
// root
bst.insertValue(5);
// root.left
bst.insertValue(4);
// root.right
bst.insertValue(6);
// root.left.left
bst.insertValue(2);
// root.left.right
bst.insertValue(3);
// root.right.left
bst.insertValue(8);
// root.right.right
bst.insertValue(9);
console.log(checkBST(bst.root));

// **************************************
// Path Finding On a Graph With Dijkstra's Algorithm
// **************************************
// dijkstra function uses Dijkstra's Path Finding Algorithm to find the shortest way from one start vertex to end vertex
function dijkstra(graph, start, end) {
    let dist = new Map();
    let unvisited = new Set();
    let visited = new Set();

    graph.getVertices().forEach(v => {
        dist.set(v, Infinity);
        unvisited.add(v);
    });
    dist.set(start, 0);

    while (unvisited.size) {
        let minDist = Infinity;
        let current = null;
        dist.forEach((v, k) => {
            if (minDist > v && unvisited.has(k)) {
                minDist = v;
                current = k;
            }
        });

        if (current === end) {
            let path = [current];
            let node = current;

            while (node !== start) {
                let min = Infinity;
                node.getEdges().forEach(vertex => {
                    if (min > dist.get(vertex) && visited.has(vertex)) {
                        min = dist.get(vertex);
                    }
                });
                let neighbour = node.getEdges().find(e => dist.get(e) === min);
                path.unshift(neighbour);
                node = neighbour;
            }

            return path;
        }

        current.getEdges().forEach(vertex => {
            if (unvisited.has(vertex)) {
                let alt = dist.get(current) + 1;
                if (alt < dist.get(vertex)) {
                    dist.set(vertex, alt);
                }
            }
        });

        unvisited.delete(current);
        visited.add(current);
    }

    return [];
}

console.log("***************");
console.log("Dijkstra's Path Finding on graph implementation");
console.log("***************");
const graphToFindPath = new Graph();
graphToFindPath.addVertex("A");
graphToFindPath.addVertex("B");
graphToFindPath.addVertex("C");
graphToFindPath.addVertex("D");
graphToFindPath.addVertex("E");
graphToFindPath.addVertex("F");
graphToFindPath.addEdge("A", "B");
graphToFindPath.addEdge("A", "C");
graphToFindPath.addEdge("A", "D");
graphToFindPath.addEdge("B", "D");
graphToFindPath.addEdge("B", "E");
graphToFindPath.addEdge("D", "C");
graphToFindPath.addEdge("D", "E");
graphToFindPath.addEdge("C", "F");
graphToFindPath.addEdge("F", "E");
let start = graphToFindPath.getVertices().get("A");
console.log(start);
let end = graphToFindPath.getVertices().get("F");
console.log(end);
console.log(dijkstra(graphToFindPath, start, end));

// **************************************
// Path Finding On a Graph With BFS
// **************************************
// bfsPathFinding function uses Breadth First Search Algorithm to find the shortest way from one start vertex to end vertex
function bfsPathFinding(graph, start, end) {
    let q = [];
    let visited = new Set();

    q.push(start);
    parent.set(start, null);

    while (q.length) {
        let current = q.pop();

        if (current === end) {
            let path = [current];

            while (parent.get(current)) {
                current = parent.get(current);
                path.unshift(current);
            }

            return path;
        }

        for (let vertex of current.getEdges()) {
            if (!visited.has(vertex)) {
                parent.set(vertex, current);
                q.push(vertex);
                visited.add(vertex);
            }
        }
    }

    return [];
}

console.log("***************");
console.log("BFS path finding on graph implementation");
console.log("***************");
const graphBFS = new Graph();
graphBFS.addVertex("A");
graphBFS.addVertex("B");
graphBFS.addVertex("C");
graphBFS.addVertex("D");
graphBFS.addVertex("E");
graphBFS.addVertex("F");
graphBFS.addEdge("A", "B");
graphBFS.addEdge("A", "C");
graphBFS.addEdge("A", "D");
graphBFS.addEdge("B", "D");
graphBFS.addEdge("B", "E");
graphBFS.addEdge("D", "C");
graphBFS.addEdge("D", "E");
graphBFS.addEdge("C", "F");
graphBFS.addEdge("F", "E");
start = graphBFS.getVertices().get("A");
console.log("\nBFS path finding\n");
console.log(start);
end = graphBFS.getVertices().get("F");
console.log(end);
console.log(dijkstra(graphBFS, start, end));
