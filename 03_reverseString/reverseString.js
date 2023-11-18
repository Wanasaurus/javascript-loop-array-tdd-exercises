const reverseString = function(string) {
	let splitter = [];
	let length = string.length - 1;
	for (let i = length; i >= 0; i--) {
    	splitter.push(string[i]);
	}
	return splitter.join("");
};

reverseString("");

// Do not edit below this line
module.exports = reverseString;
