// Log Between
// Define a function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.

// Hint: this function only needs to print using console.log it does not need to return.

function logBetween(lowNum, highNum) {
	// your code here...
	let result = []
	for(let i = lowNum; i <= highNum; i++){
		result.push(i)
	}
	console.log(result.toString())
}

logBetween(4, 6); // prints 4, 5, 6
logBetween(14, 6); // => prints nothing
logBetween(-1, 2); // => prints -1, 0, 1, 2
