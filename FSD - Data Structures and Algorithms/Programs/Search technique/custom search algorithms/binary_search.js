let num = [4,1,5,8,9,6,7,3,2];
let target = 10;
console.log("Original array:", num);
num.sort((a, b) => a - b); // Sort the array for binary search
console.log("Sorted array:", num);
function binarySearch(num, target) {

    if (num.length === 0) {
        return -1;
    }
    let mid = Math.floor(num.length / 2);
    if (num[mid] === target) {
        return mid;
    } else if (num[mid] > target) {
        return binarySearch(num.slice(0, mid), target);
    } else {
        let result = binarySearch(num.slice(mid + 1), target);
        return result === -1 ? -1 : result + mid + 1;
    }
}
let result = binarySearch(num, target);
if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found in the array.");
}