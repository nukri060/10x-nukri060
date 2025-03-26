function checkChakra(level) {
    return level > 80 ? "Full Power" : level >= 50 ? "Still Fighting" : "Need Ramen Recharge";
}

console.log(checkChakra(90)); 
console.log(checkChakra(60)); 
console.log(checkChakra(30)); 
