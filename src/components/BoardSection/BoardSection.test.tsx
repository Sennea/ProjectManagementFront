import React from "react";
import { render } from "@testing-library/react";
import BoardSection from "./BoardSection";

const props = {};

describe("BoardSection", () => {
  it("should render BoardSection component properly", () => {
    const { getByTestId } = render(<BoardSection {...props} />);
    expect(getByTestId("BoardSectionWrapper")).toBeInTheDocument();
  });
});
