import { fireEvent, render, screen, within } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Details from "../../pages/Details";

describe("Tutorial Component Test Suite", () => {
  const mockFn = jest.fn();
  const mockMembers = [
    { _id: 348394893, title: "Representative", district: 3 },
    { _id: 567889745, title: "Senator" },
  ];
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render with back button", () => {
    const { container } = render(
      <Details members={[]} resetDistrict={mockFn} />
    );
    expect(container).toBeInTheDocument();
  });

  it("should use callback when back button is clicked", () => {
    render(<Details members={[]} resetDistrict={mockFn} />);
    const btn = screen.getByTestId("details-back-btn");
    expect(btn).toBeInTheDocument();
    expect(mockFn).toBeCalledTimes(0);

    act(() => {
      fireEvent.click(btn);
    });

    expect(mockFn).toBeCalledTimes(1);
  });

  it("should include a card for each member provided", () => {
    render(<Details members={mockMembers} resetDistrict={mockFn} />);
    const cards = [
      screen.getByTestId("member-card-container-0"),
      screen.getByTestId("member-card-container-1"),
    ];

    expect(cards[0]).toBeInTheDocument();
    expect(cards[1]).toBeInTheDocument();
  });

  it("should list district for each member who has one", () => {
    render(<Details members={mockMembers} resetDistrict={mockFn} />);
    const result = screen.getByText(/district: 3/i);
    const result2 = screen.queryByText(/district: 4/i);

    expect(result).not.toBeNull();
    expect(result2).toBeNull();
  });
});
