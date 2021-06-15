import Card from "./Card";

const Game = (props) => {
  const handleClick = (cardName) => {
    props.onCardClicked(cardName);
  };

  return (
    <div className="Game">
      <div>-----Game.js-----</div>
      <Card name="Card 1" onCardClicked={handleClick} />
      <Card name="Card 2" onCardClicked={handleClick} />
    </div>
  );
};

export default Game;
