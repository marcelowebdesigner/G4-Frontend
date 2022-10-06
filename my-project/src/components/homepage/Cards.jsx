import React from "react";

const Cards = props => (
  <div className="text-center bg-violet-600 py-10 rounded-md">
    <h2 className="text-purple-50">{props.title}</h2>
    <br/>
    <p className="text-purple-50">{props.msg}</p>
  </div>
);

export default Cards;
