// Last Vowel
// Write a function lastVowel(str) that takes in a string and returns the last vowel that appears sequentially in the string. Note that the string may contain capitalization.

// Hint: You may find the String.toLowerCase or String.toUpperCase methods useful

function lastVowel(str) {
	// your code here
	for (let i = 0; i < str.length; i++) {

		str.toLowerCase()
		if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
			return str[i];
		}
	}
}

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
