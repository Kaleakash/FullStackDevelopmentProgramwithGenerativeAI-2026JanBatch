console.log(this)       // window object 
function Hello() {
    console.log(this)       // window 
}
Hello();                // we call as normal function 

function Employee() {       
    console.log(this)       // it refer to employee object. 
}
let emp1 =new Employee()    // we created memory 

// normal function 
function showData1(name,age) {
    console.log("Normal function no this keyword")
    console.log(name+" "+age)
}
showData1("Steven",21);     // name is steven and age is 21
showData1("Raj")            // name is raj age is undefined 
showData1()                 // name is undefined as well as age is undefined
// normal function with passing object property 
function showData2(name,age){
    console.log("Normal function with passing property individually one by one with objects")
    console.log(name+" "+age)
}
let user1 = {name:"Steven",age:21,id:100}
showData2(user1.name,user1.age)
// call function with this keyword 
// it invoke the functions immediately and accept the arguments one by one
function showData3() {
    console.log("I showData3")
    console.log(this.name+" "+this.age+" "+this.id)
}
//showData3();
//showData3.call(user1)
showData3.call(user1)



