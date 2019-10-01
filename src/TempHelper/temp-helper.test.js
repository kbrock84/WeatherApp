import TempHelper from "./temp-helper";

describe("TempHelper.kelvinTo", () => {
  it("should return kelvin converted to fahrenheit when F is passed", () => {
    expect(TempHelper.kelvinTo(273.15, "F")).toBe(32);
  });

  it("should return kevlin converted to celsius", () => {
    expect(TempHelper.kelvinTo(273.15, "C")).toBe(0);
  });

  it("should round to a whole number", () => {
    expect(TempHelper.kelvinTo(275, "C")).toBe(2);
  });

  it("should default to celsius", () => {
    expect(TempHelper.kelvinTo(273.15)).toBe(0);
  });
});
