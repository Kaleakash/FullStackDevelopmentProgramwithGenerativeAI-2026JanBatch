let arr = [];
console.log(arr)
console.log(typeof arr)
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(1);
console.log(arr)

let ss = new Set();
console.log(ss)
console.log(typeof ss)
ss.add(1);
ss.add(2);
ss.add(3);
ss.add(1);      // Set does not allow duplicate values, so the second '1' will not be added
console.log(ss)
console.log("delete "+ss.delete(2)) // delete method returns true if the element was successfully removed, false  otherwise
console.log(ss)
console.log("delete "+ss.delete(4)) // trying to delete an element that does not exist in the set will return false
console.log(ss)
console.log("has 1: "+ss.has(1)) // has method returns true if the element exists in the set, false otherwise
console.log("has 2: "+ss.has(2))
console.log("size: "+ss.size) // size property returns the number of unique elements in the set
// retrieve element from set using for...of loop
for (let item of ss) {
    console.log(item)
}