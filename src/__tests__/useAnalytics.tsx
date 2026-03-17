import { renderHook } from "@testing-library/react-hooks";
import { AnalyticsProvider, useAnalytics } from "@/shared/hooks/useAnalytics";

const wrapper = ({ children }) => (
  <AnalyticsProvider>{children}</AnalyticsProvider>
);

describe("useAnalytics()", () => {
  test("returns disabled no-op analytics state", () => {
    const { result } = renderHook(() => useAnalytics(), { wrapper });

    expect(result.current.isEnabled).toBe(false);
    expect(result.current.isIdentified).toBe(true);
    expect(() => result.current.track('event')).not.toThrow();
    expect(() => result.current.identify()).not.toThrow();
    expect(() => result.current.enable()).not.toThrow();
    expect(() => result.current.disable()).not.toThrow();
    expect(() => result.current.reset()).not.toThrow();
  });
});
