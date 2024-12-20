const add = function(one, two) {
	return one + two;
};

add(2, 6);

const subtract = function(one, two) {
	return one - two;
};

subtract(10, 4);

const sum = function (numbers) {

return numbers.reduce((accumulator, current) => {
    return accumulator + current

} , 0)
}

sum([1, 3, 5, 7, 9]);

const multiply = function (numbers) {

return numbers.reduce((accumulator, current) => {
    return accumulator * current

} , 1)
}

multiply([2, 4, 6, 8, 10, 12, 14]);

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
