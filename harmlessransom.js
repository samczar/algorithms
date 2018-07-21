var mag = 'we are happy to see you . it was great to be happy';
var note = 'are you happy we ';

function harmlessRansomNote(noteText, magazineText) {
	var noteArr = noteText.split(' ');
	var magazineArr = magazineText.split(' ');
	var magazineObj = {};
	// console.log(noteArr);
	// console.log(magazineArr);
	magazineArr.forEach(word => {
		if (!magazineObj[word]) magazineObj[word] = 0;
		magazineObj[word]++;
	});
	//console.log(magazineObj);

	var noteIsPossible = true;
	noteArr.forEach(word => {
		if (magazineObj[word]) {
			magazineObj[word]--;
			if (magazineObj[word] < 0) noteIsPossible = false;
		} else noteIsPossible = false;
	});
	// console.log(noteArr);
	console.log(magazineObj);

	return noteIsPossible;
}

harmlessRansomNote(note, mag);
