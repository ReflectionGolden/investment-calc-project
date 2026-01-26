import {useState} from 'react'
import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
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
    setUserInput({...userInput, [inputIdentifier]: newValue});
  }
  function resetValue(e) {
    e.preventDefault();
    setUserInput(defaultValue);
  }
  
  return (
    <>
      <Header />
      <UserInput defaultValue={defaultValue} userInput={userInput} handleInputChange={handleInputChange} resetValue={resetValue} />
      {/* additional components goes here */}
    </>
  )
}

export default App
