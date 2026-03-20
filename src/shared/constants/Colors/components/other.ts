import palette from "../palette"
import { SemanticColors } from "../semantic/light"

export const buildOtherComponentsTheme = (c: SemanticColors, scheme: "light" | "dark") => ({
  loadingIndicator: scheme === "dark" ? "#fff" : palette.neutral[500],

  keyboardToolbarIcon: palette.neutral[500],
  keyboardToolbarBackground: palette.neutral[200],

  logHeaderText: scheme === "dark" ? palette.neutral[300] : palette.neutral[600],

  logBackgroundTransparent: scheme === "dark" ? "rgba(23, 23, 23, 0)" : "rgba(245,245,245, 0)",

  logCardBackgroundTransparent: scheme === "dark" ? "rgba(38,38,38,0)" : "rgba(255,255,255, 0)",

  tagText: scheme === "dark" ? palette.neutral[200] : palette.neutral[800],

  stepperBackgroundActive: scheme === "dark" ? palette.neutral[600] : palette.neutral[700],

  bottomSheetHandle: "rgba(255, 255, 255, 0.5)",

  passcodeDotBackground: scheme === "dark" ? palette.neutral[600] : palette.neutral[300],
  passcodePadBackgroundActive: scheme === "dark" ? palette.neutral[700] : palette.neutral[400],

  tagErrorText: scheme === "dark" ? "#FECDD3" : palette.red[800],

  statisticsCardSubtitle: scheme === "dark" ? palette.neutral[400] : c.textSecondary,
  statisticsFeedbackEmojiOpacity: scheme === "dark" ? 0.6 : 1,
  statisticsCalendarDotText: scheme === "dark" ? palette.neutral[600] : c.textSecondary,
  statisticsNoDataText: scheme === "dark" ? palette.neutral[700] : c.textSecondary,

  statisticsLinePrimary: scheme === "dark" ? palette.white : palette.neutral[400],
  statisticsLineMuted: scheme === "dark" ? palette.neutral[500] : palette.neutral[300],
  statisticsLegendText: scheme === "dark" ? palette.neutral[600] : c.muted,

  statisticsTagsTrendMutedText: scheme === "dark" ? palette.neutral[500] : palette.neutral[800],

  onboardingBody: scheme === "dark" ? palette.neutral[300] : palette.neutral[700],

  onboardingTopBackground: scheme === "dark" ? palette.neutral[900] : palette.neutral[900],
  onboardingBottomBackground: scheme === "dark" ? palette.neutral[800] : palette.neutral[100],
  onboardingBottomBorder: scheme === "dark" ? palette.neutral[700] : palette.neutral[300],
  onboardingPaginationText: scheme === "dark" ? palette.neutral[300] : palette.neutral[500],
  onboardingPaginationDotActive: scheme === "dark" ? palette.neutral[300] : palette.neutral[500],
  onboardingPaginationDotInactive: scheme === "dark" ? palette.neutral[700] : palette.neutral[300],

  onboardingListItemDot: scheme === "dark" ? palette.neutral[700] : palette.neutral[500],
  onboardingListItemText: scheme === "dark" ? palette.neutral[300] : palette.neutral[700],

  onboardingPrivacyBadgeBackground: scheme === "dark" ? palette.white : palette.black,
  onboardingPrivacyBadgeVector: scheme === "dark" ? palette.neutral[900] : palette.white,

  sharingLogoBackground: scheme === "dark" ? palette.neutral[800] : palette.white,
  sharingLogoText: scheme === "dark" ? palette.neutral[400] : palette.neutral[600],

  tooltipBackground: "rgba(0, 0, 0, 0.8)",
  tooltipText: palette.white,
  tooltipTextSecondary: palette.neutral[400],

  sleepQualityEmpty: scheme === "dark" ? palette.indigo[800] : palette.indigo[100],
  sleepQualityFull: scheme === "dark" ? palette.indigo[400] : palette.indigo[500]
})
