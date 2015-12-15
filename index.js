/*
** We are using https://www.npmjs.com/package/is-palindrome to solve this. 
*/

var isPalindrome = require('is-palindrome');

// Process command line argurments.
	if(process.env.NODE_ENV != 'test') {

process.argv.forEach(function (stringValue, index, array) {
		switch (index) {
		case 0:
			break;
		case 1:
			break;
		case 2:
			console.log("Is " + stringValue + " a palindrome?");
			is_palindrome(stringValue);
			break;
		default:
		     console.log("Ignoring more than 3 arguments.");
	 }
});
}
else {
	console.log("You are currently in 'test' environment. If thats not your intention;")
	console.log("1. Please do 'export NODE_ENV=dev' on command line.")
	console.log("2. Run 'node . STRINGVALUE'")

}

// Takes a string and will just reply a True! or False!.
function is_palindrome(stringValue) {
	var answer = isPalindrome(stringValue);
	console.log("That's " + answer);
	return answer;
}
module.exports.is_palindrome = is_palindrome;