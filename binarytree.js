// The implementation of the single node of the tree
// It's holding a value and a pointers to the two child nodes
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// The implementation of the Binary Tree, which is consists of the Nodes
// Binary Tree has a root node, from whom the tree starts
// The size property indicates current number of nodes in the tree
// The height property indicates current level of the tree
export class BinaryTree {
    constructor() {
        this.root = null;
        this.size = 0;
        this.height = 0;
    }

    // A method insertValue tries to insert a value in the level with empty nodes
    // If all levels are full, then new value will be inserted in the new level
    insertValue(value) {
        if (!this.root) {
            this.root = new Node(value);
            this.size++;
            return;
        }

        let q = [this.root];
        let h = 0;

        while (q.length) {
            let node = q.shift();

            if (!node.left) {
                node.left = new Node(value);
                this.size++;
                this.height = h;
                return;
            }

            if (!node.right) {
                node.right = new Node(value);
                this.size++;
                this.height = h;
                return;
            }

            q.push(node.left);
            q.push(node.right);
            h++;
        }
    }

    // In-order traversal firstly goes to the most left node of the left subtree and then works the way to the root node
    // After traversing left side and the root node right side will be traversed
    inOrder(path = [], node = this.root) {
        if (!node)
            return path;

        this.inOrder(path, node.left);
        path.push(node.value);
        this.inOrder(path, node.right);
    }

    // Pre-order traversal goes from the root node to the most left node of the left subtree
    // When whole left subtree is traversed, then the right tree get traversed from the top to the bottom
    preOrder(path = [], node = this.root) {
        if (!node)
            return path;

        path.push(node.value);
        this.preOrder(path, node.left);
        this.preOrder(path, node.right);
    }

    // Post-order traversal goes to the most left node of the left subtree
    // When whole left subtree is traversed, then the right tree get traversed from the bottom to the top
    // And at the end the top of the tree gets traversed
    postOrder(path = [], node = this.root) {
        if (!node)
            return path;

        this.postOrder(path, node.left);
        this.postOrder(path, node.right);
        path.push(node.value);
    }

    // Breadth First Search uses queue data structure to look up tree layer by layer
    bfs(targetValue) {
        let q = [this.root];

        while (q.length) {
            let node = q.shift();

            if (node.value === targetValue)
                return node;

            if (node.left) {
                if (node.left.value === targetValue)
                    return node.left;

                q.push(node.left);
            }

            if (node.right) {
                if (node.right.value === targetValue)
                    return node.right;

                q.push(node.right);
            }
        }

        return null;
    }

    // Depth First Search uses stack data structure look up tree from the most left to the most right side of the tree
    dfs(targetValue, node = this.root) {
        if (node.value === targetValue) return node;

        let targetNode = null;

        if (node.left) {
            targetNode = this.dfs(targetValue, node.left);
            if (targetNode)
                return targetNode;
        }

        if (node.right) {
            targetNode = this.dfs(targetValue, node.right);
            if (targetNode)
                return targetNode;
        }

        return null;
    }
}
