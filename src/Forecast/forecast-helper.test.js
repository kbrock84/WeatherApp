import { minTemp, maxTemp, avgHumidity } from "./forecast-helper";

const mockWeatherList = [
  {
    main: {
      temp_min: 1,
      temp_max: 1,
      humidity: 1
    }
  },
  {
    main: {
      temp_min: 2,
      temp_max: 2,
      humidity: 2
    }
  },
  {
    main: {
      temp_min: 3,
      temp_max: 3,
      humidity: 3
    }
  },
  {
    main: {
      temp_min: 4,
      temp_max: 4,
      humidity: 4
    }
  }
];

describe("ForecastHelper.minTemp", () => {
  it("should return the minimum of temps passed as a weather list", () => {
    expect(minTemp(mockWeatherList)).toBe(1);
  });
});

describe("ForecastHelper.maxTemp", () => {
  it("should return the maximum of temps passed as a weather list", () => {
    expect(maxTemp(mockWeatherList)).toBe(4);
  });
});

describe("ForecastHelper.avgHumidity", () => {
  it("should return the average of humidities passed as a weather list", () => {
    expect(avgHumidity(mockWeatherList)).toBe(2.5);
  });
});
