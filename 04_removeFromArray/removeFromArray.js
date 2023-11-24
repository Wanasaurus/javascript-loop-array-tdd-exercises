function removeFromArray (array, item) { 
	for (let i = array.length; i--;) {
	if (array[i] === item) {
		return array.splice(i, 1);
	}
    }      
}

removeFromArray([[1, 2, 3, 4], 3], 3);

// Do not edit below this line
module.exports = removeFromArray;
