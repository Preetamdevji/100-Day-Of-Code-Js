// 11. Question: Iterate through the properties of an object using a for-in loop.
let person = {
    name: 'Preetam',
    age: 25,
    job: 'Developer'
  };
  
  for (let key in person) {
   
    if (person.hasOwnProperty(key)) {
      console.log(key + ': ' + person[key]);
    }
  }
  