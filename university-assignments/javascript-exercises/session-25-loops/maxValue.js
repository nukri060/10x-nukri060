function findMaxValue(numbers) {
    if (numbers.length === 0) return undefined; 

    let maxValue = numbers[0]; 

    for (let num of numbers) {
        if (num > maxValue) {
            maxValue = num; 
        }
    }

    return maxValue;
}

console.log(findMaxValue([10, 20, 5, 30])); 

