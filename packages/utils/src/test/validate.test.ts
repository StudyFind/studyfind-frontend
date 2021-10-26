import assert from "assert";
import validate from "../validate.js";

describe("Testing Validate Name Function", () => {
  it("Check empty string", () => {
    assert.equal(validate.name(""), " ");
  });

  it("Check with numeric characters", () => {
    assert.equal(validate.name("3Yohan3 Jhaveri"), "Name is invalid");
  });

  it("Check with special characters", () => {
    assert.equal(validate.name("#Yohan+Jhaveri"), "Name is invalid");
  });

  it("Check with numeric and special characters", () => {
    assert.equal(validate.name("Yohan_3_Jhaveri"), "Name is invalid");
  });

  it("Check with only alphabetic characters", () => {
    assert.equal(validate.name("Yohan Jhaveri"), "");
  });

  it("Check with only first name", () => {
    assert.equal(validate.name("Yohan"), "");
  });
});

describe("Testing Validate Email Function", () => {
  it("Check empty string", () => {
    assert.equal(validate.email(""), " ");
  });

  it("Check only alphabetic characters", () => {
    assert.equal(validate.email("abcdefg"), "Email is invalid");
  });

  it("Check without the top-level domain", () => {
    assert.equal(validate.email("abcdefg@12345"), "Email is invalid");
  });

  it("Check with top-level domain too short", () => {
    assert.equal(validate.email("abcdefg@12345.c"), "Email is invalid");
  });

  it("Check with valid email", () => {
    assert.equal(validate.email("abcdefg@12345.com"), "");
  });
});

describe("Testing Validate Password Function", () => {
  it("Check empty string", () => {
    assert.equal(validate.password(""), " ");
  });

  it("Check fewer than 8 characters and only lower case characters", () => {
    assert.equal(validate.password("test1"), "Password must have at least 8 characters");
  });

  it("Check fewer than 8 characters and with upper case characters", () => {
    assert.equal(validate.password("Test123"), "Password must have at least 8 characters");
  });

  it("Check exactly 8 characters and with upper case characters", () => {
    assert.equal(validate.password("TestTest"), "");
  });

  it("Check more than 8 characters and only upper case characters", () => {
    assert.equal(validate.password("TESTTEST123"), "");
  });

  it("Check more than 8 characters and only lower case characters", () => {
    assert.equal(validate.password("testtesttest"), "Password must have a capital letter");
  });

  it("Check with valid password", () => {
    assert.equal(validate.password("HelloWorld"), "");
  });
});

describe("Testing Validate URL Function", () => {
  it("Check empty string", () => {
    assert.equal(validate.url(""), " ");
  });

  it("Check invalid URL", () => {
    assert.equal(validate.url("test"), "URL is invalid");
  });

  it("Check with missing domain", () => {
    assert.equal(validate.url("https://www"), "URL is invalid");
  });

  it("Check with missing domain and protocol (HTTP)", () => {
    assert.equal(validate.url("www"), "URL is invalid");
  });

  it("Check with missing subdomain and protocol (HTTP)", () => {
    assert.equal(validate.url("studyfind.org"), "URL must begin with https://");
  });

  it("Check with missing top-level domain and protocol (HTTP)", () => {
    assert.equal(validate.url("www.studyfind"), "URL must begin with https://");
  });

  it("Check with missing top-level domain", () => {
    assert.equal(validate.url("https://www.studyfind"), "");
  });

  it("Check with missing subdomain", () => {
    assert.equal(validate.url("https://studyfind.org"), "");
  });

  it("Check with missing protocol (HTTP)", () => {
    assert.equal(validate.url("www.studyfind.org"), "URL must begin with https://");
  });

  it("Check with insecure protocol (HTTP)", () => {
    assert.equal(validate.url("http://www.studyfind.org"), "URL must begin with https://");
  });

  it("Check with insecure protocol (HTTP) and missing subdomain", () => {
    assert.equal(validate.url("http://studyfind.org"), "URL must begin with https://");
  });
});

describe("Testing Validate Date Function", () => {
  it("Check empty string", () => {
    assert.equal(validate.date(""), " ");
  });

  it("Check with no format", () => {
    assert.equal(validate.date("test"), "Date is invalid");
  });

  it("Check with incorrect number of digits for year (fewer)", () => {
    assert.equal(validate.date("1-12-18"), "Date is invalid");
  });

  it("Check with incorrect number of digits for year (extra)", () => {
    assert.equal(validate.date("20000-12-18"), "Date is invalid");
  });

  it("Check with incorrect number of digits for month (fewer)", () => {
    assert.equal(validate.date("1998-1-18"), "Date is invalid");
  });

  it("Check with incorrect number of digits for month (extra)", () => {
    assert.equal(validate.date("1998-123-18"), "Date is invalid");
  });

  it("Check with invalid month value (low)", () => {
    assert.equal(validate.date("1998-00-18"), "Date is invalid");
  });

  it("Check with invalid month value (high)", () => {
    assert.equal(validate.date("1998-13-18"), "Date is invalid");
  });

  it("Check with incorrect number of digits for day (extra)", () => {
    assert.equal(validate.date("1998-12-189"), "Date is invalid");
  });

  it("Check with invalid day value (low)", () => {
    assert.equal(validate.date("1998-12-00"), "Date is invalid");
  });

  it("Check with invalid day value (high)", () => {
    assert.equal(validate.date("1998-12-32"), "Date is invalid");
  });

  it("Check with invalid day-month combo", () => {
    assert.equal(validate.date("1998-04-31"), "Date is invalid");
  });

  it("Check with invalid leap day", () => {
    assert.equal(validate.date("1998-02-29"), "Date is invalid");
  });

  it("Check with valid leap day", () => {
    assert.equal(validate.date("2000-02-29"), "");
  });

  it("Check with valid date", () => {
    assert.equal(validate.date("1998-12-18"), "");
  });

  it("Check with '/' separator", () => {
    assert.equal(validate.date("1998/12/18"), "Date is invalid");
  });
});

describe("Testing Validate Time Function", () => {
  it("Check empty string", () => {
    assert.equal(validate.time(""), " ");
  });

  it("Check with no format", () => {
    assert.equal(validate.time("test"), "Time is invalid");
  });

  it("Check with incorrect number of digits for hour (fewer)", () => {
    assert.equal(validate.time("2:30"), "Time is invalid");
  });

  it("Check with incorrect number of digits for hour (extra)", () => {
    assert.equal(validate.time("342:30"), "Time is invalid");
  });

  it("Check with invalid hour value", () => {
    assert.equal(validate.time("25:30"), "Time is invalid");
  });

  it("Check with incorrect number of digits for minute (fewer)", () => {
    assert.equal(validate.time("05:3"), "Time is invalid");
  });

  it("Check with incorrect number of digits for minute (extra)", () => {
    assert.equal(validate.time("05:338"), "Time is invalid");
  });

  it("Check with invalid minute value", () => {
    assert.equal(validate.time("05:60"), "Time is invalid");
  });

  it("Check with valid time (AM)", () => {
    assert.equal(validate.time("08:29"), "");
  });

  it("Check with valid time (PM)", () => {
    assert.equal(validate.time("22:42"), "");
  });

  it("Check with first moment", () => {
    assert.equal(validate.time("00:00"), "");
  });

  it("Check with last moment", () => {
    assert.equal(validate.time("23:59"), "");
  });
});
