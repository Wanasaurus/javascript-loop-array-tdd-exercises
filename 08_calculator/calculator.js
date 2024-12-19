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

sum([11, 7]);

const multiply = function() {

};

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
