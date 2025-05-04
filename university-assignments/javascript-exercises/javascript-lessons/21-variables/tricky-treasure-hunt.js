// Declare Boolean Variables for Multiple Clues
let hasTreasureMap = true;  
let foundAncientKey = false;  
let solvedRiddleScroll = true;  
let hasCompass = true; 
let isFullMoon = false;  

// Define the Condition for Finding the Treasure
let canFindTreasure = hasTreasureMap && (foundAncientKey || (solvedRiddleScroll && hasCompass));

// Print the Outcome
if (canFindTreasure) {
    console.log("Success! Alex can find the legendary treasure!");
} else {
    console.log("Alas, Alex is missing crucial clues and cannot find the treasure yet.");
}
