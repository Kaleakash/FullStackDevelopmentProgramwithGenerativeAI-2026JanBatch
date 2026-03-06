import ArrayOfObjectStateVariables from "./ArrayOfObjectStateVariables"
import ArrayStateVariables from "./ArrayStateVariables"
import ObjectStateVariables from "./ObjectStateVariables"
import PrimitiveStateVariables from "./PrimitiveStateVarialbes"

function App() {


  return (
    <div>
      <h2>React State variable using useState hook</h2>
      {/* <PrimitiveStateVariables /> */}
      {/* <ArrayStateVariables/>  */}
      {/* <ObjectStateVariables/>  */}
      <ArrayOfObjectStateVariables/>
    </div>
  )
}

export default App
