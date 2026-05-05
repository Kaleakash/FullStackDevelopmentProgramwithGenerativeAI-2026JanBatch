let fs = require("fs");
let data = fs.readFileSync("output.txt");
console.log(data);  // it display the data in buffer format
console.log(data.toString());  // to convert the buffer data into string format