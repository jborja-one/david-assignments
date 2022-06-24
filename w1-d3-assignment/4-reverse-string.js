// Reverse String
// Write a function reverseString(str) that takes in a string. The function should return a new string where the order the characters is reversed.

function reverseString(str) {
	// your code here
	// if (str === ""){
	// 	return "";
	// } else {
	// 	return reverseString(str.substr(1)) + str.charAt(0)
	// }
	let result = ""

	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i]
	}
	return result
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'
