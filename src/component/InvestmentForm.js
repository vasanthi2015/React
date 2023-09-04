import React, { useState } from "react";

const InvestmentForm = (props) => {
  const initializeInvProperties = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };

  const [investmentProperties, setInvestmentProperties] = useState(
    initializeInvProperties
  );

  function changeHandler(input, value) {
    setInvestmentProperties((prevState) => {
      return { ...prevState, 
             [input]: +value,
             };
    });
    console.log(investmentProperties);
  }

  const submitDataHandler = (event) => {
    event.preventDefault();
    const userData = {
      ...investmentProperties,
    };
    props.addData(userData);
  };

  const resetHandler = () => {
    setInvestmentProperties(initializeInvProperties);
  };

  return (
    <div>
      <form onSubmit={submitDataHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              value={investmentProperties["current-savings"]}
              onChange={(event) =>
                changeHandler("current-savings", event.target.value)
              }
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              onChange={(event) =>
                changeHandler("yearly-contribution", event.target.value)
              }
              id="yearly-contribution"
              value={investmentProperties["yearly-contribution"]}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              onChange={(event) =>
                changeHandler("expected-return", event.target.value)
              }
              id="expected-return"
              value={investmentProperties["expected-return"]}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              onChange={(event) =>
                changeHandler("duration", event.target.value)
              }
              id="duration"
              value={investmentProperties["duration"]}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={resetHandler} className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};
export default InvestmentForm;
