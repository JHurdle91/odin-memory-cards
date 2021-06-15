const Header = (props) => {
  const { score, highScore } = props;
  return (
    <div className="Header">
      <div>-----Header.js-----</div>
      <div>Score: {score}</div>
      <div>High Score: {highScore}</div>
    </div>
  );
};

export default Header;
