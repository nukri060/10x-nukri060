function printMultiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        let row = ""; 
        for (let j = 1; j <= n; j++) {
            row += `${i}x${j}=${i * j}\t`; 
        }
        console.log(row); 
    }
}

printMultiplicationTable(5);
