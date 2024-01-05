// 6. *Combining Methods:*
//    - Q: Create a chain of array methods (map, filter, reduce, etc.) to transform an array of strings into a single concatenated string with a specific condition.

const stringArray = ["apple", "banana", "kiwi", "orange", "pear"];

const result = stringArray
  .filter(str => str.length > 3)   
  .map(str => str.toUpperCase())   
  .reduce((concatenatedString, currentString) => concatenatedString + currentString, "");  

console.log(result);
