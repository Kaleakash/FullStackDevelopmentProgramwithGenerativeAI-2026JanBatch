let fs = require('fs');
// 1st parameter: file name, 2nd parameter: callback function
fs.readFile('output.txt',   (err, data) => {
    if (err) {
        console.error(err); 
    } else {
        console.log('Data read from file successfully');
        console.log(data.toString());   // converting buffer to string
    }
});

console.log("This statement is executed before the file is read");
console.log("1st Statement")
console.log("2nd Statement")
console.log("3rd Statement")