const sumAll = function(first, second) {
	let sum = 0;
	for (let i = first; i <= second ; i++) {
        	sum += i;
    	}
    	return sum;    
};

sumAll(1, 4000);

// Do not edit below this line
module.exports = sumAll;
