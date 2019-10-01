import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Geolocation from "./Geolocation";

const mockPostition = { latitude: 45, longitude: 100 };
const mockGeoLocation = jest.fn(() => mockPostition);

function setup() {
  const spy = jest.fn();
  const queries = render(<Geolocation updateLocation={spy} />);
  return { ...queries, spy };
}

beforeEach(() => {
  global.navigator.geolocation = {
    getCurrentPosition: mockGeoLocation
  };
});

describe("<Geolocation />", () => {
  it("should call updateLocation with current location of the user when checked", () => {
    const { spy, getByTestId } = setup();

    const checkbox = getByTestId("locate-toggle");
    fireEvent.click(checkbox);

    expect(spy).toBeCalledWith(mockPostition);
  });

  it("should return an error string and null location when unavailable", () => {
    const { spy, getByTestId } = setup();
    global.navigator.geolocation = undefined;

    const checkbox = getByTestId("locate-toggle");
    fireEvent.click(checkbox);

    let args = spy.mock.calls[0][0];
    expect(args.error).toBeDefined();
    expect(args.coords).toBeNull();
  });

  it("should return an error type when and error has occured in geolocation", () => {
    const { spy, getByTestId } = setup();
    global.navigator.geolocation = undefined;

    const checkbox = getByTestId("locate-toggle");
    fireEvent.click(checkbox);

    global.navigator.geolocation = {
      getCurrentPosition: (_, error) => error()
    };

    let args = spy.mock.calls[0][0];
    expect(args.error).toBeDefined();
    expect(args.coords).toBeNull();
  });
});
