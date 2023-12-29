// 3. Question: Convert the first letter of each word in a sentence to uppercase.

let str = "JavaScript in the best code of the web development";

let uppercaseEachWord = (str)=>{

    let newstr = str.split(' ');
    
    for(let i = 0; i < newstr.length; i++){
        newstr[i] = newstr[i].charAt(0).toUpperCase() + newstr[i].slice(1);
    }

    let capitilizeWord = newstr.join(" ");
    console.log(capitilizeWord);
}

uppercaseEachWord(str);
  
