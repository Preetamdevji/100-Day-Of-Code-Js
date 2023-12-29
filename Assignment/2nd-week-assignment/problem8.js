// Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  const result = (numbers[i] % 2 === 0) ? 'even' : 'odd';
  console.log(`${numbers[i]} is ${result}`);
}
