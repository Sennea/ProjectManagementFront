import React from "react";
import { render } from "@testing-library/react";
import Board from "./Board";

const props = {};

describe("Board", () => {
  it("should render Board component properly", () => {
    const { getByTestId } = render(<Board {...props} />);
    expect(getByTestId("BoardWrapper")).toBeInTheDocument();
  });
});
