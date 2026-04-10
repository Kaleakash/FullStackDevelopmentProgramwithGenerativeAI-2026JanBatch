class Flight {
    constructor(source, destination, price) {
        this.source = source;
        this.destination = destination;
        this.price = price;
    }
}
class FlightGraph {
    constructor() {
        this.adjacencyList = {};    // of type objects property is airport and value is array of destination airports.
    }
    // creating node or vertex in the graph.
    addAirport(airport) {
        if (this.adjacencyList[airport]!== undefined) {
            //console.log(`Airport ${airport} already exists in the graph.`);
        } else {
            this.adjacencyList[airport] = [];
            //console.log(`Airport ${airport} added to the graph.`);
        }
    }
    // creating edge in the graph.
    addFlight(source, destination, price) {
        if (this.adjacencyList[source] === undefined || this.adjacencyList[destination] === undefined) {
            //console.log(`One or both airports not found in the graph.`);
        } else {
                this.adjacencyList[source].push({ destination, price });
            //console.log(`Flight added from ${source} to ${destination} with price $${price}.`);
            this.adjacencyList[destination].push({ destination: source, price });  // Assuming it's a bidirectional flight
            //console.log(`Flight added from ${destination} to ${source} with price $${price}.`);
        }
    }
    // Additional methods for graph traversal, finding paths, etc., can be added here.
    printFlightsDetails() {
        for (let airport in this.adjacencyList) {
                console.log(`${airport}:`);
                if (this.adjacencyList[airport].length === 0) {
                    console.log("  No flights available.");
                }else {
                this.adjacencyList[airport].forEach(flight => {
                    console.log(`  -> ${flight.destination} ($${flight.price})`);
                }
                );    
            }
        }
    }
    // search for a flight from source to destination
    findFlight(source, destination) {
        if (this.adjacencyList[source] === undefined || this.adjacencyList[destination] === undefined) {    
            //console.log(`One or both airports not found in the graph.`);
            return null;
        } else {
            const flights = this.adjacencyList[source];
            for (let flight of flights) {
                if (flight.destination === destination) {
                    return flight.price;
                }
            }
           // console.log(`No direct flight found from ${source} to ${destination}.`);
            return null;
        }
    }
}   
let flightGraph = new FlightGraph();
flightGraph.addAirport("Los Angeles");
flightGraph.addAirport("New York");
flightGraph.addAirport("Chicago");
flightGraph.addAirport("Miami");
flightGraph.addAirport("Dallas");
flightGraph.addAirport("New York");  // trying to add duplicate airport

flightGraph.addFlight("Los Angeles", "New York", 300);  // trying to add flight before adding airports
flightGraph.addFlight("New York", "Chicago", 150);
flightGraph.addFlight("Chicago", "Miami", 250);
//flightGraph.addFlight("Miami", "Dallas", 200);

flightGraph.printFlightsDetails();
console.log("--------------------------")
let price = flightGraph.findFlight("Los Angeles", "New York");  // should return 300
console.log(`The price of the flight from Los Angeles to New York is $${price}.`);
price = flightGraph.findFlight("New York", "Miami");  // should return null
if (price !== null) {
    console.log(`The price of the flight from New York to Miami is $${price}.`);
}else {
    console.log(`No direct flight from New York to Miami.`);
}