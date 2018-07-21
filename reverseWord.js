//reverse word
function reverseWord(string){
var stringArray = string.split(" ");
var cont = [];
stringArray.forEach(word=>{
  var reversedWords="";
  for(var i = word.length -1; i >= 0; i--){
    reversedWords += word[i];
      }
    cont.push(reversedWords)
})
return cont.join(' ')
 
}
reverseWord('This is a string of words')
