import type { SemanticColors } from '../semantic/light';

export const buildTabsTheme = (c: SemanticColors, scheme: 'light' | 'dark') => ({
  tabsBackground: scheme === 'dark' ? 'transparent' : c.background,
  tabsBorder: c.borderStrong,
  tabsIconActive: c.primary,
  tabsIconInactive: c.muted,
  tabsTextActive: c.primary,
  tabsTextInactive: c.muted,
});
