let sessionData  = new WeakSet();
let obj1 = {name: "John@gmail.com"};
let obj2 = {name: "Jane@gmail.com"};
let obj3 = {name: "Doe@gmail.com"};

sessionData.add(obj1);
sessionData.add(obj2);
sessionData.add(obj3);
//sessionData.add(100)
//console.log(sessionData.size); // undefined, WeakSet does not have size property
console.log(sessionData.has(obj1)); // true
console.log(sessionData.has(obj2)); // true
console.log(sessionData.has(obj3)); // true

obj1 = null; // Remove reference to obj1 GC
console.log(sessionData.has(obj1)); // false, obj1 is garbage collected