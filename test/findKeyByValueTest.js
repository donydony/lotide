const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  it("returns 'drama' for drama: The Wire", () => {
    const bestTVShowsByGenre = {
      'sci_fi': "The Expanse",
      'comedy': "Brooklyn Nine-Nine",
      'drama':  "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
});