import type { SemanticColors } from "../semantic/light"

export const buildCardTheme = (c: SemanticColors) => ({
  cardBackground: c.surface,
  cardBorder: c.border,
  promoCardBackground: c.surface,
  promoCardText: c.text,
  promoCardTextSecondary: c.textSecondary,
  promoCardBorder: c.border
})
