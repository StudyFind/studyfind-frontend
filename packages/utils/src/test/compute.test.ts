import assert from "assert";
import compute from "../compute.js";

describe("Testing Compute Readability Index Function", () => {
  const EMPTY_STRING = "";
  const RANDOM_TEXT = "Assign a new name to a named export to resolve naming collisions.";
  const VERY_EASY_TEXT = "1. 1. 1. 1. 1. 1. 1. 1. 1. 1. 1. 1.";
  const VERY_HARD_TEXT = "reofijefefjefbroefhehufihewhfuiewhfiuhewifhui";

  it("Check if readabilityIndex(text) of empty string should return NaN", () => {
    assert.equal(compute.readabilityIndex(EMPTY_STRING), NaN);
  });

  it("Check if readabilityIndex(text) returns correct value for arbitrary text", () => {
    assert.equal(compute.readabilityIndex(RANDOM_TEXT), 94);
  });

  it("Check that readabilityIndex(text) does not return value smaller than 0", () => {
    assert.equal(compute.readabilityIndex(VERY_HARD_TEXT), 0);
  });

  it("Check that readabilityIndex(text) does not return value greater than 100", () => {
    assert.equal(compute.readabilityIndex(VERY_EASY_TEXT), 100);
  });
});

describe("Testing Compute Eligibility Score Function", () => {
  it("Check that eligibilityScore(questions, responses) for no questions is NaN", () => {
    assert.equal(compute.eligibilityScore([], []), NaN);
  });

  it("Check that eligibilityScore(questions, responses) for all 'Unsure' responses is 50", () => {
    assert.equal(
      compute.eligibilityScore(
        [
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Exclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
        ],
        ["Unsure", "Unsure", "Unsure"]
      ),
      50
    );
  });

  it("Check that eligibilityScore(questions, responses) for all mismatching responses is 0", () => {
    assert.equal(
      compute.eligibilityScore(
        [
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Exclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
        ],
        ["No", "Yes", "No"]
      ),
      0
    );
  });

  it("Check that eligibilityScore(questions, responses) for all matching responses is 100", () => {
    assert.equal(
      compute.eligibilityScore(
        [
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Exclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
        ],
        ["Yes", "No", "Yes"]
      ),
      100
    );
  });

  it("Check if eligibilityScore(questions, responses) with some unanswered questions is correct", () => {
    assert.equal(
      compute.eligibilityScore(
        [
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Exclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Exclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
        ],
        ["Yes", "No", "Yes", "Unsure", "No", "Unsure"]
      ),
      83
    );
  });

  it("Check eligibilityScore(questions, responses) with 2/3 matching questions and responses is correct", () => {
    assert.equal(
      compute.eligibilityScore(
        [
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Exclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
        ],
        ["Yes", "No", "No"]
      ),
      67
    );
  });

  it("Check eligibilityScore(questions, responses) with 5/7 matching questions and responses is correct", () => {
    assert.equal(
      compute.eligibilityScore(
        [
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Exclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Exclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Exclusion", prompt: "", weight: "Medium" },
        ],
        ["Yes", "No", "Yes", "No", "No", "No", "Yes"]
      ),
      57
    );
  });

  it("Check if eligibilityScore(questions, responses) with more questions than responses works", () => {
    assert.equal(
      compute.eligibilityScore(
        [
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Exclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Exclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Exclusion", prompt: "", weight: "Medium" },
        ],
        ["Yes", "No", "No", "No", "Yes"]
      ),
      43
    );
  });

  it("Check if eligibilityScore(questions, responses) with more responses than questions works", () => {
    assert.equal(
      compute.eligibilityScore(
        [
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Exclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
          { type: "Exclusion", prompt: "", weight: "Medium" },
          { type: "Inclusion", prompt: "", weight: "Medium" },
        ],
        ["Yes", "No", "Yes", "No", "No", "No", "Yes"]
      ),
      80
    );
  });
});
