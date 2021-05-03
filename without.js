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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    //console.log("✅ Assertion Passed: " + actual + " === " + expected);
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function (array, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let itemMatches = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === array[i]) {
        itemMatches = true;
      }
    }
    if (!itemMatches) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without(["hello", 567, "goodbye"], ["foo", "hello"]), [567, "goodbye"]);