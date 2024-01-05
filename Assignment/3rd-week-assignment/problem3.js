// *Sorting Objects:*
//    - Q: Given an array of objects with a 'price' property, use the sort method to arrange them in descending order based on their prices.


let obj = [
   { name : "JavaScript", price:7500},
    {name : "Python", price:7000},
    {name : "Rust", price:6500},
    {name : "Mern-stack", price:8500},
    {name : "TypeScript", price:8000},    
];

let result = obj.sort((a,b)=> b.price-a.price);
console.log("Descending order based on price:", result);
  