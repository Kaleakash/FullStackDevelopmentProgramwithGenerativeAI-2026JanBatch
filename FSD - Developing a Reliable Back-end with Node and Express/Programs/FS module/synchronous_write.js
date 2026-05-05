let fs = require('fs');
console.log("Modules loaded.")
let data = "Welcome to Node JS File System Module.";
fs.writeFileSync('output.txt', data);
console.log("Data written to file.")