// Print Fives
// Write a function printFives(max) that prints out the multiples of 5 that are less than max.
// Try to solve this in two ways, using a conditional (if) and without using a conditional.

function printFives(max) {
	// your code here...
	for(let i = 0; i < max; i += 5){
		console.log(i)
	}
}

// Example:

printFives(20); // prints out:
// 0
// 5
// 10
// 15
