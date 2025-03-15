// Declare variables
let ticketPrice = 20;  
let ticketsSold = 500; 
let concertCosts = 8000;  

// Calculate total earnings
let totalEarnings = ticketPrice * ticketsSold;  

// Calculate profit or loss
let profit = totalEarnings - concertCosts; 

// Check if the band made a profit
if (profit > 0) {
    console.log(`Concert Profit: $${profit}. Great success!`);  
} else {
    console.log(`Concert did not cover costs. Earnings: $${totalEarnings}, Costs: $${concertCosts}.`); 
}
