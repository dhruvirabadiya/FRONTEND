import React from "react";
import Product from "./product";

 const Cart = () =>{
    return(
        <div>
            <Product name = "Laptop"  instock = {false}/>
            <Product name = "A.C"  instock = {true}/>
        </div>
    )
 }

 export default Cart