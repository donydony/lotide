const findKey = require('../findKey');
const assert = require('chai').assert;

describe("#findKey", () => {
  it("returns 'noma' for given nest objects with noma as key and 2 as value to nested stars key", () => {
    assert.deepEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), "noma");
  });
});