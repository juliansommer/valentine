import { useState } from "react";
import "./App.css";

const phrases = ["No", ":(", "Don't Do This", "I Love You Babe"];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  // Incremental change value for width and height
  const changeValue = 5;

  // Initial dimensions for buttons
  const initialSize = 15; // Initial font size in pixels
  const initialWidth = 120; // Initial width in pixels
  const initialHeight = 40; // Initial height in pixels

  // Calculate sizes based on noCount
  const yesButtonSize = initialSize + noCount * changeValue; // Increases size
  const noButtonSize = initialSize - noCount * (changeValue / 2); // Decreases size

  const yesButtonWidth = initialWidth + noCount * changeValue; // Increases width
  const noButtonWidth = initialWidth - noCount * changeValue; // Decreases width

  const yesButtonHeight = initialHeight + noCount * changeValue; // Increases height
  const noButtonHeight = initialHeight - noCount * changeValue; // Decreases height

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://c.tenor.com/jjM8wEXXNqwAAAAd/kiss.gif"
          />
          <div className="text">Yay!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://www.icegif.com/wp-content/uploads/icegif-1.gif"
          />
          <div className="text">Will you be my valentine?</div>
          <div className="button-container">
            <button
              className="yes-button"
              onClick={() => setYesPressed(true)}
              style={{
                fontSize: `${yesButtonSize}px`,
                width: `${yesButtonWidth}px`,
                height: `${yesButtonHeight}px`,
              }}
            >
              Yes
            </button>
            <button
              className="no-button"
              onClick={handleNoClick}
              style={{
                fontSize: `${Math.max(noButtonSize, 0)}px`, // Prevents negative values
                width: `${Math.max(noButtonWidth, 0)}px`, // Prevents negative values
                height: `${Math.max(noButtonHeight, 0)}px`, // Prevents negative values
              }}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
