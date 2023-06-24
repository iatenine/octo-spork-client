import { renderHook } from "@testing-library/react";
import { useDetails } from "../../hooks/useDetails";
import { act } from "react-dom/test-utils";

describe("useDetails Hook Test Suite", () => {
  it("should render", () => {
    const { result } = renderHook(() => useDetails());
    expect(result.current.getBorder).toBeInstanceOf(Function);
  });

  it("should return strings with 'border' regardless of input", () => {
    const { getBorder } = renderHook(() => useDetails()).result.current;
    let result: string = "";
    act(() => {
      result = getBorder("Senator");
    });

    expect(result).toBe("border border-5 border-warning");
  });

  it("should default to senator", () => {
    const { getBorder } = renderHook(() => useDetails()).result.current;
    let result: string = "";
    let result2: string = "";
    act(() => {
      result = getBorder("");
      result2 = getBorder("senator");
    });

    expect(result2).toBe(result);
  });

  it("should have a secondary border for representatives", () => {
    const { getBorder } = renderHook(() => useDetails()).result.current;
    let result: string = "";
    act(() => {
      result = getBorder("representative");
    });

    expect(result).toBe("border border-5 border-secondary");
  });

  it("should have a secondary border for delegates", () => {
    const { getBorder } = renderHook(() => useDetails()).result.current;
    let result: string = "";
    act(() => {
      result = getBorder("delegate");
    });

    expect(result).toBe("border border-5 border-secondary");
  });

  it("should be case insensitive", () => {
    const { getBorder } = renderHook(() => useDetails()).result.current;
    let result: string = "";
    act(() => {
      result = getBorder("dELegAte");
    });

    expect(result).toBe("border border-5 border-secondary");
  });
});
