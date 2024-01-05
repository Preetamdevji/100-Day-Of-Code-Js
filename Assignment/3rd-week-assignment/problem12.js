// 12. *Filter Method:*
//    - Q: Explain the purpose of the filter method. Provide an example where you use filter to extract elements from an array based on a specific condition.


// The filter method is a built-in JavaScript array method that is used to create a new array with elements that pass a certain condition. It operates by iterating through each element of an array and applying a provided callback function. The callback function should return a boolean value - true if the element should be included in the new array, and false if it should be excluded

// callback: A function that is called for each element in the array.
// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array filter was called upon.
// thisArg (optional): Object to use as this when executing the callback.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);  
