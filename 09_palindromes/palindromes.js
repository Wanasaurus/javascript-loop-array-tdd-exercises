const palindromes = function (string) {

	const cleanedString = string.toLowerCase().replace(/[^\w]/g,"");
	return cleanedString === [...cleanedString].reverse().join("");
};



//const palindromes = function (string) {

	//let ogString = string.toLowerCase().replace(/[!"#$%&'()*+,-–./———:;<=>?@[\]^_`{|}~]/g, '').replaceAll(" ", "");
	//let newString = ogString.split("").reverse().join("");
	//return newString === ogString ? true : false;

//};


palindromes('racecar');

palindromes('racecar!');

palindromes('Racecar!');

// Do not edit below this line
module.exports = palindromes;
