const fibonacci = function(position) {

	if (position === 0) return 0;
	if (position === 1) return 1;
	
	let prev1 = 0;
	let prev2 = 1;
	let current;

	for (let i = 2; i <= position; i++) {
		current = prev1 + prev2;
		prev1 = prev2;
		prev2 = current;
	}	
	return current;

};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
