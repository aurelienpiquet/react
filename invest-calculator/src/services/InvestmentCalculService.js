

// const yearlyData = []; // per-year results
// let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
// const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
// const expectedReturn = +userInput['expected-return'] / 100;
// const duration = +userInput['duration'];


export const calcul = (data) => {
    const yearlyData = [];
    let currentSavings = data.current;
    const yearlyContribution = data.yearly;
    const expectedReturn = data.expected / 100;
    const duration = data.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          savingsEndOfYear: currentSavings,
          totalSaving: yearlyContribution + currentSavings,
          yearlyInterest: yearlyInterest,
          yearlyContribution: yearlyContribution,
        })
    };
    
    return yearlyData;
}

