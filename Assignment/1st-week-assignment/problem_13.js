// 13. Question: Check if a number is even or odd and return a corresponding message.

let number = 10;

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "The number is even.";
    } else {
        return "The number is odd.";
    }
}
var result = checkEvenOrOdd(number);
console.log(result);