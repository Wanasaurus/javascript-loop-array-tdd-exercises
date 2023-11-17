const reverseString = function(string) {
	let splitter = [];
	let length = string.length - 1;
	for (let i = length; i >= 0; i--) {
    	splitter.push(string[i]);
	}
	let reverseSplit = splitter.join("");
	return reverseSplit;
};

reverseString("hello there");

// Do not edit below this line
module.exports = reverseString;
