//CaesarCiphar
function caesarCiphar(str, num) {
  num = num % 26;
  console.log(num);
	//convert to lower case
	str = str.toLowerCase();
	//convert to string array
	var strArray = str.split('');
	//create array var to hold the input
	var value = [];
  values="";
	var alp = 'abcdefghijklmnopqrstuvwxyz';
	var alpArray = alp.split('');
	strArray.forEach((letter,i) => {
		//check if value is char or num
		if (!alpArray.includes(letter)) {
			// value.push(letter);
      values += letter;
     // console.log(values);
		}
		else if (alpArray.includes(letter)) {
			//check if index of each letter in the alphabet contained in the string.
			var result = alpArray.indexOf(letter);
			var newIndex = result + num;
			if (newIndex > 25) newIndex = newIndex - 26;
      values+= alpArray[newIndex];
       console.log(values);
      var c = value.push(alpArray[newIndex])
     
   
  
		
		}
		// console.log(value);
	});
}
caesarCiphar('Anyanka Chibuzo', 100000);
//original 10 8 13 6   3 0 21 8 3 2 0
