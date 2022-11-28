//A phrase is a palindrome if, after converting all uppercase letters into lowercase
// letters and removing all non-alphanumeric characters, it reads the same forward and backward.
//Alphanumeric characters include letters and numbers.

function isPalindrome(s) {
  return validateString(resetString(s.split('')));
}

function resetString(s) {
  let _validString = '';
  for (let i = 0; i < s.length; i++) {
    if (/[a-z+0-9]/.test(s[i]) || /[A-Z+0-9]/.test(s[i])) {
      _validString = _validString + s[i].toLowerCase();
    }
  }

  return _validString;
}

function validateString(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] != s[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

let input = 'ab';

const result = isPalindrome(input);
console.log(result);
