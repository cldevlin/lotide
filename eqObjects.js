const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  const objectKeys1 = Object.keys(object1);
  const objectKeys2 = Object.keys(object2);
  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }
  for (let key of objectKeys1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


module.exports = eqObjects;