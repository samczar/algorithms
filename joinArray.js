//Array Joins
function addAndLog(array) {
	for (var i = 0; i <= array.length; i++) {
		for (var j = 0; j <= array.length; j++) {
			console.log(array[i] + array[j]);
		}
	}
}

addAndLog(['A', 'B', 'C', 'D']);
