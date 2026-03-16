import { IScale } from '@/shared/constants/Colors/scales';
import useColors from "./useColors";
import { RATING_KEYS } from "@/features/logging/hooks/useLogs";
import { SettingsState, useSettings } from "@/features/settings/hooks/useSettings";

export default function useScale(
  type?: SettingsState['scaleType']
) {
  const colors = useColors()
  const { settings } = useSettings()

  const _type = type || settings.scaleType

  const scaleColors = {} as IScale
  RATING_KEYS.forEach((label, index) => {
    scaleColors[label] = colors.scales[_type][label]
  })

  return {
    colors: scaleColors,
    labels: RATING_KEYS
  }
}
