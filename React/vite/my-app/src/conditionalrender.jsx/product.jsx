import React from "react";

const Product = ({name,instock}) => {

    // if(instock){
    //     return <p>{name}✔</p>
    // }else{
    //     return <p>{name}❌</p>
    // }
  return (
    <div>
        <>
        <p>
            {instock && name + "✔"}
            {instock || name + "❌"}
        </p>
        </>
    </div>
  )
};

export default Product
