const fibonacci = function(place) {

	let position = Number(place);	
	if (position === 0) return 0;
	if (position === 1) return 1;
	if (position < 0) return "OOPS";
	
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

fibonacci(6);

fibonacci(10);

fibonacci(15);

fibonacci(25);

fibonacci(-25);

fibonacci("1");

fibonacci("2");

fibonacci("8");

// Do not edit below this line
module.exports = fibonacci;
