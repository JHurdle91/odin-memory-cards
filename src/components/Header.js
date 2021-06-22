const Header = (props) => {
  const { score, highScore } = props;
  return (
    <div className="Header">
      <div>
        <h1>Dog Memory</h1>
      </div>
      <div>
        <h2>Don't click the same dog twice!</h2>
      </div>
      <div className="scoreContainer">
        <h3>Score: {score}</h3>
        <h3>High Score: {highScore}</h3>
      </div>
    </div>
  );
};

export default Header;
