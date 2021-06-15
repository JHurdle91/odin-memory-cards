import { useState } from "react";

import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (cardName) => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <Game onCardClicked={handleClick} />
    </div>
  );
}

export default App;
