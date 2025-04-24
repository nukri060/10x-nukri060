function decimalToHex(givenNumber) {
    if (givenNumber === 0) return "0"; 

    const hexDigits = "0123456789abcdef";
    let hexResult = "";

    const isNegative = givenNumber < 0;
    givenNumber = Math.abs(givenNumber);

    while (givenNumber > 0) {
        const remainder = givenNumber % 16;
        givenNumber = Math.floor(givenNumber / 16);
        hexResult = hexDigits[remainder] + hexResult; 
    }

    return isNegative ? "-" + hexResult : hexResult;
}

function processRiskLevels(riskLevels) {
    const hexValues = riskLevels.map((level) => decimalToHex(level));
    const filteredHighRisks = riskLevels.filter(level => level > 100);
    const totalRiskLevel = riskLevels.reduce((total, level) => total + level, 0);
    const firstRiskAbove150 = riskLevels.find(level => level > 150);
    for (let i = riskLevels.length - 1; i >= 0; i--) {
        if (riskLevels[i] < 80) {
            riskLevels.splice(i, 1);
        }
    }
    return [hexValues, filteredHighRisks, totalRiskLevel, firstRiskAbove150, riskLevels];
}

console.log(processRiskLevels([99, 135, 76, 200, 150, 89]))