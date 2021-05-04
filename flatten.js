const flatten = function (bigArray) {
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

module.exports = flatten;

