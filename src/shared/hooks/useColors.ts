import { useTheme } from "@react-navigation/native"
import { IColors } from "@/shared/constants/Colors"

export default function useColors(): IColors {
  const { colors } = useTheme() as any
  return colors
}
