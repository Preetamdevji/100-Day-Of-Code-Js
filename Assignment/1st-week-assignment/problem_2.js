// 2. Question: Count the number of vowels in a given string.

let str = "JavaScript in the best code of the web-development";

let countVowels = (str) => {
  let newVowels = 0;
  let vowels = "";
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i].toLowerCase();

    if (
      currentChar === "a" ||
      currentChar === "e" ||
      currentChar === "i" ||
      currentChar === "o" ||
      currentChar === "u"
    ) {
        newVowels++;
        vowels += currentChar
    }
  }
  console.log(newVowels);
  console.log(vowels);
};
countVowels(str);
