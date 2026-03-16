import Button from "@/shared/components/Button";
import { t } from "@/shared/utils/translation";
import useColors from "@/shared/hooks/useColors";
import { useLogState } from "@/features/logging/hooks/useLogs";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import React from "react";
import { View } from "react-native";
import { PlusCircle } from "react-native-feather";
import { PromoCards } from "./PromoCards";
import { FeedbackBox } from '@/features/logging/screens/LogList/FeedbackBox';
import { Armchair, Bot } from "lucide-react-native";
import { IS_PROD } from "@/shared/constants/Config";

export const CalendarFooter = () => {
  const colors = useColors();
  const logState = useLogState();
  const navigation = useNavigation();

  const hasTodayItem = logState.items.find(item => {
    return dayjs(item.dateTime).isSame(dayjs(), 'day');
  });

  return (
    <View
      style={{}}
    >
      <View
        style={{
          marginTop: 24,
        }}
      >
        <View
          style={{
          }}
        >
          {!hasTodayItem ? (
            <Button
              icon={<PlusCircle width={24} height={24} color={colors.primaryButtonText} />}
              onPress={() => {
                navigation.navigate("LogCreate", {
                  dateTime: dayjs().toISOString(),
                });
              }}
            >{t('add_today_entry')}</Button>
          ) : (
            <Button
              icon={<PlusCircle width={24} height={24} color={colors.tertiaryButtonText} />}
              type="tertiary"
              onPress={() => {
                navigation.navigate("LogCreate", {
                  dateTime: dayjs().toISOString(),
                });
              }}
            >{t('add_today_another_entry')}</Button>
          )}

        </View>
      </View>
      <PromoCards />
    </View>
  );
};
