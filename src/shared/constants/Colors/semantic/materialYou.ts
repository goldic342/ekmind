import type { SemanticColors } from './light';
import { Material3Scheme } from '@pchmn/expo-material3-theme';

export const buildMaterialYouSemanticColors = (
  base: SemanticColors,
  m: Material3Scheme,
): SemanticColors => {
  const e = m.elevation ?? {};

  return {
    ...base,

    primary: m.primary,
    primaryContrast: m.onPrimary,
    primarySoft: m.primaryContainer,
    background: m.background,
    surface: m.surfaceContainerHigh,
    surfaceMuted: m.surfaceVariant,
    text: m.onBackground,
    textSecondary: m.onSurfaceVariant,
    border: m.outlineVariant,
    danger: m.error,
  };
};
