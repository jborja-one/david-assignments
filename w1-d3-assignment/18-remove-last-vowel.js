// Remove Last Vowel
// Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.

function removeLastVowel(word) {
	// your code here
	let lastVowel = ''
	let result = ''
	for (let i = word.length - 1; i >= 0; i--) {
		if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
			lastVowel = word[i]
			console.log(lastVowel + '**************************************')
			return (word.slice(0, i) + word.slice(i + 1))
		}
	}
	return word
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
