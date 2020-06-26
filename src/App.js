import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HomePage, GamePage, SettingsPage } from "./pages";
import { symbols } from "./constants";
import { createDeck, shuffle } from "./utilities";

//react fragments to wrap content <></> eg the <div>
const allCards = symbols.concat(symbols);

function App() {
  const createNewDeck = () => createDeck(shuffle(allCards));
  const [deck, setDeck] = useState(createDeck(symbols.concat(symbols)));
  const onReset = () => setDeck(createNewDeck());
  const onClick = (e) => {
    const clickedCard = +e.target.dataset.number;
    setDeck(
      deck.map((card, i) =>
        i !== clickedCard ? card : { ...card, flipped: !card.flipped }
      )
    );
  };

  //game is passed as a child of route
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/game" exact>
        <GamePage deck={deck} onClick={onClick} onReset={onReset} />
      </Route>
      <Route path="/settings" component={SettingsPage} />
    </Switch>
  );
}

export default App;
