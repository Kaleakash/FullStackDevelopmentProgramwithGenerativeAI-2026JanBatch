import { useState } from "react";
function ProductOperation() {
const [products,setProducts]=useState([]);  // array of product object  
const [product,setProduct]=useState({pid:"",pname:"",price:"",url:""}) // product object 
let storeProduct = (event)=> {
    console.log("Event fired");
    event.preventDefault();     // disable action default behaviour 
    console.log(product)
    setProducts([...products,product]); 
    setProduct({pid:"",pname:"",price:"",url:""})
}
    return(
        <div>
            <h2>Product CRUD Operation</h2>
            <form onSubmit={storeProduct}>
                <input type="text" name="pid" value={product.pid}
                placeholder="Enter the Product id" 
                onChange={(event)=>setProduct({...product,pid:event.target.value})}/>
                <br/>

                <input type="text" name="pname" value={product.pname}
                placeholder="Enter the Product name" 
                onChange={(event)=>setProduct({...product,pname:event.target.value})}/>
                <br/>

                <input type="text" name="price" value={product.price}
                placeholder="Enter the Product price" 
                onChange={(event)=>setProduct({...product,price:event.target.value})}/>
                <br/>

                <input type="text" name="url" value={product.url}
                placeholder="Enter the Product url" 
                onChange={(event)=>setProduct({...product,url:event.target.value})}/>
                <br/>

                <input type="submit" value="Store Product"/>
            </form>
            <hr/>
            <table border="1">
                <caption>Product Details</caption>
                <thead>
                    <tr>
                        <th>PId</th>
                        <th>PName</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index)=>
                        <tr key={index}>
                            <td>{product.pid}</td>
                            <td>{product.pname}</td>
                            <td>{product.price}</td>
                            <td><img src={product.url} width="50px" height="50px"/></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductOperation;