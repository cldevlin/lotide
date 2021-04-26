// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅ Assertion Passed: " + actual + " === " + expected);
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
  // let tailArray = [];
  // for (let i = 1; i < array.length; i++) {
  //   tailArray.push(array[i]);
  // }
  // return tailArray;
};

assertEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
