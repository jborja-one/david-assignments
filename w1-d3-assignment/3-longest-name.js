// Longest Name - Debugging (*)
// The function `longestName() takes an array of names and returns the longest. If there's a tie, it returns the first name of the longest length. However, this implementation is full of bugs! Use your debugging skills to find and fix those bugs.

function longestName(names) {
	// Set the first name to be the longest
	// Check each other name in the array starting from the second
	// If the name we're checking is longer than our
	// current longest, set that name to be the new longest
	let result = ""
	for (var i = 0; i < names.length; i++) {
		let compare = names[i]
		if (compare.length > result.length) {
			result = compare
		}
	}
	return result
}

let newnames = []
testNames = [
	'James',
	'Patricia',
	'Michael',
	'Elizabeth',
	'Christopher',
	'Sarah',
	'Margaret',
	'Kenneth',
	'Stephanie',
	'Jonathan',
	'Jeremy',
	'Samantha',
	'Alexander',
	'Catherine',
	'Benjamin',
];

console.log(longestName(testNames)); // "Christopher"
