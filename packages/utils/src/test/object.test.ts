import assert from "assert";
import object from "../object.js";

describe("Testing Object Map Function", () => {
  it("Check if empty object works", () => {
    assert.deepEqual(
      object.map({}, (_, v) => v),
      {}
    );
  });

  it("Check if numeric values are mapped to squares correctly", () => {
    assert.deepEqual(
      object.map({ x: 1, y: 2, z: 3 }, (_, v) => v * v),
      { x: 1, y: 4, z: 9 }
    );
  });

  it("Check if string values are mapped with suffix correctly", () => {
    assert.deepEqual(
      object.map({ a: "B", b: "T", c: "R" }, (_, v) => v + "est"),
      { a: "Best", b: "Test", c: "Rest" }
    );
  });

  it("Check if numeric values are mapped to booleans correctly based on greater/smaller than 0", () => {
    assert.deepEqual(
      object.map({ a: 3, b: -3, c: 2, d: 9, e: -1, f: -7, g: 5, h: 0 }, (_, v) => v > 0),
      { a: true, b: false, c: true, d: true, e: false, f: false, g: true, h: false }
    );
  });
});

describe("Testing Object Filter Function", () => {
  it("Check if empty object works", () => {
    assert.deepEqual(
      object.filter({}, (_, v) => !!v),
      {}
    );
  });

  it("Check if even values are filtered correctly", () => {
    assert.deepEqual(
      object.filter({ p: 3, q: 4, r: 5, s: 6, t: 7 }, (_, v) => v % 2 === 0),
      { q: 4, s: 6 }
    );
  });

  it("Check if vowel keys are filtered correctly", () => {
    assert.deepEqual(
      object.filter({ a: 7, b: 6, c: 3, d: 8, e: 9 }, (k, _) => "aeiou".includes(k)),
      { a: 7, e: 9 }
    );
  });
});

describe("Testing Object Some Function", () => {
  it("Check if empty object returns false", () => {
    assert.equal(object.some({}), false);
  });

  it("Check if some key equals value", () => {
    assert.equal(
      object.some({ a: "v", b: "c", c: "e", d: "r", e: "e", f: "t", g: "a" }, (k, v) => k === v),
      true
    );
  });

  it("Check if some value is truthy (default function param)", () => {
    assert.equal(object.some({ a: 1, b: 5, c: 7, d: 9, e: 2, f: 6 }), true);
  });

  it("Check if some value is falsy", () => {
    assert.equal(
      object.some({ a: 1, b: 5, c: 7, d: 9, e: 2, f: 6 }, (_, v) => !v),
      false
    );
  });
});

describe("Testing Object Every Function", () => {
  it("Check if empty object returns true", () => {
    assert.equal(object.every({}), true);
  });

  it("Check if every key equals value", () => {
    assert.equal(
      object.every({ a: "v", b: "c", c: "e", d: "r", e: "e", f: "t", g: "a" }, (k, v) => k === v),
      false
    );
  });

  it("Check if every value is truthy (default function param)", () => {
    assert.equal(object.every({ a: 1, b: 5, c: 7, d: 9, e: 2, f: 6 }), true);
  });

  it("Check if every value is falsy", () => {
    assert.equal(
      object.every({ a: 0, b: null, c: NaN, d: undefined, e: "", f: false }, (_, v) => !v),
      true
    );
  });
});
