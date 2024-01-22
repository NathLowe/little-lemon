import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Reservation from "./Reservation";
import "@testing-library/jest-dom";

describe("Reservation", () => {
  it("should have button to reserve table", () => {
    render(<Reservation />);
    const h2 = screen.getByRole("button", { name: /Make Reservation/i });

    expect(h2).toBeInTheDocument();
  });

  it("Should have an h1", () => {
    render(<Reservation />);
    const h1 = screen.getByRole("heading");

    expect(h1).toBeInTheDocument();
  });
});
