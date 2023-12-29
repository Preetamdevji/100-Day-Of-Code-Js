// Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.

function regularFunction() {
    console.log(this); 
  }
  
  regularFunction(); 

// Arrow function

  const arrowFunction = () => {
    console.log(this); 
  };
  
  arrowFunction(); 
  
  