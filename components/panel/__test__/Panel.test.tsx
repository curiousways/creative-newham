import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Panel from "../index";

describe("Panel", () => {
  test("Displays Title Text", () => {
    // ARRANGE
    render(
      <Panel title="Example Title">
        <div></div>
      </Panel>
    );

    const h1 = screen.getByRole("heading", { level: 1 });

    // ASSERT
    expect(h1).toHaveTextContent("Example Title");
  });
});
