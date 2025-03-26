function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return "Division by zero is not allowed";
            }
            return a / b;
        case '%':
            return a % b;
        case '**':
            return a ** b;
        default:
            return "Invalid operator";
    }
}

console.log(calculate(5, 3, '+'));
console.log(calculate(10, 2, '/'));
console.log(calculate(4, 0, '/'));
console.log(calculate(2, 3, '^'))