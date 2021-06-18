import { useState } from "react";

import Card from "./cards/Card";
import Cards from "./cards/Cards";
import { getBreedImageUrl, getRandomBreeds } from "./cards/DogAPI";

const Game = (props) => {
  const [cards, setCards] = useState(Cards);

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

  getRandomBreeds(12);
  // TODO: use getRandomBreeds to make Cards

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
