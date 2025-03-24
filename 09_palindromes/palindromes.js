const palindromes = function (string) {

	let ogString = string.toLowerCase().replace(/[!"#$%&'()*+,-–./———:;<=>?@[\]^_`{|}~]/g, '').replaceAll(" ", "");
	let newString = ogString.split("").reverse().join("");
	return newString === ogString ? true : false;

};

palindromes('racecar');

palindromes('racecar!');

// Do not edit below this line
module.exports = palindromes;
