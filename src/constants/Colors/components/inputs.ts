import type { SemanticColors } from '../semantic/light';

export const buildInputTheme = (c: SemanticColors) => ({
  textInputBackground: c.surfaceMuted,
  textInputText: c.text,
  textInputPlaceholder: c.muted,
  textInputLabel: c.textSecondary,
  textInputBorder: c.surfaceMuted,
  textInputBorderHighlight: c.primary,
});
