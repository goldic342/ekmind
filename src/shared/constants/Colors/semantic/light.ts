import { palette } from "../palette"

export const lightSemanticColors = {
  text: "#000",
  textSecondary: palette.neutral[500],
  background: palette.neutral[100],
  backgroundSecondary: palette.neutral[300],
  surface: palette.white,
  surfaceMuted: palette.neutral[200],
  border: palette.neutral[200],
  borderStrong: palette.neutral[300],
  primary: "#007aff",
  primarySoft: palette.blue[100],
  primaryContrast: palette.white,
  danger: palette.red[500],
  dangerSoft: palette.red[100],
  success: palette.green[900],
  successSoft: palette.green[100],
  warning: palette.amber[50],
  muted: palette.neutral[400],
  overlay: "rgba(255, 255, 255, 0.8)"
}

export type SemanticColors = typeof lightSemanticColors
