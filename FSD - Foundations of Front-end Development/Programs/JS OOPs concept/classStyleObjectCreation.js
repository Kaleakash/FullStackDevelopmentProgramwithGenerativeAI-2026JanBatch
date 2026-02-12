// // function style ie ES5 
// function Employee1() {
//     // property 
//     this.id=100;
//     this.name = "Bob"
//     // behaviour 
//     this.displayEmployee1= function() {
//         document.write("<br/> Display function part of ES5 style object creation")
//         document.write("<br/> id is "+this.id)
//         document.write("<br/> name is "+this.name)
//     }
// }
// let emp1 = new Employee1();
// emp1.displayEmployee1();

// // class style ie ES6
// class Employee2 {
//     // property without this, var as well as let. these variable part of object without this keyword  
//     //this.id=101;
//     //let id =101;
//     //var id = 101;
//     id =100;
//     name = "Bob"
//     // behaviour 
//     displayEmployee2() {
//         document.write("<br/> Display function part of ES6 style object creation")
//         document.write("<br/> id is "+this.id);
//         document.write("<br/> name is "+this.name)
//     }
// }

// let emp2 = new Employee2();
// emp2.displayEmployee2();

// constructor examples 
// class Employee {

//     constructor() {
//         document.write("<br/> object created")
//     }
//     display() {
//         document.write("<br/> Display function part of Employee class")
//     }
// }

// let emp1 = new Employee();
// let emp2 = new Employee();
// emp1.display();


// constructor with property 
class Employee {

    // constructor to do initialization for object property or instance property 
    constructor(id,name,age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    // behaviour for object ie display details 
    display() {
        document.write("<br/> Display function part of Employee class")
        document.write("<br/> id is "+this.id)
        document.write("<br/> nae is "+this.name)
        document.write("<br/> age is "+this.age)
    }
}

let emp1 = new Employee(100,"Bob",34);
let emp2 = new Employee(101,"Raj",36);
emp1.display();
emp2.display();