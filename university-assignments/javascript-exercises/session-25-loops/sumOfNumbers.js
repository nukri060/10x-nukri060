function sumNumbersUp(n){
    let i = 1;
    let sum = 0;
    while (i <= n){
        sum += i;
        i++;
    }

    return sum;
}

console.log(sumNumbersUp(5));