import React from "react";
import { useState, useEffect } from "react";

const ProductData = () => {
  const [pro, setPro] = useState([]);
  useEffect(() => {
    return async () => {
        try{
            let response = await fetch('https://fakestoreapi.com/products')
            let data = await response.json()
            console.log('productdata:',data);
            setPro(data)
        }catch(error){
            console.log(error);
        }
    };
  },[]);
  return (
    <div>
      <h1 className="haedText">This is ProductData Component</h1>
      {pro.map((item) => {
        return <div key={item.id}>
            <img src={item.image} alt=""></img>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </div>;
      })}
    </div>
  );
};

export default ProductData;
