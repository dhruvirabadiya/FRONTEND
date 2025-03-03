import React from "react";

const array = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

let filterItem = array.filter((item) => item.length < 45);
console.log("filterItem:", filterItem);

const ListRendering = () => {
  return (
    <div>
      <ul>
        <li>{filterItem}</li>
      </ul>
    </div>
  );
};

export default ListRendering
