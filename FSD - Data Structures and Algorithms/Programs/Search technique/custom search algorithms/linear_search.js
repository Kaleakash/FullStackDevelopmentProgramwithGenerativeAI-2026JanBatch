let num = [4,1,5,8,9,6,7,3,2,5];
let target = 5;
function linearSearch(num, target) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] === target) {
            return i;
        }
    }   
    return -1;
}
let result = linearSearch(num, target);
if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {    
    console.log("Element not found in the array.");
}
function linearSearchWithNumberOfElement(num, target) {
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] === target) {
            count++;
        }
    }
    return count;
}
let countResult = linearSearchWithNumberOfElement(num, target);
if(countResult > 0) {
    console.log(`Element found ${countResult} times in the array.`);
} else {
    console.log("Element not found in the array.");
}