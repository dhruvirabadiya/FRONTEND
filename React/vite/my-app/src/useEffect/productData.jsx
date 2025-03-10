import React from "react";
import { useState, useEffect } from "react";
import '../App.css'

const ProductData = () => {
  const [pro, setPro] = useState([]);
  // useEffect(() => {
  //   return async () => {
  //       try{
  //           let response = await fetch('https://fakestoreapi.com/products')
  //           let data = await response.json()
  //           console.log('productdata:',data);
  //           setPro(data)
  //       }catch(error){
  //           console.log(error);
  //       }
  //   };
  // },[]);

  // useEffect(() => {
  //   return async () => {
  //     let response = await fetch('https://fakestoreapi.com/products')
  //       .then(async (response) => {
  //         return await response.json()
  //       })
  //       .then((data) => {
  //         setPro(data)
  //       })
  //   }
  // })
  // console.log(pro);

  const handleData = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      console.log("productdata:", data);
      setPro(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 className="haedText">This is ProductData Component</h1>
      <button className="btn" onClick={handleData}>Click For Product</button>
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
