import { useState } from "react"
function ArrayOfObjectStateVariables() {
    let [employees, setEmployees] = useState([
        { id: 100, name: "John", age: 30 },
        { id: 200, name: "Jane", age: 25 },
        { id: 300, name: "Bob", age: 35 },
        { id: 100, name: "Alice", age: 28 },
    ])
    let [employee,setEmployee]=useState({id:"",name:"",age:""});
let addEmployee = ()=> {
    //console.log(employee);
    // ...employees hold existing employees 
    // employee add new employee details
    setEmployees([...employees,employee])
    setEmployee({id:"",name:"",age:""});
}
    return(
        <div>
<input type="text" placeholder="Enter the Id" name="id"
onChange={(event)=>setEmployee({...employee,"id":event.target.value})} value={employee.id}/>

<input type="text" placeholder="Enter the Name" name="name"
onChange={(event)=>setEmployee({...employee,"name":event.target.value})}   value={employee.name}/>

<input type="text" placeholder="Enter the Age" name="age"
onChange={(event)=>setEmployee({...employee,"age":event.target.value})} value={employee.age}/>

<br/>
<input type="button" value="Add Employee" onClick={addEmployee}/>

            <h3>Employee Details</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
            </thead>
            <tbody>
            {
                employees.map((emp,index)=>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                    </tr>
                )
            }
            </tbody>
            </table>
        </div>
    )
}

export default ArrayOfObjectStateVariables