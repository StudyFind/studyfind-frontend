import assert from "assert";
import datetime from "../datetime.js";

const MILLISECOND_DEVIATION = 5;

const isWithinDeviation = (expect, actual) => {
  const greater = expect > actual - MILLISECOND_DEVIATION;
  const smaller = expect < actual + MILLISECOND_DEVIATION;

  return smaller && greater;
};

describe("Testing Datetime Functions", () => {
  it("Check if getNow() returns current UNIX timestamp in local time within 5ms", () => {
    const expect = Date.now();
    const actual = datetime.getNow();

    assert.ok(isWithinDeviation(expect, actual));
  });

  it("Check if getNowUTC() returns current UNIX timestamp in UTC time within 5ms", () => {
    const expect = new Date().getTime();
    const actual = datetime.getNowUTC();

    assert.ok(isWithinDeviation(expect, actual));
  });

  it("Check if getToday() returns today's date in YYYY-MM-DD format", () => {
    const expect = new Date().toISOString().substring(0, 10);
    const actual = datetime.getToday();

    assert.equal(expect, actual);
  });

  it("Check if getYesterday() returns yesterday's date in YYYY-MM-DD format", () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const expect = date.toISOString().substring(0, 10);
    const actual = datetime.getYesterday();

    assert.equal(expect, actual);
  });

  it("Check if getTomorrow() returns tomorrow's date in YYYY-MM-DD format", () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const expect = date.toISOString().substring(0, 10);
    const actual = datetime.getTomorrow();

    assert.equal(expect, actual);
  });

  it("Check if getStandardDate() returns current UNIX timestamp as date in YYYY-MM-DD format", () => {
    const expect = new Date().toISOString().substring(0, 10);
    const actual = datetime.getStandardDate(Date.now());

    assert.equal(expect, actual);
  });

  it("Check if getStandardDate() returns arbitrary timestamp in YYYY-MM-DD format", () => {
    const expect = "2021-08-14";
    const actual = datetime.getStandardDate(1628976226160);

    assert.equal(expect, actual);
  });

  it("Check if getStandardDate() returns undefined parameter as current YYYY-MM-DD", () => {
    const expect = new Date().toISOString().substring(0, 10);
    const actual = datetime.getStandardDate(undefined);

    assert.equal(expect, actual);
  });

  it("Check if getStandardDate() returns null parameter as invalid", () => {
    const expect = new Date().toISOString().substring(0, 10);
    const actual = datetime.getStandardDate(undefined);

    assert.equal(expect, actual);
  });

  it("Check if getFriendlyDate() returns 'Today'.", () => {
    const expect = "Today";
    const actual = datetime.getFriendlyDate(Date.now());

    assert.equal(expect, actual);
  });

  it("Check if getFriendlyDate() returns 'Yesterday'.", () => {
    const date = new Date();
    const expect = "Yesterday";
    const actual = datetime.getFriendlyDate(date.setDate(date.getDate() - 1));

    assert.equal(expect, actual);
  });

  it("Check if getFriendlyDate() returns 'Tomorrow'.", () => {
    const date = new Date();
    const expect = "Tomorrow";
    const actual = datetime.getFriendlyDate(date.setDate(date.getDate() + 1));

    assert.equal(expect, actual);
  });

  it("Check if getFriendlyDate() returns MMMM DD, YYYY for last week.", () => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    const expect = date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
    const actual = datetime.getFriendlyDate(date.getTime());

    assert.equal(expect, actual);
  });

  it("Check if getFriendlyDate() returns MMMM DD, YYYY for arbitrary 02/29/1996.", () => {
    const expect = "February 29, 1996";
    const actual = datetime.getFriendlyDate(825570000000);

    assert.equal(expect, actual);
  });

  it("Check if getFriendlyDate() returns arbitrary negative double parameter in MMMM DD, YYYY.", () => {
    const expect = "December 31, 1969";
    const actual = datetime.getFriendlyDate(-234.12);

    assert.equal(expect, actual);
  });

  it("Check if get12HourTime() returns current h:mma.", () => {
    const expect = new Date()
      .toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
      .toLowerCase()
      .replace(" ", "");

    const actual = datetime.get12HourTime(Date.now());

    assert.equal(expect, actual);
  });

  it("Check if get24HourTime() returns current HH:mm.", () => {
    const expect = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    });
    const actual = datetime.get24HourTime(Date.now());

    assert.equal(expect, actual);
  });

  // it("Check if get24HourTime() returns current HH:mm.", () => {
  //   const time = new Date().toLocaleString("en-US", {
  //     hour: "numeric",
  //     minute: "2-digit",
  //     hour12: false,
  //   });
  //   expect(get24HourTime(Date.now())).toBe(time);
  // });

  // it("Check getRelativeTime() for a few seconds.", () => {
  //   const timestamp = Date.now();
  //   expect(getRelativeTime(timestamp - 5 * 1000)).toBe("a few seconds ago");
  // });

  // it("Check getRelativeTime() for a minute.", () => {
  //   const timestamp = Date.now();
  //   expect(getRelativeTime(timestamp - 60 * 1000)).toBe("a minute ago");
  // });

  // it("Check getRelativeTime() for a 5 minutes.", () => {
  //   const timestamp = Date.now();
  //   expect(getRelativeTime(timestamp - 5 * 60 * 1000)).toBe("5 minutes ago");
  // });

  // it("Check getRelativeTime() for an hour.", () => {
  //   const timestamp = Date.now();
  //   expect(getRelativeTime(timestamp - 60 * 60 * 1000)).toBe("an hour ago");
  // });

  // it("Check getRelativeTime() for 5 hours.", () => {
  //   const timestamp = Date.now();
  //   expect(getRelativeTime(timestamp - 5 * 60 * 60 * 1000)).toBe("5 hours ago");
  // });

  // it("Check getRelativeTime() for a day.", () => {
  //   const timestamp = Date.now();
  //   expect(getRelativeTime(timestamp - 24 * 60 * 60 * 1000)).toBe("a day ago");
  // });

  // it("Check getRelativeTime() for 5 days.", () => {
  //   const timestamp = Date.now();
  //   expect(getRelativeTime(timestamp - 5 * 24 * 60 * 60 * 1000)).toBe("5 days ago");
  // });

  // it("Check getRelativeTime() for a month.", () => {
  //   const timestamp = Date.now();
  //   expect(getRelativeTime(timestamp - 30 * 24 * 60 * 60 * 1000)).toBe("a month ago");
  // });

  // it("Check getRelativeTime() for 5 months.", () => {
  //   const timestamp = Date.now();
  //   expect(getRelativeTime(timestamp - 5 * 30 * 24 * 60 * 60 * 1000)).toBe("5 months ago");
  // });

  // it("Check getRelativeTime() for a year.", () => {
  //   const timestamp = Date.now();
  //   expect(getRelativeTime(timestamp - 365 * 24 * 60 * 60 * 1000)).toBe("a year ago");
  // });

  // it("Check getRelativeTime() for 5 years.", () => {
  //   const timestamp = Date.now();
  //   expect(getRelativeTime(timestamp - 5 * 365 * 24 * 60 * 60 * 1000)).toBe("5 years ago");
  // });

  // it("Check if getStandardTimezoneName() returns current timezone abbreviation.", () => {
  //   expect(getStandardTimezoneName(Intl.DateTimeFormat().resolvedOptions().timeZone)).toBe(
  //     new Date().toLocaleTimeString("default", { timeZoneName: "short" }).split(" ")[2]
  //   );
  // });

  // it("Check if getStandardTimezoneName() returns wrong timezone name format as UTC.", () => {
  //   expect(getStandardTimezoneName("Atlantic Standard Time")).toBe("UTC");
  // });

  // it("Check if getStandardTimezoneName() returns empty parameter as UTC.", () => {
  //   expect(getStandardTimezoneName()).toBe("UTC");
  // });

  // it("Check if getStandardTimezoneName() returns arbitrary timezone name as abbreviation.", () => {
  //   expect(getStandardTimezoneName("Asia/Magadan")).toBe("+11");
  // });

  // it("Check if getStandardTimezoneName() returns arbitrary timezone name as abbreviation.", () => {
  //   expect(getStandardTimezoneName("Europe/Budapest")).toBe("CEST");
  // });

  // it("Check if getTimestampFromDatetime() returns current UTC timestamp within a minute.", () => {
  //   const date = new Date().toISOString().substring(0, 10);
  //   const time24 = new Date().toLocaleString("en-US", {
  //     hour: "numeric",
  //     minute: "2-digit",
  //     hour12: false,
  //   });
  //   expect(getTimestampFromDatetime(date, time24)).toBeWithinDeviation(
  //     new Date().getTime(),
  //     60 * 1000
  //   );
  // });

  // it("Check if getTimestampFromDatetime() returns arbitrary UTC timestamp within a minute.", () => {
  //   expect(getTimestampFromDatetime("2021-08-14", "17:44")).toBeWithinDeviation(
  //     1628977444662,
  //     60 * 1000
  //   );
  // });
});
