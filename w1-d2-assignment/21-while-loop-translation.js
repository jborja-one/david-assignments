// While Loop Translation (*)
// The following function is named eCounter(word). The function takes in a string word and returns the number of e's in the word. The function counts both lowercase (e) and uppercase (E). Your job is to translate the following function to use a while loop instead of a for loop! If you forget the syntax for a while loop go back and check out the reading.

function eCounter(word) {
	//for loop
	let counter = 0;
	// for(let i = 0; i < word.length; i++) {
	// 	if(word[i] === "e") counter++
	// }
	// return counter;
	// while loop
	let i = 0
	while(i < word.length) {
		if(word[i] === "e") {
			counter++
		}
		i++
	}
	return counter
}

console.log(eCounter('apple')); // => 1
console.log(eCounter('appleapple')); // => 2
console.log(eCounter('Appleee')); // => 3
