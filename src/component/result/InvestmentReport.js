import React from "react";
import classes from './result.module.css';

import InvestmentItem from "./InvestmentItem";
const InvestmentReport = (props) => {
  
  return (
    <div>
      <table className={classes.result}>
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
