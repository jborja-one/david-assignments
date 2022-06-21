// Sum Array
// Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.

function sumArray(array) {
	// your code here...
	let storage = 0
	for(let i = 0; i < array.length; i++){
		storage += array[i]
	}
	return storage
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
