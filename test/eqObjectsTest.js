const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true for { a: '1', b: '2' } & { b: '2', a: '1' }", () => {
    assert.strictEqual(eqObjects({ a: '1', b: '2' }, { b: '2', a: '1' }), true);
  });

  it("returns false for { a: '1', b: '2', c: '3' }", () => {
    assert.strictEqual(eqObjects({ a: '1', b: '2', c: '3' }, { a: '1', b: '2' }), false);
  });
});