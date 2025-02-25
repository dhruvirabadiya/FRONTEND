import React from "react";
import ComB from "./comB";

const ComA = (props) => {
    let name = props.value
    console.log(name);

    return (
        <div>
            <h1>This A component : {name}</h1>
            <ComB value={props.value} />
        </div>
    )
}

export default ComA


