import { getLogEditMarginTop } from "@/shared/utils/responsive";
import { t } from "@/shared/utils/translation";
import useColors from "@/shared/hooks/useColors";
import { useTagsState } from "@/features/tags/hooks/useTags";
import { useTemporaryLog } from "@/features/logging/hooks/useTemporaryLog";
import { TagReference } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LinkButton from "@/shared/components/LinkButton";
import { MiniButton } from "@/shared/components/MiniButton";
import Tag from "@/shared/components/Tag";
import { SlideHeadline } from "../SlideHeadline";
import { Footer } from "./Footer";

export const SlideTags = ({
  onChange,
  onDisableStep = () => { },
  showDisable,
  showFooter = true,
}: {
  onChange: (tags: TagReference[]) => void,
  onDisableStep?: () => void
  showDisable: boolean
  showFooter?: boolean
}) => {
  const tempLog = useTemporaryLog();
  const navigation = useNavigation()
  const insets = useSafeAreaInsets();
  const colors = useColors()
  const { tags } = useTagsState()

  let _tags =
    tags.filter(t => {
      const inTempLog = tempLog?.data?.tags?.map(d => d.id).includes(t.id)

      return (
        (!inTempLog && !t.isArchived) ||
        (inTempLog && t.isArchived) ||
        (inTempLog && !t.isArchived)
      )
    })

  const marginTop = getLogEditMarginTop()

  return (
    <View style={{
      flex: 1,
      width: '100%',
      paddingHorizontal: 20,
      paddingBottom: insets.bottom + 20,
      marginTop,
    }}>
      <SlideHeadline>{t('log_tags_question')}</SlideHeadline>
      <View
        style={{
          position: 'relative',
          flex: 1,
        }}
      >
        <LinearGradient
          pointerEvents="none"
          colors={[colors.backgroundSecondary, colors.logBackgroundTransparent]}
          style={{
            position: 'absolute',
            height: 24,
            top: 0,
            zIndex: 1,
            width: '100%',
          }}
        />
        <LinearGradient
          colors={[colors.logBackgroundTransparent, colors.backgroundSecondary]}
          style={{
            position: 'absolute',
            height: 32,
            bottom: 0,
            zIndex: 1,
            width: '100%',
          }}
          pointerEvents="none"
        />
        <ScrollView
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: 24,
              paddingBottom: insets.bottom,
            }}
          >
            {_tags?.map(tag => {
              return (
                <Tag
                  onPress={async () => {
                    const newTags = tempLog?.data?.tags?.map(d => d.id).includes(tag.id) ?
                      tempLog?.data?.tags.filter(t => t.id !== tag.id) :
                      [...tempLog?.data.tags || [], tag]
                    onChange(newTags)
                  }}
                  title={tag.title}
                  colorName={tag.color}
                  selected={tempLog?.data?.tags?.map(d => d.id).includes(tag.id)}
                  key={tag.id}
                />
              )
            })}
            <View>
              <MiniButton
                onPress={() => {
                  navigation.navigate('Tags')
                }}
              >{t('tags_edit')}</MiniButton>
            </View>
          </View>
        </ScrollView>
      </View>
      {showFooter && (
        <Footer>
          {showDisable && (
            <LinkButton
              type="secondary"
              onPress={onDisableStep}
              style={{
                fontWeight: '400',
              }}
            >{t('log_tags_disable')}</LinkButton>
          )}
        </Footer>
      )}
    </View>
  )
}