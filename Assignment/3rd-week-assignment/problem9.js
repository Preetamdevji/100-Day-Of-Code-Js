// 9. *Nested Array Operations:*
//    - Q: Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers.


let arrayOfArrays = [1,2,3,[4,5,6,7],[8,9,10]];

let flattenArray = arrayOfArrays.flat();
let result = flattenArray.reduce((acc,currValue)=> acc + currValue);
console.log(result);