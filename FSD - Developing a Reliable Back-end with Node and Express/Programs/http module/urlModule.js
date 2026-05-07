let url = require('url');

let urlString = 'http://www.google.com:80/aboutus.html?name=john&age=21'
console.log(urlString)
// url.parse() method is used to parse a URL string and return an object containing various components of the URL, such as the protocol, hostname, port, pathname, query parameters, etc.
let urlObj = url.parse(urlString,true);
console.log(urlObj)
console.log(urlObj.protocol) // http:
console.log(urlObj.hostname) // www.google.com
console.log(urlObj.port) // 80
console.log(urlObj.pathname) // /aboutus.html
console.log(urlObj.query) // { name: 'john', age: '21' }
console.log(urlObj.query.name) // john
console.log(urlObj.query.age) // 21