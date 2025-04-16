import React from "react";

// export const ProductCard = React.memo(function ProductCard({ name }) {
//     console.log("Product Rerender");
//     return <h3>{name}</h3>;
// });

export const ProductCard = React.memo(function ProductCard({ names }) {
    console.log("Product Rerender");
    return (
        <div>
            {names.map((name, index) => {
                return <h3 key={index}>{name}</h3>
            })}
        </div>
    )
});
