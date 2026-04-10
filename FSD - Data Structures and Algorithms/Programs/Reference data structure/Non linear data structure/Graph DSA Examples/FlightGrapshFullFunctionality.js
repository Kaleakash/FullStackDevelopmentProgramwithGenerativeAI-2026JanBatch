class Flight {
    constructor(source, destination, price) {
        this.source = source;
        this.destination = destination;
        this.price = price;
    }
}

class FlightGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addAirport(airport) {
        if (!this.adjacencyList[airport]) {
            this.adjacencyList[airport] = [];
        }
    }

    addFlight(source, destination, price) {
        if (!this.adjacencyList[source] || !this.adjacencyList[destination]) {
            console.log("Airport missing!");
            return;
        }

        this.adjacencyList[source].push({ destination, price });
        this.adjacencyList[destination].push({ destination: source, price });
    }

    // 🗑️ Remove Airport
    removeAirport(airport) {
        if (!this.adjacencyList[airport]) return;

        for (let neighbor of this.adjacencyList[airport]) {
            this.adjacencyList[neighbor.destination] =
                this.adjacencyList[neighbor.destination].filter(
                    f => f.destination !== airport
                );
        }

        delete this.adjacencyList[airport];
    }

    // ❌ Remove Flight
    removeFlight(source, destination) {
        this.adjacencyList[source] =
            this.adjacencyList[source].filter(f => f.destination !== destination);

        this.adjacencyList[destination] =
            this.adjacencyList[destination].filter(f => f.destination !== source);
    }

    // 🔍 BFS Traversal
    bfs(start) {
        let visited = new Set();
        let queue = [start];

        while (queue.length > 0) {
            let airport = queue.shift();

            if (!visited.has(airport)) {
                console.log(airport);
                visited.add(airport);

                for (let neighbor of this.adjacencyList[airport]) {
                    queue.push(neighbor.destination);
                }
            }
        }
    }

    // 🔍 DFS Traversal
    dfs(start, visited = new Set()) {
        console.log(start);
        visited.add(start);

        for (let neighbor of this.adjacencyList[start]) {
            if (!visited.has(neighbor.destination)) {
                this.dfs(neighbor.destination, visited);
            }
        }
    }

    // ✈️ Shortest Path (Minimum Stops - BFS)
    shortestPath(source, destination) {
        let queue = [[source]];
        let visited = new Set();

        while (queue.length) {
            let path = queue.shift();
            let airport = path[path.length - 1];

            if (airport === destination) return path;

            if (!visited.has(airport)) {
                visited.add(airport);

                for (let neighbor of this.adjacencyList[airport]) {
                    let newPath = [...path, neighbor.destination];
                    queue.push(newPath);
                }
            }
        }

        return null;
    }

    // 💰 Cheapest Flight (Dijkstra)
    cheapestFlight(source, destination) {
        let costs = {};
        let visited = new Set();

        for (let airport in this.adjacencyList) {
            costs[airport] = Infinity;
        }

        costs[source] = 0;

        while (true) {
            let minNode = null;

            for (let airport in costs) {
                if (!visited.has(airport) &&
                    (minNode === null || costs[airport] < costs[minNode])) {
                    minNode = airport;
                }
            }

            if (minNode === null) break;

            let cost = costs[minNode];

            for (let neighbor of this.adjacencyList[minNode]) {
                let newCost = cost + neighbor.price;

                if (newCost < costs[neighbor.destination]) {
                    costs[neighbor.destination] = newCost;
                }
            }

            visited.add(minNode);
        }

        return costs[destination] === Infinity ? null : costs[destination];
    }

    // 📊 Analytics
    totalFlights() {
        let count = 0;
        for (let airport in this.adjacencyList) {
            count += this.adjacencyList[airport].length;
        }
        return count / 2; // because bidirectional
    }

    printFlightsDetails() {
        for (let airport in this.adjacencyList) {
            console.log(`${airport}:`);
            this.adjacencyList[airport].forEach(f =>
                console.log(`  -> ${f.destination} ($${f.price})`)
            );
        }
    }
}

// ---------------- TEST ----------------
let graph = new FlightGraph();

graph.addAirport("Los Angeles");
graph.addAirport("New York");
graph.addAirport("Chicago");
graph.addAirport("Miami");
graph.addAirport("Dallas");

graph.addFlight("Los Angeles", "New York", 300);
graph.addFlight("New York", "Chicago", 150);
graph.addFlight("Chicago", "Miami", 250);
graph.addFlight("Miami", "Dallas", 200);

// 🔍 Traversals
console.log("BFS:");
graph.bfs("Los Angeles");

console.log("DFS:");
graph.dfs("Los Angeles");

// ✈️ Shortest Path
console.log("Shortest Path:");
console.log(graph.shortestPath("Los Angeles", "Miami"));

// 💰 Cheapest Flight
console.log("Cheapest Cost:");
console.log(graph.cheapestFlight("Los Angeles", "Miami"));

// 📊 Analytics
console.log("Total Flights:", graph.totalFlights());