import LinkButton from "@/shared/components/LinkButton";
import { getLogEditMarginTop } from "@/shared/utils/responsive";
import { t } from "@/shared/utils/translation";
import useColors from "@/shared/hooks/useColors";
import { LogItem, SLEEP_QUALITY_KEYS } from "@/features/logging/hooks/useLogs";
import { useTemporaryLog } from "@/features/logging/hooks/useTemporaryLog";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SlideHeadline } from "../SlideHeadline";
import { Footer } from "./Footer";
import { SlideSleepButton } from "./SlideSleepButton";

export const SlideSleep = ({
  onChange,
  showDisable,
  onDisableStep,
}: {
  onChange: (rating: LogItem['rating']) => void;
  showDisable: boolean;
  onDisableStep: () => void;
}) => {
  const colors = useColors();
  const tempLog = useTemporaryLog();
  const insets = useSafeAreaInsets();

  const marginTop = getLogEditMarginTop()

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.backgroundSecondary,
      width: '100%',
      position: 'relative',
      paddingHorizontal: 20,
      paddingBottom: insets.bottom + 20,
    }}>
      <View
        style={{
          flex: 1,
          marginTop,
        }}
      >
        <SlideHeadline
          style={{
          }}
        >{t('log_sleep_question')}</SlideHeadline>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 32,
          }}
        >
          {SLEEP_QUALITY_KEYS.slice().reverse().map((key, index) => (
            <SlideSleepButton
              key={key}
              value={key}
              selected={tempLog?.data?.sleep?.quality === key}
              onPress={() => {
                onChange(key)
              }}
            />
          ))}
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            marginTop: 8,
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: colors.textSecondary,
                textAlign: 'center',
                flex: 5,
              }}
            >{t('logger_step_sleep_low')}</Text>
            <View style={{ flex: 5 }} />
            <View style={{ flex: 5 }} />
            <View style={{ flex: 5 }} />
            <Text
              style={{
                fontSize: 14,
                color: colors.textSecondary,
                textAlign: 'center',
                flex: 5,
              }}
            >{t('logger_step_sleep_high')}</Text>
          </View>
        </View>
        <Footer>
          {showDisable && (
            <LinkButton
              type="secondary"
              onPress={onDisableStep}
              style={{
                fontWeight: '400',
              }}
            >{t('log_sleep_disable')}</LinkButton>
          )}
        </Footer>
      </View>
    </View>
  )
}