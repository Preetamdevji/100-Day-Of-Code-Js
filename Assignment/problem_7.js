// 7. Question: Remove all duplicates from an array without built-in methods

let myArray = ["js", 20, "react", 40, 50, "js", "py", "node", "react", true, "py", "-*/"];

let removeDuplicate = (myArray)=>{

    let result = [];
    let obj = {};

    for(let i = 0; i < myArray.length; i++){
        if(obj[myArray[i]]){
            continue;          
        }else{
            result.push(myArray[i]);
            obj[myArray[i]] = true
        }
    }
    console.log(result);
}

removeDuplicate(myArray)