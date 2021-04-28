const eqArrays = function(array1, array2) {
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    //console.log("✅ Assertion Passed: " + actual + " === " + expected);
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let output = [];
  const length = array.length;
  if (length < 3) {
    return output;
  } else if (length % 2 === 0) {
    output = array.slice((length / 2 - 1), (length / 2 + 1));
  } else {
    output.push(array[Math.floor(length / 2)]);
  }
  console.log("output: ", output);
  return output;
};

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([2, 3]), []);
assertArraysEqual(middle([2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);





