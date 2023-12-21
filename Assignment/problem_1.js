// 1. Question: Reverse a string without using the built-in reverse() method.

let str = "JavaScript in the best code of the web-development";

let reversestr = (str)=>{
    let newReverseStr = "";
    for(let i = str.length - 1; i>=0; i--){
        newReverseStr += `${str[i]} (${i})`
    }
    console.log(newReverseStr);
}

reversestr(str);