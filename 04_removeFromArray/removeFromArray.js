let numbers = [[1, 2, 3, 4], 3];
let filtered = numbers.filter(removeFromArray);

function removeFromArray(numbers) {
	return numbers !== 3;
};

// Do not edit below this line
module.exports = removeFromArray;
