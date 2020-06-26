import React from "react";
import "./GamePage.css";
import { Card } from "../../components";

//extracting from props deck
const GamePage = ({ deck = [], onClick, onReset }) => (
  <div className="deck">
    {deck.map((card, i) => (
      <Card key={i} number={i} {...card} onClick={onClick} />
    ))}

    <button className="button" onClick={onReset}>
      Restart
    </button>
  </div>
);

export default GamePage;
