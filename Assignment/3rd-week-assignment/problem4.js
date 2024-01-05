// 4. *Reduce for Aggregation:*
//    - Q: Use the reduce method to find the total sum of all even numbers in an array of integers.

let numbers = [1,2,3,4,5,6,7,8,9,10];

let data = numbers.reduce((acc, currValue)=>{
            if(currValue % 2 === 0){
                return acc + currValue
            }else{
                return acc
            }
});

console.log(data);

