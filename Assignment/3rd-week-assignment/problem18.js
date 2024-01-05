// 18. *Error Handling:*
//    - Q: How would you handle potential errors when using array methods like find or reduce? Provide an example of error handling in such a scenario.

const array = [1, 2, 3, 4, 5];

// Example 1: Handling undefined when the element is not found
const elementToFind1 = 6;
const result1 = array.find(item => item === elementToFind1);

if (result1 !== undefined) {
  console.log(`Element ${elementToFind1} found: ${result1}`);
} else {
  console.log(`Element ${elementToFind1} not found`);
}

// Example 2: Handling an error scenario within the callback function
const elementToFind2 = 3;
try {
  const result2 = array.find(item => {
    if (item === elementToFind2) {
  
      throw new Error(`Element ${elementToFind2} found, but an error occurred.`);
    }
    return false;
  });

  console.log(`Element ${elementToFind2} found: ${result2}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
