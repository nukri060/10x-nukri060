
/**
 * Converts a decimal number to its binary representation.
 *
 * @param {number} number
 * @returns {number}
 */

function decimalToBinary(number) {
    let binaryResult = 0;
    let multiplier = 1;

    while (number !== 0) {
        const remainder = number % 2;
        number = Math.floor(number / 2);
        binaryResult += remainder * multiplier;
        multiplier *= 10;
    }

    return binaryResult;
}

/**
 * Reloads the matrix by converting all numbers in an array to their binary
 * representation.
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function reloadMatrix(arr){
    return arr.map((x) => decimalToBinary(x));
}

console.log(reloadMatrix([3, 7, 15, 22]))