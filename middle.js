const eqArrays = require('./eqArrays');


const assertArraysEqual = require('./assertArraysEqual');

const middle = function (array) {
  let output = [];
  const length = array.length;
  if (length < 3) {
    return output;
  } else if (length % 2 === 0) {
    output = array.slice((length / 2 - 1), (length / 2 + 1));
  } else {
    output.push(array[Math.floor(length / 2)]);
  }
  // console.log("output: ", output);
  return output;
};

module.exports = middle;




