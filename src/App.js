import React, { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [userNumber, setUserNumber] = useState("");
  const [predictedNumber, setPredictedNumber] = useState(null);
  const [error, setError] = useState(false);

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleInputChange = (e) => {
    setUserNumber(e.target.value);
  };

  const predictNumber = () => {
    if (parseInt(userNumber) !== 4) {
      setError(true);
      return;
    }
    setPredictedNumber(4);
    setStep(step + 1);
  };

  return (
    <div className="container">
      <h1>Mind Reading Trick 🎩</h1>

      {step === 1 && (
        <div className="fade-in">
          <h2>Step 1</h2>
          <p>Think of a number between 1 and 10.</p>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="fade-in">
          <h2>Step 2</h2>
          <p>Multiply your number by 2.</p>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div className="fade-in">
          <h2>Step 3</h2>
          <p>Add 8 to the result.</p>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 4 && (
        <div className="fade-in">
          <h2>Step 4</h2>
          <p>Divide the result by 2.</p>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 5 && (
        <div className="fade-in">
          <h2>Step 5</h2>
          <p>Now subtract the original number you thought of.</p>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 6 && (
        <div className="fade-in">
          <h2>Final Step</h2>
          <p>Enter the final number you got:</p>
          <input
            type="number"
            value={userNumber}
            onChange={handleInputChange}
            placeholder="Your result"
          />
          <br />
          <button onClick={predictNumber} style={{ marginTop: "10px" }}>
            Predict Number
          </button>
          {error && (
            <p className="error-message">💥 Don't fool me! I can read your mind! 💥</p>
          )}
        </div>
      )}

      {step === 7 && (
        <div className="fade-in final-reveal">
          <h2>✨ Behold the Power of Magic! ✨</h2>
          <div className="magic-box">
            <h1 className="magic-number">🎩✨ {predictedNumber} ✨🎩</h1>
          </div>
          <p className="magic-text">Told you, I can read minds! 😏🔥</p>
        </div>
      )}
    </div>
  );
}

export default App;
