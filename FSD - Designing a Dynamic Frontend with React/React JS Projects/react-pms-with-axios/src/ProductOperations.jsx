import axios from "axios";
import { useState } from "react";
export const URL="http://localhost:3000/products";

function ProductOperation(){
let [products,setProducts]=useState([]);
let [error,setError]=useState("")

// ES5 style 
let loadProductsDetailsES5Style = ()=> {
    // using fetch function 
    //fetch(URL).then(response=>response.json()).then(result=>console.log(result)).catch(error=>console.log(error)) 
    // using axios 
    //axios.get(URL).then(result=>console.log(result.data)).catch(error=>console.log(error))
    axios.get(URL).then(result=>setProducts(result.data)).catch(error=>setError(error.message))
}
// ES6 style 
let loadProductsDetailsES6Style = async ()=> {
    // using fetch function 
    //fetch(URL).then(response=>response.json()).then(result=>console.log(result)).catch(error=>console.log(error)) 
    // using axios 
    //axios.get(URL).then(result=>console.log(result.data)).catch(error=>console.log(error))
    //axios.get(URL).then(result=>setProducts(result.data)).catch(error=>setError(error.message))
    try{
    let result = await axios.get(URL);  // await keyword make statement as synchronous await is replacement of then 
    setProducts(result.data);
    }catch(error){
        setError(error.message);
    }
    
}
    return(
        <div>
            <h2>Product Operation with Rest API using Axios</h2>
            <input type="button" value="Load Products" 
            onClick={loadProductsDetailsES6Style}/>
            <p>Number of product are </p>
            <table border="1">
                <thead>
                    <tr>
                        <th>PId</th>
                        <th>PName</th>
                        <th>Price</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.pname}</td>
                                    <td>{product.price}</td>
                                    <td>{product.qty}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
          
        </div>
    )
}

export default ProductOperation;