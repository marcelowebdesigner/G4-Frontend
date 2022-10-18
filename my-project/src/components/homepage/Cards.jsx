import React from "react";

const Cards = ({title, msg}) => (
  <div className="text-center bg-violet-600 py-10 rounded-md px-2">
    <h2 className="text-purple-50">{title}</h2>
    <br/>
    <p className="text-purple-50">{msg}</p>
  </div>
);

export default Cards;
