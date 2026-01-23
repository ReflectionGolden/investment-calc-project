import {useState} from 'react'
import '../App.css'

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 4000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10
  });
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput({...userInput, [inputIdentifier]: newValue});
  }
  return(
    <>
    <section className='p-4 max-w-200 my-8 mx-auto rounded-sm bg-gray-900'>
      <form>
        <div className='flex justify-between gap-6 mb-2'>
          <InvestInput id="initialInvestment" label="Initial Investment (£)" value={userInput.initialInvestment} handleChange={handleChange}/>
          <InvestInput id="annualInvestment" label="Annual Investment (£)" value={userInput.annualInvestment} handleChange={handleChange}/>
          <InvestInput id="expectedReturn" label="Expected Return (%)" value={userInput.expectedReturn} handleChange={handleChange}/>
          <InvestInput id="duration" label="Duration (Years)" value={userInput.duration} handleChange={handleChange}/>
        </div>
      </form>
    </section>
    </>
  ) 
}

function InvestInput(props) {
  return(
    <>
      <p>
        <label className='font-bold' htmlFor={props.id}>{props.label}</label>
        <input 
          className='w-40 p-2 border border-stone-300 rounded-sm text-base'
          type="number"
          id={props.id}
          value={props.value}
          onChange={(e) => props.handleChange(props.id, e.target.value)}
        />
      </p>
    </>
  )
}

export default UserInput