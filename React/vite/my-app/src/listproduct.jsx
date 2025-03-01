import React from "react";
import './App.css'

const ListProduct = () =>{
    const listproduct = ["laptop","a-c","mixture","t.v","mouse"]
    return(
        <div>
            <h1 className="headText">This is demo component</h1>
            <ul className="pl-10">
                {
                    listproduct.map((item,index)=>{
                     return <li key={index}>{item}</li>
                    })
                }
                <span>{listproduct.length}</span>
            </ul>
        </div>
    )
}

export default ListProduct