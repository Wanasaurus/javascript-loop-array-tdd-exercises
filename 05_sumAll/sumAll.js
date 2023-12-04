let sumAll = function(first, second) {
	let sum = 0;
    if (first < 0 || second < 0) {
        return "ERROR";
        } else if  (first < second) {
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

sumAll(-10, 4);

// Do not edit below this line
module.exports = sumAll;
