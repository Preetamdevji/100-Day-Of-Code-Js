// 8. *Advanced Sorting:*
//    - Q: Sort an array of strings based on their lengths in ascending order. If two strings have the same length, maintain their relative order in the sorted array.

let arrOfStr = ["Preetam","Sam","John","joe","Zubair","Talha"];

let comparingLength = (a, b)=>{
    let lengthCompare = a.length - b.length;

    if (lengthCompare === 0){
        return arrOfStr.indexOf(a) - arrOfStr.indexOf(b);
    }

    return lengthCompare;
};

let sortedArray = arrOfStr.sort(comparingLength);
console.log(sortedArray);



// const array = ["apple", "banana", "kiwi", "orange", "grape"];

// // Custom comparator function for sorting based on string lengths
// const compareByLength = (a, b) => {
//   // Compare lengths
//   const lengthComparison = a.length - b.length;

//   // If lengths are the same, maintain relative order
//   if (lengthComparison === 0) {
//     return array.indexOf(a) - array.indexOf(b);
//   }

//   return lengthComparison;
// };

// // Sorting the array using the custom comparator
// const sortedArray = array.sort(compareByLength);

// console.log(sortedArray);
