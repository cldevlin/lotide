const findKey = function (obj, callback) {
  for (const property in obj) {
    // console.log(property);
    if (callback(obj[property])) {
      return property;
    }
  }
};

module.exports = findKey;

// let restaurantRatings = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// };

// let case1 = findKey(restaurantRatings, x => x.stars === 2); // => "noma"
// let case2 = findKey(restaurantRatings, x => x.stars === 1);
// let case3 = findKey(restaurantRatings, x => x.stars === 3);

// assertEqual(case1, "noma");
// assertEqual(case2, "Blue Hill");
// assertEqual(case3, "Akaleri");