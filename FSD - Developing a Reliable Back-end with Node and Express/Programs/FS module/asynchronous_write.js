let fs = require('fs');
let data = "Store data in file asynchronously";
// 1st parameter: file name, 2nd parameter: data to write, 3rd parameter: callback function
fs.writeFile('output1.txt', data, (err) => {
    if (err) {
        console.error(err); 
    } else {
        console.log('Data written to file successfully');
    }   
});

console.log("This statement is executed before the file is written");
console.log("1st Statement")
console.log("2nd Statement")
console.log("3rd Statement")