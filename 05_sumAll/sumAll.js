sumAll = function(first, second) {
	let sum = 0;
    if (first < second) {
    	for (let i = first; i <= second ; i++) {
        	sum += i;
    	}
    	return sum;
    } else if (first > second) {
        for (let i = first; i >= second ; i--) {
        	sum += i;
    	}
    	return sum;
    }
};

sumAll(123, 1);

// Do not edit below this line
module.exports = sumAll;
