// 6. Question: Find the index of the first occurrence of a specific element in an array.

let myArray = [10, 20, 30, 40, 50, "js", "py", "node", "react", true, false, "-*/"];

let elementToFind = true;

let indexOfElement = myArray.indexOf(elementToFind);

if(indexOfElement !== -1){
    console.log(`Index of "${elementToFind}" : ${indexOfElement}`);
}else{
    console.log(elementToFind + " not found in the array.");
}
