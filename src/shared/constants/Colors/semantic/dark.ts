import { palette } from '../palette';
import type { SemanticColors } from './light';

export const darkSemanticColors: SemanticColors = {
  text: '#fff',
  textSecondary: palette.neutral[400],
  background: '#000',
  backgroundSecondary: palette.neutral[900],
  surface: palette.neutral[900],
  surfaceMuted: palette.neutral[800],
  border: palette.neutral[800],
  borderStrong: palette.neutral[700],
  primary: '#0a84ff',
  primarySoft: palette.blue[900],
  primaryContrast: palette.white,
  danger: palette.red[500],
  dangerSoft: '#9F1239',
  success: palette.green[200],
  successSoft: '#14532D',
  warning: palette.neutral[900],
  muted: palette.neutral[500],
  overlay: 'rgba(0, 0, 0, 0.7)',
};
