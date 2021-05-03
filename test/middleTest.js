const assert = require('chai').assert;
// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([2, 3]), []);
// assertArraysEqual(middle([2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);


describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [] for [2, 3]", () => {
    assert.deepEqual(middle([2, 3]), []);
  });
  it("returns [] for [2]", () => {
    assert.deepEqual(middle([2]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

});