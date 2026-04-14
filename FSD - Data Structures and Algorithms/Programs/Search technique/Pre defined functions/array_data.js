let num = [3,1,4,1,5,9];
let search = 1;
// find method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
// if element not present it return undefined
let result1 = num.find(element => element === search);
if(result1 !== undefined) {
    console.log(`Element ${search} found in the array.`);
}else {
    console.log(`Element ${search} not found in the array.`);
}
let elementPosition = num.findIndex(element => element === search);
if(elementPosition !== -1) {
    console.log(`Element ${search} found at index ${elementPosition}.`);
}else {
    console.log(`Element ${search} not found in the array.`);
}
let elementPresentNumberOfTimes = num.filter(element => element === search).length;
if(elementPresentNumberOfTimes > 0) {
    console.log(`Element ${search} found ${elementPresentNumberOfTimes} times in the array.`);  
}else {
    console.log(`Element ${search} not found in the array.`);
}
