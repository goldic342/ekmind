import { View } from "react-native"
import { RATING_KEYS } from "@/features/logging/hooks/useLogs"
import useScale from "@/shared/hooks/useScale"

export const Bar = ({ height, ratingName }) => {
  const scale = useScale()

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "flex-end",
        flex: RATING_KEYS.length,
        marginHorizontal: 2
      }}
    >
      <View
        style={{
          height,
          width: "100%",
          backgroundColor: scale.colors[ratingName].background,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4
        }}
      />
    </View>
  )
}
