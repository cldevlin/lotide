// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const tail = function (array) {
  return array.slice(1);
  // let tailArray = [];
  // for (let i = 1; i < array.length; i++) {
  //   tailArray.push(array[i]);
  // }
  // return tailArray;
};

module.exports = tail;
