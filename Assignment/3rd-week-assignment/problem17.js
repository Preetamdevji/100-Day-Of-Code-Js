// 17. *Callback Functions:*
//    - Q: Explain the concept of callback functions in the context of array methods. Provide an example of using a callback function with the map method.

// In JavaScript, callback functions are functions that are passed as arguments to other functions and are executed at a later time, often after an asynchronous operation or when a certain condition is met. Callback functions are commonly used with array methods to perform operations on each element of an array.

// The map method in JavaScript is used to create a new array by applying a function to each element of an existing array. The function provided to map is a callback function that defines the operation to be performed on each element.


const numbers = [1,2,3,4,5];

const square = (num) => num * num;

const squareroot = numbers.map(square);

console.log(squareroot);
