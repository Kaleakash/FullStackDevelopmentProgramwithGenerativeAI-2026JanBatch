let num = [6,5,4,3]
console.log("Before Sorting ")
console.log(num);
function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let key = arr[i];
        let j = i-1;
        
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        
        arr[j+1] = key;
        console.log("After Pass " + i + ": " + arr);
    }
    return arr;
}
console.log("After Sorting ")
console.log(insertionSort(num));