// Explain the use of the break and continue statements within loops. Provide scenarios where each might be used.

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        // Skip odd numbers
        continue;
    }
    console.log(numbers[i]);
}
