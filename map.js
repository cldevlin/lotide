const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i of array1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const map = function (array, callback) {
  const results = [];

  for (let word of array) {
    results.push(callback(word));
  }

  return results;
}

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// // console.log(results1);

// const results2 = map(words, word => word.toUpperCase())
// // console.log(results2);

// const results3 = map(words, word => "word is: " + word)
// console.log(results3);


// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(results2, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
// assertArraysEqual(results3, [
//   'word is: ground',
//   'word is: control',
//   'word is: to',
//   'word is: major',
//   'word is: tom'
// ]);