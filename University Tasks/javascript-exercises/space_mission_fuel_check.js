// Declare variables
const fuelCapacity = 1000;  
let currentFuel = 850;      

// Check if the spaceship has enough fuel
if (currentFuel > (fuelCapacity * 0.8)) {
    console.log("Launch Status: Ready for launch! 🚀");
} else {
    console.log("Launch Status: Fuel level too low for launch. ⚠️");
}
