import React from 'react'

function ProblemComponent() {
    throw new Error("Oops! Something broke 😬");
    return <p>This will never show</p>;
}

export default ProblemComponent