const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [] for ['hi']", () => {
    assert.deepEqual(tail(['hi']), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});