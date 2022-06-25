// Has Vowel
// Write a function hasVowel(str) that takes in a string. The function should return a boolean, true if the string contains at least one vowel, false otherwise. Vowels are the letters a, e, i, o, u.

function hasVowel(str) {
	// your code here
	for ( let i = 0; i < str.length; i++) {
		if ( str[i] === 'a' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'e'){
			return true;
		}
	}
	return false;
}

console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false
