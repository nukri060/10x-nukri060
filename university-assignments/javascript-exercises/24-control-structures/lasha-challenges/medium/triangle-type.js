function triangleType(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Not a triangle";
    }

    if (a === b && b === c) {
        return "Equilateral";
    }

    if (a === b || b === c || a === c) {
        return "Isosceles";
    }

    return "Scalene";
}

console.log(triangleType(3, 3, 3));
console.log(triangleType(3, 3, 5));
console.log(triangleType(3, 4, 5));
console.log(triangleType(1, 2, 3));