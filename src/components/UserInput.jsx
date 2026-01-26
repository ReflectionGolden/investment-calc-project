import {useState} from 'react'
import '../App.css'

const UserInput = ({userInput, handleInputChange, resetValue}) => {

  return(
    <>
    <section className='p-4 max-w-200 my-8 mx-auto rounded-sm bg-gray-900'>
      <form>
        <div className='flex justify-between gap-6 mb-2'>
          <InvestInput id="initialInvestment" label="Initial Investment (£)" value={userInput.initialInvestment} handleInputChange={handleInputChange}/>
          <InvestInput id="annualInvestment" label="Annual Investment (£)" value={userInput.annualInvestment} handleInputChange={handleInputChange}/>
          <InvestInput id="expectedReturn" label="Expected Return (%)" value={userInput.expectedReturn} handleInputChange={handleInputChange}/>
          <InvestInput id="duration" label="Duration (Years)" value={userInput.duration} handleInputChange={handleInputChange}/>
        </div>
        <div className='flex justify-between gap-6 mb-2'>
          <button onClick={e => resetValue(e)}>Reset</button>
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
          onChange={(e) => props.handleInputChange(props.id, e.target.value)}
          min={1}
        />
      </p>
    </>
  )
}

export default UserInput