function schrodingerCat(state1, state2) {
    return !!state1 === !!state2;
}

console.log(schrodingerCat("alive", "dead")); 
console.log(schrodingerCat(10, undefined));  
console.log(schrodingerCat(1, "yes"));       
console.log(schrodingerCat("cat", 0));       
console.log(schrodingerCat(null, false));    
console.log(schrodingerCat("", NaN));        
console.log(schrodingerCat(42, []));         
