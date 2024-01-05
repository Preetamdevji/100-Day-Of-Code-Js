// 5. *Find and Modify:*
//    - Q: Given an array of objects with 'id' properties, use the find method to locate an object with a specific 'id' and update its 'status' property to 'completed'.

// // Sample array of objects
// let arrayOfObjects = [
//     { id: 1, status: 'pending' },
//     { id: 2, status: 'in-progress' },
//     { id: 3, status: 'pending' }
//   ];
  
//   // The specific 'id' you want to find
//   let targetId = 2;
  
//   // Use the find method to locate the object with the specific 'id'
//   let foundObject = arrayOfObjects.find(obj => obj.id === targetId);
  
//   // Check if the object with the specified 'id' was found
//   if (foundObject) {
//     // Update the 'status' property to 'completed'
//     foundObject.status = 'completed';
  
//     // Alternatively, if you want to create a new object with the updated status:
//     // let updatedObject = Object.assign({}, foundObject, { status: 'completed' });
//     // Update the array with the new object:
//     // arrayOfObjects[arrayOfObjects.indexOf(foundObject)] = updatedObject;
  
//     console.log('Object with id', targetId, 'has been updated:', foundObject);
//   } else {
//     console.log('Object with id', targetId, 'not found');
//   }
  
//   // Display the updated array
//   console.log('Updated array:', arrayOfObjects);
  




let arrayOfObjects = [
    {id: 1, name : "JavaScript", price:7500, status:"Complete"},
     {id: 2, name : "Python", price:7000,status:"In-Process"},
     {id: 3, name : "Rust", price:6500,status:"Complete"},
     {id: 4, name : "Mern-stack", price:8500,status:"In-Process"},
     {id: 5, name : "TypeScript", price:8000,status:"Pending"},    
 ];

let targetID = 2

let dataFound = arrayOfObjects.find(obj => obj.id === targetID);

if(dataFound){
    dataFound.status = "Complete";
    console.log('Object with id:', targetID, 'has been updated:', dataFound);
}else{
    return `No data found with this id: ${targetID}`;
}

console.log('Updated Array:', arrayOfObjects);