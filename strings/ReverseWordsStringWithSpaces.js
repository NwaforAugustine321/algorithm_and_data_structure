// Given a string s, reverse the order of characters in each word within
// a sentence while still preserving whitespace and initial word order.

var reverseWords = function (s) {
  let lastSeenSpace = -1;
  let res = '';

  for (let i = 0; i < s.length; i++) {
    if (i == s.length - 1 || s[i] === ' ') {
      let wordStart = lastSeenSpace + 1;
      let wordEnd = i;

      res +=
        i != s.length - 1
          ? reverse(s, wordStart, wordEnd) + ' '
          : reverse(s, wordStart, wordEnd + 1);
      lastSeenSpace = i;
    }
  }

  return res;
};

function reverse(s, start, end) {
  let copy = s.slice(start, end).split('');
  start = 0;
  end = copy.length;

  while (start < end) {
    [copy[start], copy[end]] = [copy[end], copy[start]];
    end--;
    start++;
  }

  return copy.join('');
}
