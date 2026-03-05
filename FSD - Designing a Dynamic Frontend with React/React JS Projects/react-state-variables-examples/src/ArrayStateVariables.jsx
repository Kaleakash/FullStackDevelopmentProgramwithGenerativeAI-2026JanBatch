import { useState } from "react";

function ArrayStateVariables() {
let [names,setNames]=useState(["John","Doe","Smith","Bob","Alice","Charlie"]); // type of array variable which hold more values of string type

    return(
        <div>
            <h2>Array State Variables</h2>
            <p>Names is {names} output as whole string format</p>
            <p>Names is {names.join(", ")} separated by , operator</p>
            <p>Names is {names[0]} first element of array</p>
            
            <hr/>
            <h2>All Student names</h2>
            {
                names.map(value=><p>{value}</p>)
            }
            <hr/>
            <h3>All Student names in un order list format</h3>
            <ul>
                {names.map(name=><li>{name}</li>)}
            </ul>
                        <hr/>
            <h3>All Student names in order list format</h3>
            <ol>
                {names.map(name=><li>{name}</li>)}
            </ol>
        </div>
    )

}

export default ArrayStateVariables;