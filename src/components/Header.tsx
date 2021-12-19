type Props = {
  score: number,
  highScore: number,
}

const Header = ({score, highScore}: Props) => {
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
      <div className="Header">
        <h4>
          <a href="https://github.com/JHurdle91/odin-memory-cards">
            Source Code
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Header;
