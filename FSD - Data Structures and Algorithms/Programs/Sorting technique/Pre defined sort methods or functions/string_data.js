
let names = ["Ravi", "Ajay", "Vijay", "Sanjay", "Ajit","akash"];
console.log("Before sort")
console.log(names);
//names.sort();
names.sort((s1,s2)=>s1.localeCompare(s2)) // sort in ascending order
console.log("After sort ascending order")
console.log(names);
names.sort((s1,s2)=>s2.localeCompare(s1)) // sort in descending order
console.log("After sort descending order")
console.log(names)