// 11. *Map Method:*
//    - Q:  How does the map method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?

// In JavaScript the map method in JavaScript is a higher-order function that is used to create a new array by applying a provided function to each element of an existing array. It does not modify the original array but instead returns a new array with the results of applying the provided function to each element.

// const newArray = originalArray.map((element, index, array) => {
//     // return the result of applying a function to each element
//   });

const students = [
    { name: 'preetaam', grade: 65 },
    { name: 'ronak', grade: 92 },
    { name: 'ritika', grade: 91 },
    { name: 'anushka', grade: 93 }
  ];
  
  // Increase each student's grade by 5 points using map
  const updatedStudents = students.map((student) => {
    return {
      name: student.name,
      grade: student.grade + 5
    };
  });
  
  console.log(updatedStudents);
  
  
