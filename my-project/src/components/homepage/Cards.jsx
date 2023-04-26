import React from "react";


const Cards = ({title, msg, icon}) => (
  <div className="text-center bg-purple-half-dark py-5 rounded-md px-2">
    <img src={icon} alt="Campana" className="m-auto pb-4"/>
    <h2 className="text-yellow-100 font-semibold pb-4">{title}</h2>
    <p className="text-purple-50">{msg}</p>
  </div>
);

export default Cards;
