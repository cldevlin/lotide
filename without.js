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