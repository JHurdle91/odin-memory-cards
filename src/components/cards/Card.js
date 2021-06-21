import { useState, useEffect } from "react";

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
      <div>-----Card.js-----</div>
      <div>{name}</div>
      <img src={imageUrl} alt={name} />
    </div>
  );
};

export default Card;
