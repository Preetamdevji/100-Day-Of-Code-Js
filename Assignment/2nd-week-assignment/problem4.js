// Define a function calculateAverage that takes an array of numbers as an argument and returns the average value

function calculateAverage(numbers) {

    if (numbers.length === 0) {
        return null; 
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    const average = sum / numbers.length;

    return average;
}

const numbersArray = [1, 2, 3, 4, 5, 6 ,7, 8];
const result = calculateAverage(numbersArray);
console.log(result); 
