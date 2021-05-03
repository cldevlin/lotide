const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!