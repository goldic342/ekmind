import { EmotionIndicator } from '@/components/Logger/slides/SlideEmotions/EmotionsIndicator';
import useColors from '@/shared/hooks/useColors';
import { t } from 'i18n-js';
import { Text, View } from 'react-native';

export const EmotionItem = ({
  emotion,
}: {
  emotion: any;
}) => {
  const colors = useColors();

  return (
    <View>
      <View
        style={{
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 8,
          backgroundColor: colors.surfaceMuted,
          borderWidth: 1,
          borderColor: colors.borderStrong,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <EmotionIndicator category={emotion.category} />
        <Text
          style={{
            color: colors.text,
            fontSize: 17,
          }}
        >{t(`log_emotion_${emotion.key}`)}</Text>
      </View>
    </View>
  );
};
