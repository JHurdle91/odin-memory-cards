import { useState, useEffect } from "react";

import "../../styles/Card.css";

type Props = {
  name: string,
  imageUrl: string,
  score: number,
  onCardClicked: Function,
}

const Card = ({name, imageUrl, score, onCardClicked}: Props) => {
  const [clicked, setClicked] = useState(false);

  const handleCardClick = () => {
    onCardClicked(clicked);
    if (!clicked) setClicked(true);
  };

  useEffect(() => {
    if (score === 0) {
      setClicked(false);
    }
  }, [score]);

  return (
    <div className="Card" onClick={handleCardClick}>
      <div>{name}</div>
      <img src={imageUrl} alt={name} />
    </div>
  );
};

export default Card;
