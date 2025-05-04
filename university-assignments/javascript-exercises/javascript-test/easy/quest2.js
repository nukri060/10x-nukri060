/*Quest 2 – Calculate Sector Power
Difficulty: Easy (2 pts)
Story
The Grid’s power levels are hidden. You must compute the combined power of two sectors.
Objective
Use arithmetic to sum two power readings and display the result.

Instructions
1. Name your file quest2.js
2. Define a variable sectorA with value 5
3. Define a variable sectorB with value 7
4. Define a constant totalPower as sectorA plus sectorB
5. Print the exact sentence: Total power: 12

Acceptance Criteria:
• sectorA is defined as a variable with value 5
• sectorB is defined as a variable with value 7
• totalPower is defined as a constant with value 12
• The console shows exactly: Total power: 12*/


let sectorA = 5;
let sectorB = 7;

let totalPower = sectorA + sectorB;

function sumPower(a, b){
    return `Total power: ${a + b}`;
}

console.log(`This is quest2: \n1. Total power: ${sectorA + sectorB} \n2. By function: ${sumPower(6, 2)}`)