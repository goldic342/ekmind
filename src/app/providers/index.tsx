import { PostHogProvider } from "posthog-react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { POSTHOG_API_KEY } from "@/shared/constants/API";
import { TRACKING_ENABLED } from "@/shared/constants/Config";
import { AnalyticsProvider } from "@/shared/hooks/useAnalytics";
import { CalendarFiltersProvider } from "@/features/calendar/hooks/useCalendarFilters";
import { LogsProvider } from "@/features/logging/hooks/useLogs";
import { SettingsProvider } from "@/features/settings/hooks/useSettings";
import { StatisticsProvider } from "@/features/statistics/hooks/useStatistics";
import { TagsProvider } from "@/features/tags/hooks/useTags";
import { TemporaryLogProvider } from "@/features/logging/hooks/useTemporaryLog";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaProvider>
      <SettingsProvider>
        {/* <PasscodeProvider> */}
        <PostHogProvider
          apiKey={POSTHOG_API_KEY}
          options={{
            host: "https://app.posthog.com",
            enable: TRACKING_ENABLED,
          }}
          autocapture={{
            captureTouches: false,
            captureLifecycleEvents: TRACKING_ENABLED,
            captureScreens: TRACKING_ENABLED,
          }}
        >
          <AnalyticsProvider options={{ enabled: TRACKING_ENABLED }}>
            <LogsProvider>
              <TagsProvider>
                <TemporaryLogProvider>
                  <CalendarFiltersProvider>
                    <StatisticsProvider>{children}</StatisticsProvider>
                  </CalendarFiltersProvider>
                </TemporaryLogProvider>
              </TagsProvider>
            </LogsProvider>
          </AnalyticsProvider>
        </PostHogProvider>
        {/* </PasscodeProvider> */}
      </SettingsProvider>
    </SafeAreaProvider>
  );
};

export default Providers;
