import React, { useState } from "react";
import "./index.css";

function Practice() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
    ];
    const [step, setStep] = useState(1);
    const [test] = useState({ name: 'Jonas' });
//   let step = 2;
  function handlePrevious(step) {
    //   alert("Previous Clicked");
        if(step>1) setStep(step - 1);
  }

  function handleNext() {
    //   alert("Next Clicked");
      if (step < 3) setStep(step + 1);
      test.name=''
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}{" "}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={()=>handlePrevious(step)}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Practice;
