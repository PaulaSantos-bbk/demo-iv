import React from "react";
import "./Card.css";

const Card = ({ flipped, matched, onClick, number, symbol }) => (
  <div className="card" onClick={onClick} data-number={number}>
    {flipped ? symbol : "X"}
  </div>
);

export default Card;
