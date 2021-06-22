import { useState, useEffect } from "react";

import Card from "./cards/Card";
import Cards, { dummyCards } from "./cards/Cards";
import shuffle from "../utils/Shuffle.js";

import "../styles/Game.css";

const Game = (props) => {
  const [cards, setCards] = useState(dummyCards());
  const { score } = props;

  useEffect(() => {
    const getCards = async () => {
      setCards(await Cards());
    };
    getCards();
  }, []);

  useEffect(() => {
    const getCards = async () => {
      setCards(await Cards());
    };
    if (score === 0) {
      getCards();
    }
  }, [score]);

  const handleCardClick = (alreadyClicked) => {
    props.onCardClicked(alreadyClicked);
    setCards(cards.shuffle());
  };

  return (
    <div className="Game">
      {cards.map((card) => {
        const { id, name, imageUrl } = card;
        return (
          <Card
            key={id}
            name={name}
            imageUrl={imageUrl}
            score={score}
            onCardClicked={handleCardClick}
          />
        );
      })}
    </div>
  );
};

export default Game;
