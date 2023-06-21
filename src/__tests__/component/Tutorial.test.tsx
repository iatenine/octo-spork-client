import { fireEvent, render, screen } from "@testing-library/react";
import Tutorial from "../../component/Tutorial";
import { act } from "react-dom/test-utils";

describe("Tutorial Component Test Suite", () => {
  it("should render", () => {
    const { container } = render(<Tutorial />);
    expect(container).toBeInTheDocument();
  });

  it("should show modal when button is clicked", () => {
    render(<Tutorial />);
    const btn = screen.getByTestId("tutorial-toggle-btn");

    act(() => {
      fireEvent.click(btn);
    });

    const modal = screen.getByTestId("tutorial-modal");
    expect(modal).toBeInTheDocument();
  });
});
