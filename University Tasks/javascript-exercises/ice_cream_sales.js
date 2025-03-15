// Define Prices for Ice Cream Items
const conePrice = 4.00;  
const sundaePrice = 8.00;  

// Store Daily Sales Data
let conesSoldToday = 250;  
let sundaesSoldToday = 120;  

// Calculate Total Earnings
let coneEarnings = conePrice * conesSoldToday; 
let sundaeEarnings = sundaePrice * sundaesSoldToday;  
let totalEarnings = coneEarnings + sundaeEarnings;  

// Implement Volume Discount
let discountAmount = 0;
let finalEarnings = totalEarnings;
let discountApplied = false;

// Check for discount and apply if applicable
if (totalEarnings >= 1000) {
    discountAmount = totalEarnings * 0.05;  
    finalEarnings = totalEarnings - discountAmount;  
    discountApplied = true;
}

// Log the Results
console.log(`Total earnings before discount: $${totalEarnings.toFixed(2)}`);
console.log(`Discount applied: $${discountAmount.toFixed(2)}`);
console.log(`Final total daily earnings after discount: $${finalEarnings.toFixed(2)}`);
console.log(`Volume Discount Applied: ${discountApplied ? "Yes" : "No"}`);
