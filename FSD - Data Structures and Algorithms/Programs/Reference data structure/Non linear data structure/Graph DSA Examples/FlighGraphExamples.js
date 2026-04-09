class Flight {
    constructor(source, destination) {
        this.source = source;
        this.destination = destination;
    }
}
class FlightGraph {
    constructor() {
        this.adjacencyList = {};    // of type objects property is airport and value is array of destination airports.
    }
    // creating node or vertex in the graph.
    addAirport(airport) {
        if (this.adjacencyList[airport]!== undefined) {
            console.log(`Airport ${airport} already exists in the graph.`);
        } else {
            this.adjacencyList[airport] = [];
            console.log(`Airport ${airport} added to the graph.`);
        }
    }
    // creating edge in the graph.
    addFlight(source, destination) {
        if (this.adjacencyList[source] === undefined || this.adjacencyList[destination] === undefined) {
            console.log(`One or both airports not found in the graph.`);
        } else {
            this.adjacencyList[source].push(destination);
            console.log(`Flight added from ${source} to ${destination}.`);
            this.adjacencyList[destination].push(source);  // Assuming it's a bidirectional flight
            console.log(`Flight added from ${destination} to ${source}.`);
        }
    }
}
let flightGraph = new FlightGraph();
flightGraph.addAirport("Lost Angeles");
flightGraph.addAirport("New York");
flightGraph.addAirport("Chicago");
flightGraph.addAirport("Miami");
flightGraph.addAirport("Dallas");
flightGraph.addAirport("New York");  // trying to add duplicate airport
flightGraph.addFlight("A", "New York");
flightGraph.addFlight("Lost Angeles", "B");
flightGraph.addFlight("Lost Angeles", "New York");
flightGraph.addFlight("New York", "Chicago");
flightGraph.addFlight("Chicago", "Miami");
flightGraph.addFlight("Miami", "Dallas");
//console.log(flightGraph.adjacencyList);
