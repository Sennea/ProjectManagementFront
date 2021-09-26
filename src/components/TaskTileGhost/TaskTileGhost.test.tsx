import React from "react";
import { render } from "@testing-library/react";
import TaskTileGhost from "./TaskTileGhost";

const props = {};

describe("TaskTileGhost", () => {
  it("should render TaskTileGhost component properly", () => {
    const { getByTestId } = render(<TaskTileGhost {...props} />);
    expect(getByTestId("TaskTileGhostWrapper")).toBeInTheDocument();
  });
});
