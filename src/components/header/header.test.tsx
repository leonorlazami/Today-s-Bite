import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Header component", () => {
  it("renders correclty", () => {
    render(<Header />);
    const headerEl = screen.getByRole("heading");
    expect(headerEl).toBeInTheDocument();
  });
});
