import { useState, useEffect } from "react";

const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  const { name, score, onCardClicked } = props;

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
      <div>-----Card.js-----</div>
      <div>{name}</div>
    </div>
  );
};

export default Card;
