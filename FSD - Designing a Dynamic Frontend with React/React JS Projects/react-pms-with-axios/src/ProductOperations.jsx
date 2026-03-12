import axios from "axios";
import { useState } from "react";
export const URL="http://localhost:3000/products";

function ProductOperation(){
let [products,setProducts]=useState([]);
let [error,setError]=useState("")
let [product,setProduct]=useState({pname:"",price:"",qty:""});

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

let storeProduct = async (event)=> {
    event.preventDefault();
    console.log(product)
    let result = await axios.post(URL,product);     // store the data in json server 
    console.log(result);    // it return stored data with id 
    setProduct({pname:"",price:"",qty:""});
}
    return(
        <div>
            <h2>Product Operation with Rest API using Axios</h2>
            <input type="button" value="Load Products" 
            onClick={loadProductsDetailsES6Style}/>
            <form onSubmit={storeProduct}>
                <input type="text" name="pname" value={product.pname}
                placeholder="Enter the Product Name"
                onChange={(event)=>setProduct({...product,"pname":event.target.value})}/>
                
                <input type="text" name="price" value={product.price}
                placeholder="Enter the Product Price"
                onChange={(event)=>setProduct({...product,"price":event.target.value})}/>

                <input type="text" name="qty" value={product.qty}
                placeholder="Enter the Product Qty"
                onChange={(event)=>setProduct({...product,"qty":event.target.value})}/><br/>

                <input type="submit" value="Store Product"/>
                </form>
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