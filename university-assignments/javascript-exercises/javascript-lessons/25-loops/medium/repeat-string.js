function repeatString(str, n){
    let repeated = '';
    let i = 1;
    
    do {
        repeated += str;
        i++;
    } while (i < n+1);

    return repeated;
}

console.log(repeatString("Hello", 3));