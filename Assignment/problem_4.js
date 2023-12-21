// 4. Question: Check if a string is a palindrome.


function checkPalindrome(str) {
    
    
    const reversedString = str.split('').reverse().join('');
    if(str === reversedString)
          return true;
    else
          return false;
}


result = checkPalindrome("abcd dcba")
if(result == true){
	console.log("The given string is Palindrome");
}
else{
  	console.log("The given string is NOT Palindrome");
}
