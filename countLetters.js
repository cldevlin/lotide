const countLetters = function (inputString) {
  const results = {};

  for (let letter of inputString) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;

// assertEqual(countLetters("lighthouse in the house").h, 4);
// assertEqual(countLetters("lighthouse in the house").s, 2);
// assertEqual(countLetters("lighthouse in the house").x, undefined);