// 15. *Find Method:*
//    - Q:15. *Find Method:*
//    - Q: How does the find method differ from filter? Give an example of a scenario where using find is more appropriate than filter.

// In JavaScript, both the find and filter methods are used with arrays, but they serve different purposes.

// 1 find Method:
// The find method is used to retrieve the first element in an array that satisfies a given condition.
// It stops searching once it finds the first matching element and returns that element.
// If no element is found, it returns undefined.

// 2 filter Method:

// The filter method is used to create a new array with all elements that satisfy a given condition.
// It returns an array containing all matching elements, not just the first one.
// If no element is found, it returns an empty array.

const people = [
    { name: 'ritika', age: 25 },
    { name: 'ronak', age: 30 },
    { name: 'anushka', age: 22 }
  ];
  
  const firstPersonOver30 = people.find(person => person.age >= 30);
  
  console.log(firstPersonOver30);
