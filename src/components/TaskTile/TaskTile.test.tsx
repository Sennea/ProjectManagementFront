import React from "react";
import { render } from "@testing-library/react";
import TaskTile from "./TaskTile";

const props = {};

describe("TaskTile", () => {
  it("should render TaskTile component properly", () => {
    const { getByTestId } = render(<TaskTile {...props} />);
    expect(getByTestId("TaskTileWrapper")).toBeInTheDocument();
  });
});
