import { TAG_COLOR_NAMES } from "../Config"
import { palette } from "./palette"
import scales from "./scales"
import { buildButtonTheme } from "./components/buttons"
import { buildInputTheme } from "./components/inputs"
import { buildCardTheme } from "./components/cards"
import { buildTabsTheme } from "./components/tabs"
import { darkSemanticColors } from "./semantic/dark"
import { lightSemanticColors, type SemanticColors } from "./semantic/light"
import { buildMaterialYouSemanticColors } from "./semantic/materialYou"
import type { Material3Scheme } from "@pchmn/expo-material3-theme"
import { buildOtherComponentsTheme } from "./components/other"

type TagColorKey = (typeof TAG_COLOR_NAMES)[number]

type TagColors = {
  [tag: TagColorKey]: {
    title: string
    dot: string
    background: string
    text: string
    border: string
  }
}

const buildTagColors = (scheme: "light" | "dark"): TagColors => {
  const tags = {} as TagColors

  TAG_COLOR_NAMES.forEach(color => {
    tags[color] =
      scheme === "dark"
        ? {
            title: color,
            dot: palette[color]["500"],
            background: palette[color]["700"],
            text: palette[color]["200"],
            border: palette[color]["600"]
          }
        : {
            title: color,
            dot: palette[color]["400"],
            background: palette[color]["200"],
            text: palette[color]["700"],
            border: palette[color]["400"]
          }
  })

  return tags
}

const buildBaseTheme = (c: SemanticColors, scheme: "light" | "dark") => ({
  text: c.text,
  textSecondary: c.textSecondary,
  background: c.background,
  backgroundSecondary: c.backgroundSecondary,
  link: c.primary,
  tint: c.primary,
  primary: c.primary,
  card: c.surface,
  border: c.border,
  notification: c.surface
})

export const buildTheme = ({
  scheme,
  materialColors
}: {
  scheme: "light" | "dark"
  materialColors?: Material3Scheme
}) => {
  const semanticBase = scheme === "dark" ? darkSemanticColors : lightSemanticColors
  const semantic = materialColors
    ? buildMaterialYouSemanticColors(semanticBase, materialColors)
    : semanticBase

  return {
    ...semantic,
    ...buildBaseTheme(semantic, scheme),
    ...buildButtonTheme(semantic),
    ...buildInputTheme(semantic),
    ...buildCardTheme(semantic),
    ...buildTabsTheme(semantic, scheme),
    ...buildOtherComponentsTheme(semantic, scheme),
    scales: scales[scheme],
    tags: buildTagColors(scheme),
    palette
  }
}

const light = buildTheme({ scheme: "light" })
const dark = buildTheme({ scheme: "dark" })

export type IColors = typeof light

export default {
  light,
  dark
}
