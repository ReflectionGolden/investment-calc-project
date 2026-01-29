export function calculateInvestmentResults(
    {
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
    }
){
    const annualData=[];
    let investmentValue=initialInvestment;
    let totalInterest = 0;
    let investedCap = initialInvestment;

    for(let i = 0; i< duration; i++){
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        totalInterest += interestEarnedInYear;
        investedCap += annualInvestment;
        investmentValue += interestEarnedInYear + annualInvestment;
        annualData.push({
            year: i+1,
            interest: interestEarnedInYear.toFixed(2),
            investmentValue: investmentValue.toFixed(2),
            totalInterest: totalInterest.toFixed(2),
            investedCapital: investedCap,
        });
    }
    return annualData
}