import useColors from '@/shared/hooks/useColors';
import { LogItem } from '@/features/logging/hooks/useLogs';
import { useSettings } from '@/features/settings/hooks/useSettings';
import { View } from 'react-native';

export const RatingDot = ({
  rating,
}: {
  rating: LogItem['rating'];
}) => {
  const colors = useColors();
  const { settings } = useSettings();

  const backgroundColor = colors.scales[settings.scaleType][rating].background;

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        borderRadius: 6,
        backgroundColor: backgroundColor,
        width: 32,
        aspectRatio: 1,
      }}
    />
  )

};
