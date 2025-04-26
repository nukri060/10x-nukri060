/*Quest 1 – Initialize Node Identity
Difficulty: Easy (2 pts)
Story
After the Grid reboot, your intern profile has no identity. You must re-declare your node identity to rejoin Neosector 404.
Objective
Set up your network and intern variables, then print a welcome message.

Instructions:
1. Name your file quest1.js
2. Create a constant called networkName and assign it the text Neosector404
3. Create a variable called internName and assign it the text Gridbreaker
4. Print the exact sentence: Welcome, Gridbreaker, to Neosector404!

Acceptance Criteria
• networkName is defined as a constant with value Neosector404
• internName is defined as a variable with value Gridbreaker
• The console shows exactly: Welcome, Gridbreaker, to Neosector404!*/


// non-function
const networkName = "Neosector404";
let internName = "Gridbreaker";

function enter(internName){
    return `Welcome, ${internName}, to ${networkName}`;
}

console.log(`This is quest1: \n1. Welcome, ${internName}, to ${networkName} \n2. By function: ${enter("testName")}`)

