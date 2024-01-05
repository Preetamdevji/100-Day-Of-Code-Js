// 10. *Error Handling with Find:*
//     - Q: Modify the find method to handle the scenario where the desired element is not found, returning a custom default object instead

let numbers = [1,2,3,4,5,6,7,8,9,10];

let customFind = (arr,callback,defaultValue)=>{

    let elementFound = arr.find(callback);

    if(elementFound !== undefined){
        return elementFound
    }else{
        return defaultValue
    }
};

let item = (items) => items === 11;

let result = customFind(numbers,item,"Element Not Found");

console.log(result);
