import { TAG_COLOR_NAMES } from '../Config';
import { palette } from './palette';
import scales from './scales';
import { buildButtonTheme } from './components/buttons';
import { buildInputTheme } from './components/inputs';
import { buildCardTheme } from './components/cards';
import { buildTabsTheme } from './components/tabs';
import { darkSemanticColors } from './semantic/dark';
import { lightSemanticColors, type SemanticColors } from './semantic/light';
import { buildMaterialYouSemanticColors } from './semantic/materialYou';

type TagColorKey = typeof TAG_COLOR_NAMES[number];

type TagColors = {
  [tag: TagColorKey]: {
    title: string;
    dot: string;
    background: string;
    text: string;
    border: string;
  }
}

const buildTagColors = (scheme: 'light' | 'dark'): TagColors => {
  const tags = {} as TagColors;

  TAG_COLOR_NAMES.forEach(color => {
    tags[color] = scheme === 'dark' ? {
      title: color,
      dot: palette[color]['500'],
      background: palette[color]['700'],
      text: palette[color]['200'],
      border: palette[color]['600'],
    } : {
      title: color,
      dot: palette[color]['400'],
      background: palette[color]['200'],
      text: palette[color]['700'],
      border: palette[color]['400'],
    };
  });

  return tags;
};

const buildBaseTheme = (c: SemanticColors, scheme: 'light' | 'dark') => ({
  text: c.text,
  textSecondary: c.textSecondary,
  background: c.background,
  backgroundSecondary: c.backgroundSecondary,
  link: c.primary,
  tint: c.primary,
  primary: c.primary,
  card: c.surface,
  border: c.border,
  notification: c.surface,

  loadingIndicator: scheme === 'dark' ? '#fff' : palette.neutral[500],

  keyboardToolbarIcon: palette.neutral[500],
  keyboardToolbarBackground: palette.neutral[200],

  logHeaderBackground: c.surface,
  logHeaderBorder: c.border,
  logHeaderText: scheme === 'dark' ? palette.neutral[300] : palette.neutral[600],
  logHeaderHighlight: c.border,

  logBackground: c.backgroundSecondary,
  logBackgroundTransparent: scheme === 'dark' ? 'rgba(23, 23, 23, 0)' : 'rgba(245,245,245, 0)',

  logCardBackground: c.surfaceMuted,
  logCardBackgroundTransparent: scheme === 'dark' ? 'rgba(38,38,38,0)' : 'rgba(255,255,255, 0)',
  logCardBorder: c.borderStrong,

  logActionBackground: c.surfaceMuted,
  logActionBorder: c.primary,
  logActionText: c.textSecondary,

  tagBackground: c.surface,
  tagText: scheme === 'dark' ? palette.neutral[200] : palette.neutral[800],
  tagBorder: c.surface,
  tagBackgroundActive: c.primarySoft,
  tagTextActive: c.primary,
  tagBorderActive: c.primary,

  stepperBackground: c.surfaceMuted,
  stepperBackgroundActive: scheme === 'dark' ? palette.neutral[600] : palette.neutral[700],

  bottomSheetHeaderBackground: c.surface,
  bottomSheetBackground: c.backgroundSecondary,
  bottomSheetHeaderBorder: c.border,
  bottomSheetHandle: 'rgba(255, 255, 255, 0.5)',

  feedbackSelectionBackground: c.surfaceMuted,
  feedbackSelectionText: c.text,
  feedbackBackground: c.backgroundSecondary,

  headerBorder: c.borderStrong,

  passcodeDotBackground: scheme === 'dark' ? palette.neutral[600] : palette.neutral[300],
  passcodePadBackground: c.surfaceMuted,
  passcodePadBackgroundActive: scheme === 'dark' ? palette.neutral[700] : palette.neutral[400],

  menuListItemBackground: c.surface,
  menuListItemText: c.text,
  menuListItemIcon: c.text,
  menuListItemBorder: c.border,

  notificationBackground: c.surface,

  calendarBackground: c.background,
  calendarItemBackground: c.surface,
  calendarItemBackgroundFuture: c.background,
  calendarItemTextColor: c.textSecondary,
  calendarWeekNameColor: c.muted,
  calendarMonthNameColor: c.muted,

  tagErrorBackground: c.dangerSoft,
  tagErrorText: scheme === 'dark' ? '#FECDD3' : palette.red[800],
  tagSuccessBackground: c.successSoft,
  tagSuccessText: c.success,

  statisticsBackground: c.background,
  statisticsDescription: c.textSecondary,
  statisticsCardBackground: c.surface,
  statisticsCardSubtitle: scheme === 'dark' ? palette.neutral[400] : c.textSecondary,
  statisticsFeedbackEmojiOpacity: scheme === 'dark' ? 0.6 : 1,
  statisticsFeedbackEmojiBackground: c.backgroundSecondary,
  statisticsFeedbackBorder: c.border,
  statisticsFeedbackText: c.textSecondary,
  statisticsWeekdayText: c.muted,
  statisticsWeekdayBorder: c.border,
  statisticsCalendarDotBackground: c.surfaceMuted,
  statisticsCalendarDotText: scheme === 'dark' ? palette.neutral[600] : c.textSecondary,
  statisticsCalendarDotBorder: c.borderStrong,
  statisticsNoDataBorder: c.borderStrong,
  statisticsNoDataText: scheme === 'dark' ? palette.neutral[700] : c.textSecondary,

  statisticsLinePrimary: scheme === 'dark' ? palette.white : palette.neutral[400],
  statisticsLineMuted: scheme === 'dark' ? palette.neutral[500] : palette.neutral[300],
  statisticsLineHighlight: c.primary,
  statisticsLegendText: scheme === 'dark' ? palette.neutral[600] : c.muted,
  statisticsGridLine: c.border,

  statisticsNotEnoughDataTitle: c.text,
  statisticsNotEnoughDataSubtitle: c.textSecondary,
  statisticsNotEnoughDataBackdrop: c.overlay,

  statisticsTagsTrendMutedBackground: c.surfaceMuted,
  statisticsTagsTrendMutedText: scheme === 'dark' ? palette.neutral[500] : palette.neutral[800],

  yearPixelsEmptyDot: c.surfaceMuted,
  yearPixelsLegendText: c.muted,

  onboardingTitle: c.text,
  onboardingBody: scheme === 'dark' ? palette.neutral[300] : palette.neutral[700],

  onboardingTopBackground: scheme === 'dark' ? palette.neutral[900] : palette.neutral[900],
  onboardingBottomBackground: scheme === 'dark' ? palette.neutral[800] : palette.neutral[100],
  onboardingBottomBorder: scheme === 'dark' ? palette.neutral[700] : palette.neutral[300],
  onboardingPaginationText: scheme === 'dark' ? palette.neutral[300] : palette.neutral[500],
  onboardingPaginationDotActive: scheme === 'dark' ? palette.neutral[300] : palette.neutral[500],
  onboardingPaginationDotInactive: scheme === 'dark' ? palette.neutral[700] : palette.neutral[300],

  onboardingListItemDot: scheme === 'dark' ? palette.neutral[700] : palette.neutral[500],
  onboardingListItemText: scheme === 'dark' ? palette.neutral[300] : palette.neutral[700],

  onboardingPrivacyBadgeBackground: scheme === 'dark' ? palette.white : palette.black,
  onboardingPrivacyBadgeVector: scheme === 'dark' ? palette.neutral[900] : palette.white,

  sharingLogoBackground: scheme === 'dark' ? palette.neutral[800] : palette.white,
  sharingLogoText: scheme === 'dark' ? palette.neutral[400] : palette.neutral[600],

  entryBackground: c.surfaceMuted,
  entryBorder: c.borderStrong,
  entryItemBorder: c.borderStrong,
  entryItemBackground: c.surfaceMuted,

  emotionButtonBackground: c.surface,
  emotionButtonBackgroundActive: c.text,
  emotionButtonBorder: c.border,
  emotionButtonBorderActive: c.primary,
  emotionButtonText: c.text,
  emotionButtonTextActive: c.background,

  tooltipBackground: 'rgba(0, 0, 0, 0.8)',
  tooltipText: palette.white,
  tooltipTextSecondary: palette.neutral[400],

  feedbackBoxBackground: c.warning,

  sleepQualityEmpty: scheme === 'dark' ? palette.indigo[800] : palette.indigo[100],
  sleepQualityFull: scheme === 'dark' ? palette.indigo[400] : palette.indigo[500],
});

export const buildTheme = ({
  scheme,
  materialColors,
}: {
  scheme: 'light' | 'dark';
  materialColors?: MaterialYouColors;
}) => {
  const semanticBase = scheme === 'dark' ? darkSemanticColors : lightSemanticColors;
  const semantic = materialColors ? buildMaterialYouSemanticColors(semanticBase, materialColors) : semanticBase;

  return {
    ...semantic,
    ...buildBaseTheme(semantic, scheme),
    ...buildButtonTheme(semantic),
    ...buildInputTheme(semantic),
    ...buildCardTheme(semantic),
    ...buildTabsTheme(semantic, scheme),
    scales: scales[scheme],
    tags: buildTagColors(scheme),
    palette,
  };
};

const light = buildTheme({ scheme: 'light' });
const dark = buildTheme({ scheme: 'dark' });

export type IColors = typeof light;

export default {
  light,
  dark,
};
