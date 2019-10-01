import React from "react";
import { render } from "@testing-library/react";
import Forecast from "./Forecast";
import mockForecast from "./mock-full-forecast.json";

function setup(units = "F") {
  return render(<Forecast forecast={mockForecast} units={units} />);
}

describe("<Forecast />", () => {
  it("should contain a forecast for each of five days", () => {
    const { getAllByTestId } = setup();
    const days = getAllByTestId("forecast-day");

    expect(days.length).toBe(5);
  });
});
