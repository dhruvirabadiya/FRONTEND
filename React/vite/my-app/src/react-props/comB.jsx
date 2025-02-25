import React from "react";
import ComC from "./comC";

const ComB = ({ value }) => {
    return (
        <div>
            <h1>This is B componenent:{value}</h1>
            <ComC value={value} />
        </div>
    )
}

export default ComB