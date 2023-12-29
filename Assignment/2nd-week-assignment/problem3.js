// 3. Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.

// for in loop iterate on object

const profiles = {
    name: "Preetam",
    lastname: "Devji",
    age: 25,
    profileStatus: {
        0: "Login",
        1: "Logout",
    },
};

for (let profile in profiles){
    // console.log(profile);
    if(typeof profiles[profile] === 'object'){
        console.log(`${profile} :`);
    for(let status in profiles[profile]){
        console.log(`${status} : ${profiles[profile][status]}`);
        }
    }else{
        console.log(`${profile} : ${profiles[profile]}`);
    }
}

// for of loop iterate on Array

const array = ['a', 'b', 'c'];

for (const element of array) {
  console.log(`Array ${element}`);
}

