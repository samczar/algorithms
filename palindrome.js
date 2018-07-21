//Palindrome

function isPalindrome(valueStr){
  //change to lowercase
  valueStr = valueStr.toLowerCase();
var getList = valueStr.split('');

var acceptedLetter = 'abcdefghijklmnopqrstuvwxyz';
getLetter = acceptedLetter.split('');

var holdValue = [];

getList.forEach(letter=>{
  if(getLetter.includes(letter)) {
    holdValue.push(letter);
    console.log(holdValue);
  }
})
var rfullLetter = holdValue.reverse().join('');
var fullLetter = holdValue.join('');

if(fullLetter === rfullLetter) return true;
else return false;


}

isPalindrome('Madam I"m Adam');