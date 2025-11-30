import { getRelativeTimeFromDate } from "./utils.ts";

describe("getRelativeTimeFromDate", () => {
  it('returns "Just now" for recent dates', () => {
    const now = new Date().toISOString();
    expect(getRelativeTimeFromDate(now)).toBe("Just now");
  });

  it("returns minutes ago for dates under an hour", () => {
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    expect(getRelativeTimeFromDate(fiveMinutesAgo)).toBe("5 minutes ago");
  });

  it("returns hours ago for dates under a day", () => {
    const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
    expect(getRelativeTimeFromDate(twoHoursAgo)).toBe("2 hours ago");
  });

  it("returns days ago for dates under a week", () => {
    const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString();
    expect(getRelativeTimeFromDate(threeDaysAgo)).toBe("3 days ago");
  });

  it("returns months ago for dates under a year", () => {
    const twoMonthsAgo = new Date();
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
    expect(getRelativeTimeFromDate(twoMonthsAgo.toISOString())).toBe("2 months ago");
  });

  it("returns years ago for old dates", () => {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    expect(getRelativeTimeFromDate(oneYearAgo.toISOString())).toBe("1 year ago");
  });
});
