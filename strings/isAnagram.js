//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function isAnagram(s, t) {
  let map = new Array(26).fill(0);

  if (t.length < s.length) return false;

  for (let i = 0; i < s.length; i++) {
    let _mapingIndex = (s[i].charCodeAt() - 'a'.charCodeAt()) % 26;
    map[_mapingIndex] = map[_mapingIndex] + 1;
  }

  for (let j = 0; j < t.length; j++) {
    let _mapingIndex = (t[j].charCodeAt() - 'a'.charCodeAt()) % 26;

    if (map[_mapingIndex] === 0) return false;
    map[_mapingIndex] = map[_mapingIndex] - 1;
  }

  return true;
}

let s = 'anagram',
  t = 'nagaram';

const result = isAnagram(s, t);
console.log(result);
