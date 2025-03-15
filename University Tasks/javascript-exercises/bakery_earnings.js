// Declare variables
const breadPrice = 3;   
const cakePrice = 5;   
const breadSales = 40;  
const cakeSales = 30;   

// Calculate the bakery's earnings for the day
let totalEarnings = (breadSales * breadPrice) + (cakeSales * cakePrice);

// Log the earnings using a template literal
console.log(`Today's bakery earnings: ${totalEarnings} gold coins
Bread sales: ${breadSales} loaves
Cake sales: ${cakeSales} cakes`);
