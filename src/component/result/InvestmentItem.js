import React from "react";
import classes from './result.module.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const InvestmentItem = (props) => {
  
  
  return(
  <tr>
    <td>{props.year}</td>
    <td>{formatter.format(props.savingsEndOfYear)}</td>
    <td>{formatter.format(props.yearlyInterest)}</td>
    <td>{formatter.format(props.savingsEndOfYear - props.initialInvestment - props.yearlyContribution * props.year)}</td>
    <td>{formatter.format(props.initialInvestment + props.yearlyContribution +props.year)}</td>
    
  </tr>);
};

export default InvestmentItem;