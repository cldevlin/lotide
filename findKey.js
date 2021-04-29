const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅ Assertion Passed: " + actual + " === " + expected);
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Implement the function findKey which takes in an object and a callback.
//It should scan the object and return the first key for which the callback
//returns a truthy value. If no key is found, then it should return undefined.

// const findKeyByValue = function (object, value) {
//   for (const property in object) {
//     if (object[property] === value) {
//       return property;
//     }
//   }
// };

const findKey = function(obj, callback) {
  for (const property in obj) {
    // console.log(property);
    if (callback(obj[property])) {
      return property;
    }
  }
};

let restaurantRatings = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

let case1 = findKey(restaurantRatings, x => x.stars === 2); // => "noma"
let case2 = findKey(restaurantRatings, x => x.stars === 1);
let case3 = findKey(restaurantRatings, x => x.stars === 3);

assertEqual(case1, "noma");
assertEqual(case2, "Blue Hill");
assertEqual(case3, "Akaleri");