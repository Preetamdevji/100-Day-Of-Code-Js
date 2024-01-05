// 2. *Filter and Map Combination:*
//    - Q: Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the map method

let str = ["preetam","jalal","ali","asif","john-doe","sam-de-vah"];

let data = str.filter((item)=>(item.length <= 5))
              .map((item)=>(item.toUpperCase()));
console.log(data);