const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns correct counts", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result1["Jason"], 1);
    assert.strictEqual(result1["Karima"], undefined);
    assert.strictEqual(result1["Fang"], 2);
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);