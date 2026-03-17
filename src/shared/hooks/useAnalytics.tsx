import { createContext, useContext, useMemo } from "react";

interface AnaylticsState {
  enable: () => void;
  disable: () => void;
  reset: () => void;
  track: (_event: string, _properties?: any) => void;
  identify: (_properties?: {}) => void;
  isIdentified: boolean;
  isEnabled: boolean;
}

const noop = () => {};

const AnalyticsContext = createContext<AnaylticsState>({
  enable: noop,
  disable: noop,
  reset: noop,
  track: noop,
  identify: noop,
  isIdentified: true,
  isEnabled: false,
});

function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo(
    () => ({
      enable: noop,
      disable: noop,
      reset: noop,
      track: noop,
      identify: noop,
      isIdentified: true,
      isEnabled: false,
    }),
    []
  );

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}

function useAnalytics(): AnaylticsState {
  return useContext(AnalyticsContext);
}

export { AnalyticsProvider, useAnalytics };
