let arr = [1,2,3,4,5,6,7,8,9,0];

let value = arr.map((item)=>(item + 1))
                .map((item)=>{
                    return item * 10
                }).filter((item)=>(item >= 40 && item <= 90))
                .map((item)=>(item += 10))
                .reduce((acc,currEl)=>{
                    if(currEl >= 60){
                        acc++
                    }
                    return acc + currEl
                },1)
console.log(value);