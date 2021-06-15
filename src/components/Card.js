const Card = (props) => {
  const { name, onCardClicked } = props;

  const handleClick = () => {
    onCardClicked(name);
  };

  return (
    <div className="Card" onClick={handleClick}>
      <div>-----Card.js-----</div>
      <div>{props.name}</div>
    </div>
  );
};

export default Card;
