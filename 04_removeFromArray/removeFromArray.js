let array;
let flatArray = array.flat();
function removeFromArray (flatArray, item) { 
	for (let i = flatArray.length; i--;) {
	if (flatArray[i] === item) {
		return flatArray.splice(i, 1);
	}
    }      
}

removeFromArray([[1, 2, 3, 4], 3], 3);

// Do not edit below this line
module.exports = removeFromArray;
