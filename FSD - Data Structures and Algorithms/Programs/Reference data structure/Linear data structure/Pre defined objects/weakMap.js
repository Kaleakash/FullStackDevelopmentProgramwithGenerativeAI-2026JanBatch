let weakMap = new WeakMap();
let obj1 = {name:"Raj"};
let obj2 = {name:"Ravi"};

weakMap.set(obj1,"Login Successful");
weakMap.set(obj2,"Login Successful");
console.log(weakMap.get(obj1)); // Output: Login Successful
console.log(weakMap.get(obj2)); // Output: Login Successful
// Removing reference to obj1
obj1 = null;    // GC will remove obj1 from memory since it's no longer referenced
// Attempting to access obj1's value after removing reference
console.log(weakMap.get(obj1)); // Output: undefined (since obj1 is garbage collected)
// obj2 is still accessible
console.log(weakMap.get(obj2)); // Output: Login Successful