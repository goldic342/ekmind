import { View } from "react-native"
import { Card } from "@/features/statistics/components/Statistics/Card"
import { t } from "@/shared/utils/translation"
import useScale from "@/shared/hooks/useScale"
import { MoodAvgData } from "@/features/statistics/hooks/useStatistics/MoodAvg"

export const MoodAvgCard = ({ data }: { data: MoodAvgData }) => {
  const scale = useScale()

  return (
    <Card
      subtitle={t("mood")}
      title={t("statistics_mood_avg_title", {
        rating_word: t(`statistics_mood_avg_${data.ratingHighestKey}`),
        rating_percentage: data.ratingHighestPercentage
      })}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 8,
          overflow: "hidden",
          borderRadius: 4
        }}
      >
        {data.distribution.map(item => {
          return (
            <View
              key={item.key}
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: scale.colors[item.key].background,
                flexBasis: `${(item.count / data.itemsCount) * 100}%`,
                height: 24
              }}
            />
          )
        })}
      </View>
    </Card>
  )
}
