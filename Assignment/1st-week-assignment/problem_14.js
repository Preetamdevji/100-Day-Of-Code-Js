// 14. Question: Find the maximum of three numbers using nested ternary operators.

function findMax(a, b, c) {
    return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
}

let num1 = 5;
let num2 = 12;
let num3 = 8;

let maxNumber = findMax(num1, num2, num3);
console.log("The maximum number is: " + maxNumber);
