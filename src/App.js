import React, { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [userNumber, setUserNumber] = useState("");
  const [predictedNumber, setPredictedNumber] = useState(null);

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleInputChange = (e) => {
    setUserNumber(e.target.value);
  };

  const predictNumber = () => {
    setPredictedNumber(4); // Trick always results in 4
    setStep(step + 1);
  };

  return (
    <div className="container">
      <h1>Mind Reading Trick</h1>

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
        </div>
      )}

      {step === 7 && (
        <div className="fade-in">
          <h2>Your final number is...</h2>
          <h1>🎩✨ {predictedNumber} ✨🎩</h1>
          <p>Magic, right? 😃</p>
        </div>
      )}
    </div>
  );
}

export default App;
