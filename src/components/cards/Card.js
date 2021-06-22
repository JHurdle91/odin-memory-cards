import { useState, useEffect } from "react";

import "../../styles/Card.css";

const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  const { name, imageUrl, score, onCardClicked } = props;

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
