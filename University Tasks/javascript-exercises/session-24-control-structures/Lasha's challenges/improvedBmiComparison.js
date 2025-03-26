// case 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = markMass1 / markHeight1 ** 2;
let johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

console.log("Test Data 1:");
if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(1)}) is higher than John's (${johnBMI1.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI1.toFixed(1)}) is higher than Mark's (${markBMI1.toFixed(1)})!`);
}

// case 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markMass2 / markHeight2 ** 2;
let johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

console.log("\nTest Data 2:");
if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(1)}) is higher than John's (${johnBMI2.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI2.toFixed(1)}) is higher than Mark's (${markBMI2.toFixed(1)})!`);
}
