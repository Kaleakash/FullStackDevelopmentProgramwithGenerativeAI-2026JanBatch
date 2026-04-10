// let num = [3,1,6,8,2,5,4,7,9];
// console.log("Before Sort")
// console.log(num);
// num.sort(); // by default it sort in ascending order
// console.log("After Sort")
// console.log(num)
// let num1 = [3,1,20,6,8,11,2,5,4,42,7,9,67];
// console.log("Before Sort")
// console.log(num1);
// //num1.sort(); // by default it sort in ascending order
// // sort function return type is number 
// // if return value is negative then n1 will come before n2
// // if return value is positive then n2 will come before n1
// // if return value is 0 then n1 and n2 are equal and their order will not change
// num1.sort((n1,n2)=>n1-n2)   // sort by ascending order
// console.log("After Sort Ascending order")
// console.log(num1) // it sort in lexicographical order because it convert number to string and then sort
// num1.sort((n1,n2)=>n2-n1)   // sort by descending order
// console.log("After Sort Descending order")
// console.log(num1)

let num3 = [3,1,2];
console.log("Before sort")
console.log(num3);
num3.sort((n1,n2)=> {
    console.log(`n1 = ${n1} n2 = ${n2}`)
    return n1-n2;
})
console.log("After sort - Ascending order")
console.log(num3)
num3.sort((n1,n2)=> {
    console.log(`n1 = ${n1} n2 = ${n2}`)
    return n2-n1;
});
console.log("After sort - Descending order")
console.log(num3)