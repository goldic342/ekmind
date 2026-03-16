import { useCallback, useEffect, useState } from 'react';
import { Platform, ScrollView, Text, View } from 'react-native';
import MenuListHeadline from '@/components/MenuListHeadline';
import TextInfo from '@/components/TextInfo';
import { t } from '@/helpers/translation';
import { useAnalytics } from '../../hooks/useAnalytics';
import useColors from '../../hooks/useColors';
import { useSettings } from '../../hooks/useSettings';
import { Radio } from './Radio';
import { Scale } from './Scale';
import { PageWithHeaderLayout } from '@/components/PageWithHeaderLayout';

export const ColorsScreen = () => {
  const { setSettings, settings } = useSettings()
  const colors = useColors()
  const analytics = useAnalytics()

  const [scaleType, setScaleType] = useState(settings.scaleType)
  const [themeMode, setThemeMode] = useState(settings.themeMode)
  const [androidColorScheme, setAndroidColorScheme] = useState(settings.androidColorScheme)

  const typesNames = [{
    id: `ColorBrew-RdYlGn`,
    disabled: false,
  }, {
    id: `ColorBrew-PuOr`,
    disabled: true,
  }, {
    id: `ColorBrew-BrBG`,
    disabled: true,
  }, {
    id: `ColorBrew-RdYG`,
    disabled: false,
  }, {
    id: `ColorBrew-RdYlGn-old`,
    disabled: false,
  }]

  useEffect(() => {
    setSettings(settings => ({ ...settings, scaleType }))
    analytics.track('colors_scale_changed', { scaleType })
  }, [scaleType])

  useEffect(() => {
    setSettings(settings => ({ ...settings, themeMode }))
    analytics.track('theme_mode_changed', { themeMode })
  }, [themeMode])

  useEffect(() => {
    setSettings(settings => ({ ...settings, androidColorScheme }))
    analytics.track('android_color_scheme_changed', { androidColorScheme })
  }, [androidColorScheme])

  const onSelect = useCallback((id) => {
    setScaleType(id)
  }, [])

  const onThemeModeSelect = useCallback((id) => {
    setThemeMode(id)
  }, [])

  const onAndroidColorSchemeSelect = useCallback((id) => {
    setAndroidColorScheme(id)
  }, [])

  return (
    <PageWithHeaderLayout style={{
      flex: 1,
      backgroundColor: colors.background,
    }}>
      <ScrollView
        style={{
          padding: 20,
        }}
      >

        <MenuListHeadline>{t('theme')}</MenuListHeadline>
        <Radio
          isSelected={themeMode === 'auto'}
          onPress={() => onThemeModeSelect('auto')}
        >
          <Text style={{ color: colors.text }}>{t('theme_auto')}</Text>
        </Radio>
        <Radio
          isSelected={themeMode === 'light'}
          onPress={() => onThemeModeSelect('light')}
        >
          <Text style={{ color: colors.text }}>{t('theme_light')}</Text>
        </Radio>
        <Radio
          isSelected={themeMode === 'dark'}
          onPress={() => onThemeModeSelect('dark')}
        >
          <Text style={{ color: colors.text }}>{t('theme_dark')}</Text>
        </Radio>

        {Platform.OS === 'android' && (
          <>
            <MenuListHeadline>{t('android_color_style')}</MenuListHeadline>
            <Radio
              isSelected={androidColorScheme === 'materialYou'}
              onPress={() => onAndroidColorSchemeSelect('materialYou')}
            >
              <Text style={{ color: colors.text }}>{t('android_color_style_material_you')}</Text>
            </Radio>
            <Radio
              isSelected={androidColorScheme === 'basic'}
              onPress={() => onAndroidColorSchemeSelect('basic')}
            >
              <Text style={{ color: colors.text }}>{t('android_color_style_basic')}</Text>
            </Radio>
          </>
        )}

        <MenuListHeadline>{t('colors')}</MenuListHeadline>
        {typesNames.filter(d => !d.disabled).map(type => (
          <>
            <Radio
              key={type.id}
              isSelected={type.id === scaleType}
              onPress={() => onSelect(type.id)}
              isDisabled={type.disabled}
            >
              <Scale type={type.id} />
            </Radio>
            {type.id === 'ColorBrew-RdYlGn-old' && (
              <TextInfo
                style={{
                  marginTop: 0,
                }}
              >{t('colorblind_disclaimer')}</TextInfo>
            )}
          </>
        )
        )}
        <MenuListHeadline>Coming Soon…</MenuListHeadline>
        <View
          style={{
          }}
        >
          {typesNames.filter(d => d.disabled).map(type => (
            <Radio
              key={type.id}
              isSelected={type.id === scaleType}
              onPress={() => onSelect(type.id)}
              isDisabled={type.disabled}
            >
              <Scale type={type.id} />
            </Radio>
          ))}
        </View>
        <View
          style={{
            marginBottom: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
        </View>
      </ScrollView>
    </PageWithHeaderLayout>
  );
}
