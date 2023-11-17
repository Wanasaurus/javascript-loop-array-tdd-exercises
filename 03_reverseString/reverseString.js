const reverseString = function(string) {
	let splitter = [];
	for (let i = 4; i >= 0; i--) {
    	splitter.push(string[i]);
	}
	let reverseSplit = splitter.join("");
	return reverseSplit;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
