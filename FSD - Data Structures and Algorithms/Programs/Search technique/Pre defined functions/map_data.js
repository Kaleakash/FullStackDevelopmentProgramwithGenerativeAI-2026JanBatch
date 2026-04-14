let mm = new Map();
mm.set('name', 'John');
mm.set('age', 30);
mm.set('city', 'New York');
mm.set('name', 'Jane'); // duplicate key, will overwrite the previous value
console.log(`Name: ${mm.get('name')}`);
console.log(`Age: ${mm.get('age')}`);
console.log(`City: ${mm.get('city')}`);
console.log(`Country: ${mm.get('country')}`); // key not present, will return undefined
let search = 'age';
if(mm.has(search)) {
    console.log(`Element ${search} found in the map.`);
}else {
    console.log(`Element ${search} not found in the map.`);
}