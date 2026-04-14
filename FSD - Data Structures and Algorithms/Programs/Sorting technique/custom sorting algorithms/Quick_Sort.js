let num = [6,5,4,3]
console.log("Before Sorting ")
console.log(num);
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot).concat(quickSort(right));
}
console.log("After Sorting ")
console.log(quickSort(num));