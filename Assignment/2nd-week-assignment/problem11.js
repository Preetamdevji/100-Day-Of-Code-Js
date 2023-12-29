// Write a for...in loop that iterates over the properties of an object and logs each property name and value.
const myObject = {
    name: 'Preetam',
    age: 25,
    city: 'Karachi',
  };
  
  for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(`${key}: ${myObject[key]}`);
    }
  }
  