import React from "react";
import ComA from "./comA";
import "../App.css"
import image from "../assets/image.jpg"

const Image = () => {
    return (
        <img src={image} alt="" />
    )
}

const Props = () => {
    let names = "skillqode"
    let array = ["html", "css"]
    let obj = { lang1: "javascript", lang2: "react" }
    return (
        <div>
            <h1 className="headText">This is Props Component</h1>
            <ComA value={<Image />} />
        </div>
    )
}

export default Props


