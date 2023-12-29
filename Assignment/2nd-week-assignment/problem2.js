// 2. How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?

let profile = {
    name : "Preetam",
    lastname: "Devji",
    age: 25,
    profileStatus:{
        0 : "Login",
        1 : "Logout"
    },
};


console.log(profile.profileStatus[0]); //===> Its output come like this ==> "Login"

// console.log(profile.profileStatus.login.logout); //===> return undefined only first time 

// And second time is will give this error 
// TypeError: Cannot read properties of undefined (reading 'logout')

// With Optional Chaining our code cannot stop it execute till end this is the beauty of optional chaining {?.}
// this time my code work it never through me error its error me undefined and my execution is not stop 
console.log(profile.profileStatus.login?.logout);

// print like this 
// Login
// undefined

