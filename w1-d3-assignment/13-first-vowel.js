// First Vowel
// Write a function firstVowel(str) that takes in a string and returns the first vowel that appears sequentially in the string.

function firstVowel(str) {
	// your code here
	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
			return str[i];
		}
	}
	return null;
}

console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null
