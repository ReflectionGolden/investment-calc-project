import {useState} from 'react'
import { calculateInvestmentResults } from './util/investments.js';
import { generatepdf } from './util/generatereport.js';
import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Output from './components/Output.jsx'
import './App.css'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 4000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10
  });
  const defaultValue = {
    initialInvestment: 4000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10
  };
  
  const handleInputChange = (inputIdentifier, newValue) => {
    setUserInput({...userInput, [inputIdentifier]: +newValue});
  }
  function resetValue(e) {
    e.preventDefault();
    setUserInput(defaultValue);
  }
  function handleGeneratePDF() {
    const resultData = calculateInvestmentResults(userInput);
    generatepdf({...userInput,results:resultData});
  }
  
  return (
    <>
      <Header />
      <UserInput defaultValue={defaultValue} userInput={userInput} handleInputChange={handleInputChange} resetValue={resetValue} />
      <div className='mx-auto w-fit'>
        <button onClick={handleGeneratePDF}>Generate Report</button>
      </div>
      <Output userInput={userInput}/>
      {/* additional components goes here */}
    </>
  )
}

export default App
