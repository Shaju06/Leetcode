/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const hashMap = {};
  for (let ch of s) {
  if (!hashMap[ch]) {
  hashMap[ch] = 1
  } else {
  return ch;
  }
  }
  }