let product1 = {pid:102, name:"Mobile", price:45000};
let product2 = {pid:101, name:"Laptop", price:85000};
let product3 = {pid:103, name:"Tablet", price:15000};
let products = [product1, product2, product3];
console.log("Before sort")
products.forEach(p=>console.log(p))
console.log("After sort by pid in ascending order")
products.sort((p1,p2)=>p1.pid-p2.pid) // sort by pid in ascending order
products.forEach(p=>console.log(p))
console.log("After sort by pid in descending order")
products.sort((p1,p2)=>p2.pid-p1.pid) // sort by pid in descending order
products.forEach(p=>console.log(p))
console.log("After sort by name in ascending order")
products.sort((p1,p2)=>p1.name.localeCompare(p2.name)) // sort by name in ascending order
products.forEach(p=>console.log(p))
console.log("After sort by name in descending order")
products.sort((p1,p2)=>p2.name.localeCompare(p1.name)) // sort by name in descending order
products.forEach(p=>console.log(p))
console.log("After sort by price in ascending order")
products.sort((p1,p2)=>p1.price-p2.price) // sort by price in ascending order
products.forEach(p=>console.log(p))
console.log("After sort by price in descending order")
products.sort((p1,p2)=>p2.price-p1.price) // sort by price in descending order
products.forEach(p=>console.log(p))

