import useColors from '@/shared/hooks/useColors';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import { useEffect } from 'react';
import { Platform, View, useColorScheme } from 'react-native';
import { RootStackParamList } from '@/types';
import {
  ColorsScreen,
  DataScreen,
  LogList,
  LicensesScreen,
  LogCreate,
  LogEdit,
  NotFoundScreen,
  PrivacyScreen,
  ReminderScreen, SettingsScreen, StatisticsHighlights, TagCreate, TagEdit, SettingsTags, SettingsTagsArchive
} from '@/app/navigation/screens';

import Providers from '@/app/providers';
import { buildTheme } from '@/shared/constants/Colors';
import { initializeDayjs, t } from '@/shared/utils/translation';
import { useSettings } from '@/features/settings/hooks/useSettings';
import dayjs from 'dayjs';
import { enableScreens } from 'react-native-screens';
import { DevelopmentTools } from '@/app/navigation/screens/DevelopmentTools';
import { Onboarding } from '@/features/onboarding/screens/Onboarding';
import { StatisticsMonthScreen } from '@/features/statistics/screens/StatisticsMonth';
import { StatisticsYearScreen } from '@/features/statistics/screens/StatisticsYear';
import { StepsScreen } from '@/app/navigation/screens/Steps';
import { Tags } from '@/features/tags/screens/Tags';
import { BackButton } from './BackButton';
import { BottomTabs } from './BottomTabs';

import { useMaterial3Theme } from "@pchmn/expo-material3-theme"

enableScreens();

const NAVIGATION_LINKING = {
  prefixes: [
    'ekmind://',
    Linking.createURL('/'),
  ],
  config: {
    screens: {
      Calendar: 'calendar',
      Onboarding: 'onboarding',

      Settings: 'settings',
      Colors: 'settings/colors',
      Licenses: 'settings/licenses',
      Steps: 'settings/steps',
      Data: 'settings/data',
      Reminder: 'settings/reminder',
      Privacy: 'settings/privacy',
      DevelopmentTools: 'settings/development-tools',
      // PasscodeLocked: 'passcode-locked',;
      // Tags: 'settings/tags',;
      Statistics: 'statistics',
      StatisticsHighlights: 'statistics/highlights',
      StatisticsMonth: 'statistics/month/:date',
      StatisticsYear: 'statistics/year/:date',
      LogList: 'days/:date',
      LogCreate: 'logs/create/:dateTime',
      LogEdit: 'logs/:id/edit',

      Tags: 'tags',
      TagEdit: 'tags/:id',
      TagCreate: 'tags/create',
    },
  },
};

export default function Navigation() {
  return (
    <Providers>
      <NavigationWithTheme />
    </Providers>
  );
}

