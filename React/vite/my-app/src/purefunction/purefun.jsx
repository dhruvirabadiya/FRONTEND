import React from "react";

const Cup = ({ guest }) => {
    return (
        <div>
            <h1>{guest * 0.5}teaspoon of tealeaves</h1>
            <h1>some {guest * 0.5} cup of water</h1>
            <h1>some{guest * 0.5}cup of milk</h1>
            <h1>{guest * 0.5}teaspoon of sugar</h1>
        </div>
    )
}

export default Cup