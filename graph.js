// The implementation of the single vertex of the graph
// It's holding a value and a pointers to the connected vertices
class Vertex {
    #edges;

    constructor(value) {
        this.value = value;
        this.#edges = [];
    }

    // getEdges method returns all connected vertices
    getEdges() {
        return this.#edges;
    }

    // addEdged method connect new vertex to the current one
    addEdge(vertex) {
        if (this.#edges[vertex] === undefined)
            this.#edges.push(vertex);
    }
}

// The implementation of the undirected and unweighted Graph, which is consists of the Vertices
// Graph has vertices property which is holding all vertices of the graph
export class Graph {
    #vertices;

    constructor() {
        this.#vertices = new Map();
    }

    getVertices() {
        return this.#vertices;
    }

    // a method to add new vertex with a given value to the graph
    addVertex(value) {
        const newVertex = new Vertex(value);
        this.#vertices.set(value, newVertex);
    }

    // a method to connect two vertices based on the value
    addEdge(value1, value2) {
        const vertex1 = this.#vertices.get(value1);
        const vertex2 = this.#vertices.get(value2);

        if (vertex1 && vertex2) {
            vertex1.addEdge(vertex2);
            vertex2.addEdge(vertex1);
        }
    }

    // perform a Depth First Search on the graph
    dfs(startValue, targetValue) {
        const startVertex = this.#vertices.get(startValue);
        if (!startVertex) return null;
        if (startValue === targetValue)
            return startVertex;

        const stack = [startVertex];
        const visited = new Set();

        visited.add(startVertex);

        while (stack.length) {
            const currentVertex = stack.pop();
            if (currentVertex.value === targetValue)
                return currentVertex;

            currentVertex.getEdges().forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            });
        }

        return null;
    }

    // perform a Breadth First Search on the graph
    bfs(startValue, targetValue) {
        const startVertex = this.#vertices.get(startValue);
        if (!startVertex) return null;
        if (startValue === targetValue)
            return startVertex;

        const queue = [startVertex];
        const visited = new Set();

        visited.add(startVertex);

        while (queue.length) {
            const currentVertex = queue.shift();
            if (currentVertex.value === targetValue)
                return currentVertex;

            currentVertex.getEdges().forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }

        return null;
    }
}