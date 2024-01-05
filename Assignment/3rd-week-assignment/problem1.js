// 1. *Map Transformation:*
//    - Q: Given an array of integers, use the map method to square each element and return a new array with the squared values

let numbers = [1,10,2,20,3,30,4,40,5,50];

let result = numbers.map((item)=> (item * item));
console.log(result);