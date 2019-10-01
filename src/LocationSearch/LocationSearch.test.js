import { render, fireEvent } from "@testing-library/react";
import LocationSearch from "./LocationSearch";
import React from "react";

function setup(mockPlaceholder) {
  const spy = jest.fn(event => {});
  const queries = render(
    <LocationSearch searchLocation={spy}>{"MockCity"}</LocationSearch>
  );
  return { ...queries, spy };
}

describe("<LocationSearch />", () => {
  it("should contain a search input", () => {
    const { getByTestId } = setup();

    expect(getByTestId("search-input").tagName).toBe("INPUT");
  });

  it("should contain a search button", () => {
    const { getByTestId } = setup();

    expect(getByTestId("search-button").tagName).toBe("BUTTON");
  });

  it("should call searchLocation function after submit with the input text", () => {
    const { getByTestId, spy } = setup();

    // will console.error due to JSDOM not implementing HTMLFormElement.prototype.submit
    // test should pass anyway
    const submitButton = getByTestId("search-button");
    fireEvent.click(submitButton);

    expect(spy).toBeCalledTimes(1);
  });

  it("should not call searchLocation function before submit", () => {
    const { spy } = setup();
    expect(spy).not.toBeCalled();
  });

  it("should set the placeholder of the search input to props.children", () => {
    const { getByTestId } = setup();
    expect(getByTestId("search-input").getAttribute("placeholder")).toBe(
      "MockCity"
    );
  });
});
