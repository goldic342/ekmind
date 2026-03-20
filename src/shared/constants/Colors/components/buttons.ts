import { palette } from "../palette"
import type { SemanticColors } from "../semantic/light"

export const buildButtonTheme = (c: SemanticColors) => ({
  miniButtonBackground: c.primary,
  miniButtonText: c.primaryContrast,

  linkButtonTextPrimary: c.primary,
  linkButtonTextPrimaryDisabled: c.muted,
  linkButtonTextSecondary: c.textSecondary,
  linkButtonTextSecondaryDisabled: c.muted,
  linkButtonTextDanger: c.danger,
  linkButtonTextDangerDisabled: c.muted,

  primaryButtonBackground: c.primary,
  primaryButtonText: c.primaryContrast,
  primaryButtonBorder: c.primary,

  primaryButtonBackgroundDisabled: c.surfaceMuted,
  primaryButtonTextDisabled: c.textSecondary,
  primaryButtonBorderDisabled: c.surfaceMuted,

  secondaryButtonBackground: c.primarySoft,
  secondaryButtonText: c.primary,
  secondaryButtonBorder: c.primarySoft,
  secondaryButtonBackgroundDisabled: c.surfaceMuted,
  secondaryButtonTextDisabled: c.textSecondary,
  secondaryButtonBorderDisabled: c.surfaceMuted,

  tertiaryButtonBackground: c.surfaceMuted,
  tertiaryButtonText: c.text,
  tertiaryButtonBorder: c.surfaceMuted,
  tertiaryButtonBorderDisabled: c.surfaceMuted,

  dangerButtonBackground: c.surfaceMuted,
  dangerButtonText: c.danger,
  dangerButtonBorder: c.surfaceMuted,

  LogListAddButtonBorder: c.borderStrong,
  LogListAddButtonText: c.muted,

  checkboxBackground: c.surface,
  checkboxBorder: c.borderStrong,
  checkboxText: "#000",
  checkboxCheckedBackground: c.primary,
  checkboxCheckedBorder: c.primary,
  checkboxCheckedText: c.primaryContrast,

  switchThumbColor: c.text === "#fff" ? "#FFF" : "#333",
  promoBackground: c.primary,
  promoBorder: "rgba(255, 255, 255, 0.1)",
  promoText: palette.white
})
