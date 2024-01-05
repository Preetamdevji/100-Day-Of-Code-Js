// 7. *Conditional Filtering:*
//    - Q: Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the filter method.

let arrOfObj = [
    { name : "JavaScript", price:7500, age: 27},
     {name : "Python", price:7000,age: 20},
     {name : "Rust", price:6500, age: 17},
     {name : "Mern-stack", price:8500, age: 10},
     {name : "TypeScript", price:8000, age :19},    
 ];

 let result = arrOfObj.filter((item)=> (item.age >= 18));
console.log(result);




