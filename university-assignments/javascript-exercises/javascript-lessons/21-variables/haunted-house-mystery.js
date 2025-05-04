// Declare boolean variables for the two rooms
let kitchenHasGhost = true;  
let livingRoomHasGhost = false; 

// Determine if the house is safe using the logical AND operator
let isHouseSafe = !(kitchenHasGhost || livingRoomHasGhost);  

// Print a message indicating if the house is safe
if (isHouseSafe) {
    console.log("The house is safe! No ghosts in the Kitchen or Living Room.");
} else {
    console.log("Danger! The house is NOT safe. Ghosts detected!");
}
