import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a form", () => {
  render(<App />);
  const linkElement = screen.getByText(/Entity Form/i);
  expect(linkElement).toBeInTheDocument();
});
