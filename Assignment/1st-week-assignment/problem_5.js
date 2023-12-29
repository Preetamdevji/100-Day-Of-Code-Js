// 5. Question: Find the sum of all positive numbers in an array.

const numbers = [1, -2, 3, -4, 5];

function sumOfPositiveNumbers(array) {
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        sum += array[i];
      }
    }
  
    return sum;
  }
  
  
  const result = sumOfPositiveNumbers(numbers);
  
  console.log("Sum of positive numbers:", result);
  