let fsObj = require('fs');
console.log("Modules loaded.")
let data = "\nThird Message Added...\n";
//fsObj.writeFileSync('output.txt', data);    // overwrite the file if it already exists
fsObj.appendFileSync('output.txt', data);    // append data to the file
console.log("Data written to file.")