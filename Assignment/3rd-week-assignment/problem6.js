// 6. *Chaining Methods:*
//    - Q: Create a chain of array methods to find the average of all positive numbers in an array of mixed integers and return the result rounded to two decimal places.


let numbers = [1,-1,2,-2,-3,3,5,-5,-4,9,8,4,-6,-7];

let data = numbers
                .filter((item)=> (item > 0))
                .reduce((acc,currVal,index,array)=> acc + currVal / array.length ,0)
                .toFixed(2)
console.log(data);



