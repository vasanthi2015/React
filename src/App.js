import logo from "./assets/investment-calculator-logo.png";
import InvestmentForm from "./component/InvestmentForm";
import InvestmentReport from "./component/InvestmentReport";
import React, {useState} from 'react';

function App() {
  const yearlyData = [];
  const[userInput, setUserInput] = useState(null);
  

  const addYearlyData = (userInput) => {
    console.log(userInput);
    setUserInput(userInput);
  }
  

  if(userInput){
    
 
    let currentSavings = +userInput['current-savings']; 
    console.log("curr" + userInput);
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
      console.log(yearlyData);
    }
  }

 


  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <InvestmentForm addData={addYearlyData} />

      {!userInput && <p style ={{textAlign: 'center'}}>No Investment calculated yet.</p>}

      {userInput && <InvestmentReport invData={yearlyData} initialInvestment={userInput['current-savings']} />}
    </div>
  );
}
export default App;
