let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
set.add(1); // duplicate value, will not be added to the set
let search = 6;
if(set.has(search)) {
    console.log(`Element ${search} found in the set.`);
}else {    
        console.log(`Element ${search} not found in the set.`);
}
console.log(`Size of the set: ${set.size}`);