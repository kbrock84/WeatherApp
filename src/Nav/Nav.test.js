import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Nav from "./Nav";

const setItemSpy = jest.fn();
const mockItems = ["state1", "state2"];

function setup() {
  return render(<Nav items={mockItems} setItem={setItemSpy} />);
}

describe("<Nav />", () => {
  it("should display all values passed to items", () => {
    const { getByText } = setup();

    mockItems.forEach(item => expect(getByText(item)).toBeDefined());
  });

  it("should call setItem with the item clicked", () => {
    const { getByText } = setup();
    fireEvent.click(getByText(mockItems[0]));

    expect(setItemSpy).toBeCalled();
  });
});
