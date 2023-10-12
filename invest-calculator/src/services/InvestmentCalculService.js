export const calcul = (data) => {
    const yearlyData = [];
    let currentSavings = Number(data.current);
    const yearlyContribution = Number(data.yearly);
    const expectedReturn = Number(data.expected) / 100;
    const duration = Number(data.duration);

    for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          year: i + 1,
          savingsEndOfYear: currentSavings,
          totalSaving: yearlyContribution + currentSavings,
          yearlyInterest: yearlyInterest,
          yearlyContribution: yearlyContribution,
        })
    };
    
    return yearlyData;
}

