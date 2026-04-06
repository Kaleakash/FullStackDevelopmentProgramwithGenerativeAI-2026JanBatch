let mm  = new Map();
console.log(mm); // Map(0) {}
console.log(typeof mm); // object
mm.set(100,"Steven");
mm.set(200,"Smith");
mm.set(300,"John");
    if(mm.has(1000)){
        console.log("Key 1000 is already present in the map");
    }else {
        mm.set(1000,"Raj");
    }
mm.set(400,"Smith");
mm.set("john@gmail.com","John");
console.log(mm);
console.log(mm.get(100)); // Raj
console.log(mm.get(200)); // Smith
console.log(mm.get(1000)); // undefined
console.log(mm.has(100)); // true
console.log(mm.has(1000)); // false
console.log(mm.size);
// retrieving keys
for(let key of mm.keys()){
    console.log("Key is: "+key+" Value is "+mm.get(key));
}