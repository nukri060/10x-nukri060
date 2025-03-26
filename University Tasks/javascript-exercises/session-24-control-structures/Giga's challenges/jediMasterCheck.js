function isJediMaster(angerLevel, wisdomLevel) {
    return angerLevel < 30 && wisdomLevel > 70;
}

console.log(isJediMaster(20, 80)); 
console.log(isJediMaster(50, 90));
console.log(isJediMaster(25, 75)); 
console.log(isJediMaster(30, 80)); 
