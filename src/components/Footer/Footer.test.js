import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { footerMenu } from "../../data";
import Footer from "./Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("should have h2", () => {
    render(<Footer />);
    const h2 = screen.getByRole("heading", { name: "Subscribe Our Newsletter" });

    expect(h2).toBeInTheDocument();
  });

  it("Should have menu items", () => {
    render(<Footer />);
    const items = document.querySelectorAll(".menu .menu-item");

    expect(items.length).toBe(footerMenu.length);
  });
});
