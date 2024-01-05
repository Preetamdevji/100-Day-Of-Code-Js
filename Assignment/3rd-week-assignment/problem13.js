// 13. *Sort Method:*
//    - Q: Discuss the default behavior of the sort method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?

// The sort method in programming languages is commonly used to arrange elements in an array or list in a specific order. Let's discuss the default behavior of the sort method for strings and numbers, and then explore how to use a custom comparison function to sort an array of objects by a specific property.

let arrayOfObjects = [
    { name: "ritika", age: 25 },
    { name: "ronak", age: 30 },
    { name: "anushka", age: 22 }
  ];
  
  arrayOfObjects.sort((a, b) => a.age - b.age);
  console.log(arrayOfObjects);
  