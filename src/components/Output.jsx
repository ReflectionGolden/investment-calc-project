import React from 'react'
import { calculateInvestmentResults } from '../util/investments';

const Output = ({userInput}) => {
    const results = calculateInvestmentResults(userInput);

    function display() {
        let isValid = true;
        let errors = [];

        if(!Number.isInteger(userInput.initialInvestment)) {
            isValid = false;
            errors.push("The Initial Investment should be a number.");
        } else if (userInput.initialInvestment < 1) {
            isValid = false;
            errors.push("The Initial Investment should be at least £1.");
        }

        if(!Number.isInteger(userInput.annualInvestment)) {
            isValid = false;
            errors.push("The Annual Investment should be a number.");
        } else if (userInput.annualInvestment < 0) {
            isValid = false;
            errors.push("The Annual Investment cannot be negative.");
        }
        
        if(!Number.isInteger(userInput.expectedReturn)) {
            isValid = false;
            errors.push("The Expected Return should be a number.");
        } else if (userInput.expectedReturn < 1) {
            isValid = false;
            errors.push("The Expected Return should be at least 1%.");
        }
        
        if(!Number.isInteger(userInput.duration)) {
            isValid = false;
            errors.push("The duration (in years) should be a number.");
        } else if (userInput.duration < 1) {
            isValid = false;
            errors.push("The duration (in years) should be at least 1.");
        }

        if(!isValid) {
            return(
                <section className='p-4 max-w-200 my-8 mx-auto rounded-sm bg-gray-900'>
                    <h2>Errors:</h2>
                    <ul className='ml-4 list-disc'>
                        {errors.map((error, index) => (
                            <li className='text-red-600' key={index}>{error}</li>
                        ))}
                    </ul>
                </section>
            )
        }
        else {
            return(
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Investment Value</th>
                            <th>Interest (Year)</th>
                            <th>Total Interest</th>
                            <th>Invested Capital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((yearData, index) => (
                            <tr key={index}>
                                <td>{yearData.year}</td>
                                    <td>{yearData.investmentValue}</td>
                                    <td>{yearData.interest}</td>
                                    <td>{yearData.totalInterest}</td>
                                    <td>{yearData.investedCapital}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        }
    }

    return(
        <>
            <span className='text-center'><h1>Investment Results:</h1></span>
            {display()}
        </>
    )
}

export default Output
