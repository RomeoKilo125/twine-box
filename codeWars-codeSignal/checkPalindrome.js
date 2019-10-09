const Assert = require('assert');

function checkPalindrome(inputString) {
   return inputString === inputString.split('').reverse().join('')
}



Assert.strictEqual(checkPalindrome('aabaa'), true);
Assert.strictEqual(checkPalindrome('abac'), false);
Assert.strictEqual(checkPalindrome('a'), true);
Assert.strictEqual(checkPalindrome('az'), false);
