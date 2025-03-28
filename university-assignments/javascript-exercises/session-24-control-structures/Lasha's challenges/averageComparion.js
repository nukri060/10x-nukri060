function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// case 1 
let dolphinsAvg1 = calcAverage(96, 108, 89);
let koalasAvg1 = calcAverage(88, 91, 110);

console.log("Test Data 1:");
if (dolphinsAvg1 > koalasAvg1 && dolphinsAvg1 >= 100) {
    console.log(`Dolphins win the trophy with an average score of ${dolphinsAvg1.toFixed(1)}!`);
} else if (koalasAvg1 > dolphinsAvg1 && koalasAvg1 >= 100) {
    console.log(`Koalas win the trophy with an average score of ${koalasAvg1.toFixed(1)}!`);
} else if (dolphinsAvg1 === koalasAvg1 && dolphinsAvg1 >= 100 && koalasAvg1 >= 100) {
    console.log(`It's a draw! Both teams have an average score of ${dolphinsAvg1.toFixed(1)}.`);
} else {
    console.log("No team wins the trophy!");
}

// case 2
let dolphinsAvgBonus1 = calcAverage(97, 112, 101);
let koalasAvgBonus1 = calcAverage(109, 95, 123);

console.log("\nBonus Test Data 1:");
if (dolphinsAvgBonus1 > koalasAvgBonus1 && dolphinsAvgBonus1 >= 100) {
    console.log(`Dolphins win the trophy with an average score of ${dolphinsAvgBonus1.toFixed(1)}!`);
} else if (koalasAvgBonus1 > dolphinsAvgBonus1 && koalasAvgBonus1 >= 100) {
    console.log(`Koalas win the trophy with an average score of ${koalasAvgBonus1.toFixed(1)}!`);
} else if (dolphinsAvgBonus1 === koalasAvgBonus1 && dolphinsAvgBonus1 >= 100 && koalasAvgBonus1 >= 100) {
    console.log(`It's a draw! Both teams have an average score of ${dolphinsAvgBonus1.toFixed(1)}.`);
} else {
    console.log("No team wins the trophy!");
}

// Bonus case 
let dolphinsAvgBonus2 = calcAverage(97, 112, 101);
let koalasAvgBonus2 = calcAverage(109, 95, 106);

console.log("\nBonus Test Data 2:");
if (dolphinsAvgBonus2 > koalasAvgBonus2 && dolphinsAvgBonus2 >= 100) {
    console.log(`Dolphins win the trophy with an average score of ${dolphinsAvgBonus2.toFixed(1)}!`);
} else if (koalasAvgBonus2 > dolphinsAvgBonus2 && koalasAvgBonus2 >= 100) {
    console.log(`Koalas win the trophy with an average score of ${koalasAvgBonus2.toFixed(1)}!`);
} else if (dolphinsAvgBonus2 === koalasAvgBonus2 && dolphinsAvgBonus2 >= 100 && koalasAvgBonus2 >= 100) {
    console.log(`It's a draw! Both teams have an average score of ${dolphinsAvgBonus2.toFixed(1)}.`);
} else {
    console.log("No team wins the trophy!");
}
