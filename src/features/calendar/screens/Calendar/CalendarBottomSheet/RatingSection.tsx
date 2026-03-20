import { View } from "react-native"
import Scale from "@/shared/ui/inputs/Scale"
import TextHeadline from "@/shared/ui/TextHeadline"
import { t } from "@/shared/utils/translation"
import { LogItem } from "@/features/logging/hooks/useLogs"
import { useSettings } from "@/features/settings/hooks/useSettings"

export const RatingSection = ({
  value,
  onChange
}: {
  value: LogItem["rating"][]
  onChange: (value: LogItem["rating"]) => void
}) => {
  const { settings } = useSettings()

  return (
    <View
      style={{
        marginBottom: 16
      }}
    >
      <TextHeadline style={{ marginBottom: 12 }}>{t("mood")}</TextHeadline>
      <Scale value={value} onPress={onChange} type={settings.scaleType} />
    </View>
  )
}