function NavigationWithTheme() {
  const systemScheme = useColorScheme();
  const { theme: dynamic } = useMaterial3Theme();
  const { settings } = useSettings();

  const resolvedScheme = settings.themeMode === 'auto'
    ? (systemScheme === 'dark' ? 'dark' : 'light')
    : settings.themeMode;

  return (
    <NavigationContainer
      linking={NAVIGATION_LINKING}
      // @ts-ignore
      theme={{
        fonts: {
          regular: { fontWeight: '400', fontFamily: Platform.select({ ios: 'System', default: 'sans-serif' }) },
          medium: { fontWeight: '500', fontFamily: Platform.select({ ios: 'System', default: 'sans-serif' }) },
          bold: { fontWeight: '700', fontFamily: Platform.select({ ios: 'System', default: 'sans-serif' }) },
          heavy: { fontWeight: '800', fontFamily: Platform.select({ ios: 'System', default: 'sans-serif' }) },
        },
        dark: resolvedScheme === 'dark',
        colors: buildTheme({
          scheme: resolvedScheme,
          materialColors: Platform.OS === 'android' && settings.androidColorScheme === 'materialYou'
            ? (resolvedScheme === 'dark' ? dynamic.dark : dynamic.light)
            : undefined,
        }),
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const colors = useColors();
  const { settings, hasActionDone } = useSettings()
  const navigation = useNavigation()
  // const passcode = usePasscode()

  const defaultOptions = {
    headerTintColor: colors.text,
    headerStyle: {
      backgroundColor: colors.background,
    },
    headerShadowVisible: Platform.OS !== 'web',
  }

  useEffect(() => {
    if (settings.loaded && !hasActionDone('onboarding')) {
      navigation.navigate('Onboarding')
    }

    initializeDayjs();
  }, [settings.loaded])


  const defaultPageOptions = {
    headerLeft: () => Platform.OS === 'ios' ? null : <BackButton testID={'settings-back-button'} />
  }

  // if(passcode.isEnabled === null) return null;

  return (

    // (passcode.isEnabled && !passcode.isAuthenticated) ? (
    //   <Stack.Navigator
    //     screenOptions={{
    //       animation: 'none'
    //     }}
    //   >
    //     <Stack.Screen 
    //       options={{ headerShown: false }} 
    //       name="PasscodeLocked" 
    //       component={PasscodeLocked} 
    //     />
    //   </Stack.Navigator>
    // ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <Stack.Navigator
        initialRouteName="tabs"
        screenOptions={{
          navigationBarColor: colors.tabsBackground,
        }}
      >
        <Stack.Screen
          name="tabs"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />

        <Stack.Group
          screenOptions={{
            title: '',
            presentation: 'modal',
            gestureEnabled: false,
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="LogCreate"
            component={LogCreate}
          />
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            title: '',
            presentation: 'modal',
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="LogList"
            component={LogList}
          />
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            title: '',
            presentation: 'modal',
            gestureEnabled: false,
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="LogEdit"
            component={LogEdit}
          />
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            title: '',
            presentation: 'modal',
            gestureEnabled: false,
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
          />
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            presentation: 'formSheet',
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Tags"
            component={Tags}
          />
          <Stack.Screen
            name="TagCreate"
            component={TagCreate}
          />
          <Stack.Screen
            name="TagEdit"
            component={TagEdit}
          />
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            ...defaultOptions,
            headerBackTitle: '',
          }}
        >
          <Stack.Screen
            name="StatisticsHighlights"
            component={StatisticsHighlights}
            options={{
              title: t('statistics_highlights'),
              ...defaultPageOptions,
            }}
          />
          <Stack.Screen
            name="StatisticsYear"
            component={StatisticsYearScreen}
            options={{
              title: dayjs().format('YYYY'),
              headerShown: false,
              ...defaultPageOptions,
            }}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            ...defaultOptions,
            headerBackTitle: '',
          }}
        >
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: t('settings'),
              ...defaultPageOptions,
            }}
          />
          <Stack.Screen
            name="StatisticsMonth"
            component={StatisticsMonthScreen}
            options={{
              title: t('month_report'),
              headerShown: false,
              ...defaultPageOptions,
            }}
          />
          <Stack.Screen
            name="Reminder"
            component={ReminderScreen}
            options={{
              title: t('reminder'),
              ...defaultPageOptions,
            }}
          />
          <Stack.Screen
            name="Privacy"
            component={PrivacyScreen}
            options={{
              title: t('privacy'),
              ...defaultPageOptions,
            }}
          />
          <Stack.Screen
            name="Licenses"
            component={LicensesScreen}
            options={{
              title: t('licenses'),
              ...defaultPageOptions,
            }}
          />
          <Stack.Screen
            name="Colors"
            component={ColorsScreen}
            options={{
              title: t('colors'),
              ...defaultPageOptions,
            }}
          />
          <Stack.Screen
            name="SettingsTags"
            component={SettingsTags}
            options={{
              title: t('tags'),
              ...defaultPageOptions,
            }}
          />
          <Stack.Screen
            name="SettingsTagsArchive"
            component={SettingsTagsArchive}
            options={{
              title: t('archive_tag'),
              ...defaultPageOptions,
            }}
          />
          <Stack.Screen
            name="Steps"
            component={StepsScreen}
            options={{
              title: t('steps'),
              ...defaultPageOptions,
            }}
          />
          <Stack.Screen
            name="Data"
            component={DataScreen}
            options={{
              title: t('data'),
              ...defaultPageOptions,
            }}
          />
          <Stack.Screen
            name="DevelopmentTools"
            component={DevelopmentTools}
            options={{
              title: t('settings_development_statistics'),
              ...defaultPageOptions,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </View>
    // )
  );
}
