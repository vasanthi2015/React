import React from "react";
import "../index.css";
import InvestmentItem from "./InvestmentItem";
const InvestmentReport = (props) => {
  console.log("init" +props.initialInvestment);
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.invData.map(inv => { return(
            <InvestmentItem
              key={inv.year}
              year={inv.year}
              initialInvestment={props.initialInvestment}
              yearlyInterest={inv.yearlyInterest}
              yearlyContribution={inv.yearlyContribution}
              savingsEndOfYear={inv.savingsEndOfYear}
            />)
          })}
        </tbody>
      </table>{" "}
    </div>
  );
};
export default InvestmentReport;
