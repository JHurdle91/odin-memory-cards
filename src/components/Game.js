import { useState } from "react";

import Card from "./Card";

const Game = (props) => {
  const initialCards = [
    { name: "Card 1", id: 1 },
    { name: "Card 2", id: 2 },
    { name: "Card 3", id: 3 },
    { name: "Card 4", id: 4 },
  ];
  const [cards, setCards] = useState(initialCards);

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
        return (
          <Card
            name={card.name}
            key={card.id}
            score={score}
            onCardClicked={handleCardClick}
          />
        );
      })}
    </div>
  );
};

export default Game;
