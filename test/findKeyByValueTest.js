const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns correct value for object bestTVShowByGenre", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it("returns ", () => {
    const random = {
      one: 1,
      two: 2,
      three: 3,
      four: 4
    };
    assert.strictEqual(findKeyByValue(random, 2), "two");
    assert.strictEqual(findKeyByValue(random, 4), "four");
  });
});








