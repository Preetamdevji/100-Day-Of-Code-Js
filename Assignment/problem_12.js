// 12. Question: Loop through an array using a for-of loop and double each element.

let numbers = [1, 2, 3, 4, 5];

for (var number of numbers) {
  
  var doubledNumber = number * 2;
  console.log(doubledNumber);
}

// Note: Modify the original array with doubled value:
numbers.forEach(function(number, index, array) {
    array[index] = number * 2;
  });
  
  console.log(numbers);