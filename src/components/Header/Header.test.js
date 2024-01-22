import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Header from "./Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("should have button to reserve table", () => {
    render(<Header />);
    const h2 = screen.getByRole("button", { name: /reserve table/i });

    expect(h2).toBeInTheDocument();
  });

  it("Should have navigation menu items", () => {
    render(<Header />);
    const items = screen.getAllByRole("listitem");

    expect(items.length).toBe(5);
  });
});
