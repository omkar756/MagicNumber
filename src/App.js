import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (step === 7) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 sec
    }
  }, [step]);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const revealNumber = () => {
    setStep(7);
  };

  const resetGame = () => {
    setStep(1);
  };

  return (
    <div className="container">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <h1 className="animated-title">Mind Reading Trick 🎩</h1>
      <p className="step-indicator">Step {step} of 6</p>

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
          <p>Now, let me reveal your final number!</p>
          <button onClick={revealNumber} style={{ marginTop: "10px" }}>
            Reveal Number
          </button>
        </div>
      )}

      {step === 7 && (
        <div className="fade-in final-reveal">
          <h2>✨ Behold the Power of Magic! ✨</h2>
          <div className="magic-box">
            <h1 className="magic-number">🎩✨ 4 ✨🎩</h1>
          </div>
          <p className="magic-text">Told you, I can read minds! 😏🔥</p>
          <button className="restart-button" onClick={resetGame}>
            Try Again 🔄
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
