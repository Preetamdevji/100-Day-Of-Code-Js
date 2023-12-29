// Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.

const student = {
    name: "Preetam Devji",
    age: 20,
    grades: [85, 90, 92, 88, 95],
  
    calculateAverage: function () {
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      const average = sum / this.grades.length;
      return average;
    }
  };
  
  // Accessing properties
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`Grades: ${student.grades.join(', ')}`);
  console.log(`Average Grade: ${student.calculateAverage()}`);
  