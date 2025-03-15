// Declare a variable for the speed limit
let speedLimit = 50;  

// Declare a variable for the car's initial speed
let carSpeed = 30;  

// Increase the car's speed
carSpeed += 25; 

// Check if the car's speed exceeds the speed limit
if (carSpeed > speedLimit) {
    console.log("Speed Warning: You are going too fast!");
} else {
    console.log("Speed is okay.");
}

// Always print the current car speed
console.log(`Current Speed: ${carSpeed}`);
