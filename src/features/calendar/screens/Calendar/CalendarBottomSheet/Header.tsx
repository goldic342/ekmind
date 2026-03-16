import { Text, View } from "react-native"
import LinkButton from "@/shared/ui/LinkButton"
import { t } from "@/shared/utils/translation"
import { useCalendarFilters } from "@/features/calendar/hooks/useCalendarFilters"
import useColors from "@/shared/hooks/useColors"

export const Header = () => {
  const calendarFilters = useCalendarFilters()
  const colors = useColors()

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 8,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        backgroundColor: colors.surface,
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
      }}
    >
      <Text
        style={{
          flex: 1,
          fontSize: 20,
          fontWeight: 'bold',
          color: colors.text,
        }}
      >{t('calendar_filters')}</Text>
      <View
        style={{
          flexWrap: 'wrap',
        }}
      >
        <LinkButton
          disabled={!calendarFilters.data.isFiltering}
          type='primary'
          style={{
            paddingLeft: 8,
            paddingRight: 8,
            justifyContent: 'flex-end',
          }}
          onPress={() => {
            calendarFilters.set({
              ...calendarFilters.data,
              tagIds: [],
              ratings: [],
              text: '',
            })
          }}
        >{t('calendar_filters_reset')}</LinkButton>
      </View>
    </View>
  )
}