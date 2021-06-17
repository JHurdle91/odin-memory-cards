import { useState, useEffect } from "react";

import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleCardClick = (alreadyClicked) => {
    if (alreadyClicked) {
      // game over;
      setScore(0);
    } else {
      setScore((prevScore) => prevScore + 1);
    }
  };

  useEffect(() => {
    setHighScore((prevHighScore) => {
      return score > prevHighScore ? score : prevHighScore;
    });
  }, [score]);

  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <Game score={score} onCardClicked={handleCardClick} />
    </div>
  );
}

export default App;
