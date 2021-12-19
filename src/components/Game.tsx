import { useState, useEffect } from "react";

import Card from "./cards/Card";
import Cards, { dummyCards } from "./cards/Cards";
import shuffle from "../utils/Shuffle";

import "../styles/Game.css";

type Props = {
  score: number,
  onCardClicked: Function,
};

const Game = ({score, onCardClicked}: Props) => {
  const [cards, setCards] = useState(dummyCards());

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

  const handleCardClick = (alreadyClicked: boolean) => {
    onCardClicked(alreadyClicked);
    setCards(shuffle(cards));
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
