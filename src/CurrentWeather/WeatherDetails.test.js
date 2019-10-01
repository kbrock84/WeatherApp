import { render } from "@testing-library/react";
import React from "react";
import WeatherDetails from "./WeatherDetails";

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

function setup() {
  return render(<WeatherDetails weather={mockWeather} />);
}

function objectValsArePresent(container, obj) {
  Object.keys(obj).forEach(key => {
    const match = new RegExp(`.*${obj[key]}`);
    expect(container.innerHTML).toMatch(match);
  });
}

describe("<WeatherDetials />", () => {
  it("should display the coordinates used for weather", () => {
    const { getByTestId } = setup();
    const container = getByTestId("coord-container");

    objectValsArePresent(container, mockWeather.coord);
  });

  it("should display the main data used for weather", () => {
    const { getByTestId } = setup();
    const container = getByTestId("main-container");

    objectValsArePresent(container, mockWeather.main);
  });

  it("should display the wind data used for weather", () => {
    const { getByTestId } = setup();
    const container = getByTestId("wind-container");

    objectValsArePresent(container, mockWeather.wind);
  });

  it("should display the wind data used for weather", () => {
    const { getByTestId } = setup();
    const container = getByTestId("wind-container");

    objectValsArePresent(container, mockWeather.wind);
  });

  it("should display the rain data used for weather", () => {
    const { getByTestId } = setup();
    const container = getByTestId("rain-container");

    objectValsArePresent(container, mockWeather.rain);
  });

  it("should display the clouds data used for weather", () => {
    const { getByTestId } = setup();
    const container = getByTestId("clouds-container");

    objectValsArePresent(container, mockWeather.clouds);
  });

  it("should display the sys data used for weather", () => {
    const { getByTestId } = setup();
    const container = getByTestId("sys-container");

    objectValsArePresent(container, mockWeather.sys);
  });
});
