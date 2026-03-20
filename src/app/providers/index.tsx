import { SafeAreaProvider } from "react-native-safe-area-context"
import { CalendarFiltersProvider } from "@/features/calendar/hooks/useCalendarFilters"
import { LogsProvider } from "@/features/logging/hooks/useLogs"
import { SettingsProvider } from "@/features/settings/hooks/useSettings"
import { StatisticsProvider } from "@/features/statistics/hooks/useStatistics"
import { TagsProvider } from "@/features/tags/hooks/useTags"
import { TemporaryLogProvider } from "@/features/logging/hooks/useTemporaryLog"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaProvider>
      <SettingsProvider>
        {/* <PasscodeProvider> */}
        <LogsProvider>
          <TagsProvider>
            <TemporaryLogProvider>
              <CalendarFiltersProvider>
                <StatisticsProvider>{children}</StatisticsProvider>
              </CalendarFiltersProvider>
            </TemporaryLogProvider>
          </TagsProvider>
        </LogsProvider>
        {/* </PasscodeProvider> */}
      </SettingsProvider>
    </SafeAreaProvider>
  )
}

export default Providers
