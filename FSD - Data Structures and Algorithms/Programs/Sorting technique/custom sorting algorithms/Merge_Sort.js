let num = [6,5,4,3]
console.log("Before Sorting ")
console.log(num);
function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }    
    let mid =(0 + arr.length) / 2;
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    
    return merge(left, right);

}
function merge(left, right){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log("After Sorting ")
console.log(mergeSort(num));