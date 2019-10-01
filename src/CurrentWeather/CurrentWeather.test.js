import { render } from "@testing-library/react";
import React from "react";
import CurrentWeather from "./CurrentWeather";

const mockWeather = {
  coord: { lon: -122.26, lat: 47.83 },
  weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
  base: "stations",
  main: {
    temp: 276.62,
    pressure: 1017,
    humidity: 97,
    temp_min: 273.71,
    temp_max: 279.82
  },
  wind: { speed: 1.08, deg: 106.958 },
  rain: { "1h": 0.25 },
  clouds: { all: 0 },
  dt: 1569852626,
  sys: {
    type: 3,
    id: 2009725,
    message: 0.0199,
    country: "US",
    sunrise: 1569852389,
    sunset: 1569894689
  },
  timezone: -25200,
  id: 5785453,
  name: "Alderwood Manor",
  cod: 200
};

function setup(tempUnits = "F") {
  return render(<CurrentWeather weather={mockWeather} units={tempUnits} />);
}

describe("<CurrentWeather />", () => {
  it("should display the city name", () => {
    const { getByText } = setup();

    expect(getByText(mockWeather.name)).toBeDefined();
  });

  it("should display the weather icon with the weather description as alt text", () => {
    const { getByAltText } = setup();
    const imgTag = getByAltText(mockWeather.weather[0].description);
    expect(imgTag.tagName).toBe("IMG");
    let re = new RegExp(`https?://.*${mockWeather.weather[0].icon}\\.png`);
    expect(imgTag.getAttribute("src")).toMatch(re);
  });

  it("should display the weather description as text", () => {
    const { getByTestId } = setup();

    expect(getByTestId("current-weather").innerHTML).toContain(
      mockWeather.weather[0].description
    );
  });

  it("should display the current temperature in degrees F when F is passed as units", () => {
    const { getByTestId } = setup();
    const tempF = Math.round(((mockWeather.main.temp - 273.15) * 9) / 5 + 32);

    expect(getByTestId("current-temp").innerHTML).toContain("" + tempF);
  });

  it("should display the current temperature in degrees C when C is passed as units", () => {
    const { getByTestId } = setup();
    const tempF = Math.round(((mockWeather.main.temp - 273.15) * 9) / 5 + 32);

    expect(getByTestId("current-temp").innerHTML).toContain("" + tempF);
  });
});
