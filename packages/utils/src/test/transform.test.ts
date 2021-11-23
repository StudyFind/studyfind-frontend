import assert from "assert";
import transform from "../transform.js";

describe("Testing Transform Weekdays and Times to Offsets Function", () => {
  it("Check with no times", () => {
    assert.deepEqual(
      transform.convertWeekdaysAndTimesToOffsets([true, false, false, true, false, true, true], []),
      []
    );
  });

  it("Check with no selected weekdays", () => {
    assert.deepEqual(
      transform.convertWeekdaysAndTimesToOffsets(
        [false, false, false, false, false, false, false],
        ["08:30", "10:30", "12:00", "15:30", "16:00"]
      ),
      []
    );
  });

  it("Check first combo", () => {
    assert.deepEqual(
      transform.convertWeekdaysAndTimesToOffsets(
        [true, false, false, true, false, true, true],
        ["08:30", "10:30", "12:00", "15:30", "16:00"]
      ),
      [
        30600000, 37800000, 43200000, 55800000, 57600000, 289800000, 297000000, 302400000,
        315000000, 316800000, 462600000, 469800000, 475200000, 487800000, 489600000, 549000000,
        556200000, 561600000, 574200000, 576000000,
      ]
    );
  });

  it("Check second combo", () => {
    assert.deepEqual(
      transform.convertWeekdaysAndTimesToOffsets(
        [false, false, true, true, false, false, false],
        ["09:30", "13:00", "14:00", "15:30", "16:00"]
      ),
      [
        207000000, 219600000, 223200000, 228600000, 230400000, 293400000, 306000000, 309600000,
        315000000, 316800000,
      ]
    );
  });

  it("Check third combo", () => {
    assert.deepEqual(
      transform.convertWeekdaysAndTimesToOffsets(
        [true, true, true, true, true, true, true],
        ["16:00", "22:00"]
      ),
      [
        57600000, 79200000, 144000000, 165600000, 230400000, 252000000, 316800000, 338400000,
        403200000, 424800000, 489600000, 511200000, 576000000, 597600000,
      ]
    );
  });
});

describe("Testing Transform Offsets to Weekdays and Times Function", () => {
  it("Check with no offsets", () => {
    assert.deepEqual(transform.convertOffsetsToWeekdaysAndTimes([]), [
      [false, false, false, false, false, false, false],
      [],
    ]);
  });

  it("Check first combo", () => {
    assert.deepEqual(
      transform.convertOffsetsToWeekdaysAndTimes([
        30600000, 37800000, 43200000, 55800000, 57600000, 289800000, 297000000, 302400000,
        315000000, 316800000, 462600000, 469800000, 475200000, 487800000, 489600000, 549000000,
        556200000, 561600000, 574200000, 576000000,
      ]),
      [
        [true, false, false, true, false, true, true],
        ["08:30", "10:30", "12:00", "15:30", "16:00"],
      ]
    );
  });

  it("Check second combo", () => {
    assert.deepEqual(
      transform.convertOffsetsToWeekdaysAndTimes([
        207000000, 219600000, 223200000, 228600000, 230400000, 293400000, 306000000, 309600000,
        315000000, 316800000,
      ]),
      [
        [false, false, true, true, false, false, false],
        ["09:30", "13:00", "14:00", "15:30", "16:00"],
      ]
    );
  });

  it("Check third combo", () => {
    assert.deepEqual(
      transform.convertOffsetsToWeekdaysAndTimes([
        57600000, 79200000, 144000000, 165600000, 230400000, 252000000, 316800000, 338400000,
        403200000, 424800000, 489600000, 511200000, 576000000, 597600000,
      ]),
      [
        [true, true, true, true, true, true, true],
        ["16:00", "22:00"],
      ]
    );
  });
});
