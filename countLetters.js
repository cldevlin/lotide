const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅ Assertion Passed: " + actual + " === " + expected);
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(inputString) {
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


assertEqual(countLetters("lighthouse in the house").h, 4);
assertEqual(countLetters("lighthouse in the house").s, 2);
assertEqual(countLetters("lighthouse in the house").x, undefined);