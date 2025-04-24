// Declare potion prices
const healthPotionPrice = 15;
const manaPotionPrice = 12;  

// Calculate total cost
const healthPotionsBought = 3;
const manaPotionsBought = 2;

let totalCost = (healthPotionsBought * healthPotionPrice) + (manaPotionsBought * manaPotionPrice);

// Apply discount if total is above 50 gold coins
const discountThreshold = 50;
const discountRate = 0.1; 

if (totalCost > discountThreshold) {
    totalCost -= totalCost * discountRate;
    console.log("Discount applied!");
}

// Log the final total cost
console.log(`Total cost: ${totalCost} gold coins`);
