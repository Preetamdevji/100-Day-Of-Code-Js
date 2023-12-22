// 10. Question: Calculate the factorial of a number using a do-while loop

function calculateFactorial(number) {
    
    if (number < 0) {
        return "Factorial is undefined for negative numbers";
    }

    let factorial = 1;
    let i = 1;

    do {
        factorial *= i;
        i++;
    } while (i <= number);

    return factorial;
}


let result = calculateFactorial(5);
console.log("Factorial of 5 is: " + result);
