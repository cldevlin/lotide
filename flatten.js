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


const flatten = function(bigArray) {
  let output = [];
  for (let i = 0; i < bigArray.length; i++) {
    if (Array.isArray(bigArray[i])) {
      for (let j = 0; j < bigArray[i].length; j++) {
        output.push(bigArray[i][j]);
      }
    } else {
      output.push(bigArray[i]);
    }
  }
  return output;
};


assertArraysEqual(flatten([1, 2, [3, 4, 5, 10, "hello"], 5, [6]]), [1, 2, 3, 4, 5, 10, "hello", 5, 6]);