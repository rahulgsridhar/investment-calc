import { useState } from "react";

function UserInput({ userInput, handleUserInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(event) =>
              handleUserInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(event) =>
              handleUserInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            value={userInput.expectedReturn}
            required
            onChange={(event) =>
              handleUserInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            value={userInput.duration}
            required
            onChange={(event) =>
              handleUserInput("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
