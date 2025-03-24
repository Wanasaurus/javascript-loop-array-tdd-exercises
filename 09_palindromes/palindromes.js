const palindromes = function (string) {

	let ogString = string.toLowerCase().replaceAll(" ", "");
	let newString = ogString.split("").reverse().join("");
	return newString === ogString ? true : false;

};

palindromes('racecar');

// Do not edit below this line
module.exports = palindromes;
