function filterOdds(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            arr.splice(i, 1); 
        } else {
            i++; 
        }
    }
    return arr;
}

console.log(filterOdds([1, 2, 3, 4, 5])); 
