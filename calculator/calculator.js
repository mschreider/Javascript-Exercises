function add(x,y) {
	return (x+y);
}

function subtract(x,y) {
	return(x-y);
}

function sum(arr) {
	let sum=0;
	for(let x = 0; x<arr.length; x++){
		sum += arr[x];
	}
	return sum;
}

function multiply(arr) {
	let product = 1;
	for(let x = 0; x<arr.length; x++){
		product *= arr[x];
	}
	return product;
}

function power(x,y) {
	return(x**y);
}

function factorial(num) {
	if (num < 0) {
    	return -1;
	}
	else if (num == 0) {
	  	return 1;
	}
  	else {
      	return (num * factorial(num - 1));
  	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}