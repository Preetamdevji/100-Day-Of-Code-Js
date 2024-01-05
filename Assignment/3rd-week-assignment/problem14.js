// 14. *Reduce Method:*
//    - Q: Describe the purpose of the reduce method and provide an example where you use it to compute a single value from an array of numbers.

// The reduce method in programming, particularly in languages like JavaScript, is used to iterate through an array and accumulate its elements into a single value. It takes a callback function as an argument, which is applied to each element in the array, along with an accumulator that stores the intermediate result. The final result is the accumulated value.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); 
