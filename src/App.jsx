import React, { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const validInput = userInput.duration >= 1;
  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <React.Fragment>
      <Header />
      <UserInput userInput={userInput} handleUserInput={handleUserInput} />
      {validInput ? (
        <Result result={userInput} />
      ) : (
        <p className="center">Enter Valid Duration(&gt;=1)</p>
      )}
    </React.Fragment>
  );
}

export default App;
