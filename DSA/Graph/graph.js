class Graph{
    constructor(){
        this.adjacencyList ={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].detele(vertex1);
    }
    removeVertex(v1){
        if(!this.adjacencyList[v1])return;
        for(let adjacentVertex of this.adjacencyList[v1]){
            this.removeEdge(v1,adjacentVertex);
        }
        delete this.adjacencyList[v1];
    }
    print(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} ==> ${[...this.adjacencyList[vertex]].join(" ")}`);
        }
    }
}


let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A","B");
graph.addEdge("B","C");
graph.addEdge("A","D");
graph.addEdge("B","E");
graph.addEdge("B","F");
graph.addEdge("C","D");
graph.addEdge("E","B");
graph.addEdge("B","A");
graph.addEdge("D","C");
graph.addEdge("D","E");
graph.addEdge("B","D");
graph.print()
