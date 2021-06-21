import { useState, useEffect } from "react";

import Card from "./cards/Card";
import Cards, { dummyCards } from "./cards/Cards";

const Game = (props) => {
  const [cards, setCards] = useState(dummyCards);

  // TODO: if score == 0, load new cards

  useEffect(() => {
    const getCards = async () => {
      setCards(await Cards());
    };
    getCards();
  }, []);

  Array.prototype.shuffle = function () {
    // shuffle array using Fisher-Yates algorithm
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
  };

  const handleCardClick = (alreadyClicked) => {
    props.onCardClicked(alreadyClicked);
    setCards(cards.shuffle());
  };

  const { score } = props;

  return (
    <div className="Game">
      <div>-----Game.js-----</div>
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
