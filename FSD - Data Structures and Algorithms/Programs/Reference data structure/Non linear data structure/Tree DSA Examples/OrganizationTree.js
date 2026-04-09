class Employee {
    constructor(name, title) {
        this.name = name;
        this.title = title;
        this.subordinates = [];
    }
    addSubordinate(employee) {
        this.subordinates.push(employee);
    }
    display(indent = 0) {
        console.log(`${' '.repeat(indent)}${this.name} (${this.title})`);
        for (let subordinate of this.subordinates) {
            subordinate.display(indent + 2);
        }
    }
}

let ceo = new Employee("Alice", "CEO");

let vp1 = new Employee("Bob", "VP of Sales");
let vp2 = new Employee("Charlie", "VP of Engineering");

let manager1 = new Employee("David", "Sales Manager");
let manager2 = new Employee("Eve", "Engineering Manager");

let employee1 = new Employee("Frank", "Sales Representative");
let employee2 = new Employee("Grace", "Software Engineer");
let employee3 = new Employee("Heidi", "Software Engineer");
let employee4 = new Employee("Ivan", "Software Engineer");
let employee5 = new Employee("Judy", "Software Engineer");
ceo.addSubordinate(vp1); // Alice -> Bob
ceo.addSubordinate(vp2); // Alice -> Charlie

vp1.addSubordinate(manager1); // Bob -> David
vp2.addSubordinate(manager2); // Charlie -> Eve


manager1.addSubordinate(employee1); // David -> Frank
manager2.addSubordinate(employee2);
manager2.addSubordinate(employee3);
manager2.addSubordinate(employee4);
manager1.addSubordinate(employee5); // David -> Judy

ceo.display();