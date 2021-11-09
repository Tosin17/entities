import React from "react";
import { render, screen } from "@testing-library/react";
import { EntityForm } from "./index";
import { act } from "react-dom/test-utils";

test("renders entity form", () => {
  act(() => {
    render(<EntityForm />);
  });
  const linkElement = screen.getByTestId("entityForm");
  expect(linkElement).toBeInTheDocument();
});
