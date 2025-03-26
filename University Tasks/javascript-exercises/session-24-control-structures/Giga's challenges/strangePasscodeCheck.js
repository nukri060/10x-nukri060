function strangePasscode(code1, code2) {
    return code1 == code2 && code1 !== code2;
}

console.log(strangePasscode(null, undefined)); 
console.log(strangePasscode("0", 0));         
console.log(strangePasscode(0, false));       
console.log(strangePasscode(0, 0));          
console.log(strangePasscode("", 0));        
console.log(strangePasscode(false, ""));    
console.log(strangePasscode("1", 1));        
console.log(strangePasscode(42, "42"));     
console.log(strangePasscode(42, 42));        
