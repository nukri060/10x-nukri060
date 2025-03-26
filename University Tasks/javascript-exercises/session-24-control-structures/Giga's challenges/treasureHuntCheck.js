function isTreasureSpot(content) {
    return Boolean(content);
}

console.log(isTreasureSpot("gold")); 
console.log(isTreasureSpot(0));       
console.log(isTreasureSpot(null));    
console.log(isTreasureSpot("map"));   
console.log(isTreasureSpot(false));   
console.log(isTreasureSpot(100));     
