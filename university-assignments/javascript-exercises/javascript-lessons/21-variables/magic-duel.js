// Declare variables for magic power
let gandalfPower = 90;
let dumbledorePower = 85;

// Boost Gandalf's magic and weaken Dumbledore slightly
gandalfPower += 10;  
dumbledorePower -= 5; 

// Print their new power levels
console.log(`Gandalf's Power: ${gandalfPower}`);
console.log(`Dumbledore's Power: ${dumbledorePower}`);

// Compare and log who is stronger
if (gandalfPower > dumbledorePower) {
    console.log("Gandalf is stronger!");
} else if (gandalfPower < dumbledorePower) {
    console.log("Dumbledore is stronger!");
} else {
    console.log("It's a tie!");
}
