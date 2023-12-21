// 8. Question: Sort the array in ascending and descending without built-in methods.

// array in ascending
let myArray = [40,30,12,25,66,45,79,97];

let ascendingFunction = (myArray)=>{

    for(let i=0; i<myArray.length; i++){
        // console.log("upper"+i);
        for (let j=0; j<myArray.length; j++) {
                // console.log("lower"+j);

                if(myArray[j]>myArray[j+1]){
                    let temp = myArray[j]
                    myArray[j] = myArray[j+1]
                    myArray[j+1] = temp
                }
            
        }
    }
    console.log(myArray);
}
ascendingFunction(myArray)

// / array in descending
let data = [40,30,12,25,66,45,79,97];

let descending = (data)=>{

    for(let i=0; i<data.length; i++){
        // console.log("upper"+i);
        for (let j=0; j<data.length; j++) {
                // console.log("lower"+j);

                if(data[j]<data[j+1]){
                    let temp = data[j]
                    data[j] = data[j+1]
                    data[j+1] = temp
                }
            
        }
    }
    console.log(data);
}
descending(data)