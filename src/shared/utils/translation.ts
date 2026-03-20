import * as Localization from "expo-localization"
import { I18n } from "i18n-js"
import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"
import weekOfYear from "dayjs/plugin/weekOfYear"

import en from "../../../assets/locales/en.json"

export const i18n = new I18n({
  en: require("../../../assets/locales/en.json")
})

// v4 config
i18n.enableFallback = true

// expo-localization returns array in newer versions
const systemLocale = Array.isArray(Localization.getLocales?.())
  ? Localization.getLocales()[0]?.languageTag
  : Localization.locale

i18n.locale = systemLocale ?? "en"

// exports
export const locale = i18n.locale
export const language = i18n.locale.split("-")[0]

// --- first day of week ---
const firstDayOfWeek = {
  0: [
    /* sunday */ "AG",
    "AS",
    "AU",
    "BD",
    "BR",
    "BS",
    "BT",
    "BW",
    "BZ",
    "CA",
    "CN",
    "CO",
    "DM",
    "DO",
    "ET",
    "GT",
    "GU",
    "HK",
    "HN",
    "ID",
    "IL",
    "IN",
    "JM",
    "JP",
    "KE",
    "KH",
    "KR",
    "LA",
    "MH",
    "MM",
    "MO",
    "MT",
    "MX",
    "MZ",
    "NI",
    "NP",
    "PA",
    "PE",
    "PH",
    "PK",
    "PR",
    "PT",
    "PY",
    "SA",
    "SG",
    "SV",
    "TH",
    "TT",
    "TW",
    "UM",
    "US",
    "VE",
    "VI",
    "WS",
    "YE",
    "ZA",
    "ZW"
  ],
  1: [
    /* monday */ "001",
    "AD",
    "AI",
    "AL",
    "AM",
    "AN",
    "AR",
    "AT",
    "AX",
    "AZ",
    "BA",
    "BE",
    "BG",
    "BM",
    "BN",
    "BY",
    "CH",
    "CL",
    "CM",
    "CR",
    "CY",
    "CZ",
    "DE",
    "DK",
    "EC",
    "EE",
    "ES",
    "FI",
    "FJ",
    "FO",
    "FR",
    "GB",
    "GE",
    "GF",
    "GP",
    "GR",
    "HR",
    "HU",
    "IE",
    "IS",
    "IT",
    "KG",
    "KZ",
    "LB",
    "LI",
    "LK",
    "LT",
    "LU",
    "LV",
    "MC",
    "MD",
    "ME",
    "MK",
    "MN",
    "MQ",
    "MY",
    "NL",
    "NO",
    "NZ",
    "PL",
    "RE",
    "RO",
    "RS",
    "RU",
    "SE",
    "SI",
    "SK",
    "SM",
    "TJ",
    "TM",
    "TR",
    "UA",
    "UY",
    "UZ",
    "VA",
    "VN",
    "XK"
  ],
  6: [
    /* saturday */ "AE",
    "AF",
    "BH",
    "DJ",
    "DZ",
    "EG",
    "IQ",
    "IR",
    "JO",
    "KW",
    "LY",
    "OM",
    "QA",
    "SD",
    "SY"
  ],
  5: [/* friday */ "MV"]
}

const _getFirstDayOfWeek = (region: string): number => {
  for (const dayStr in firstDayOfWeek) {
    const day = Number(dayStr)
    if (firstDayOfWeek[day].includes(region)) return day
  }
  return 1
}

// --- dayjs locales ---
const dayjs_locales = {
  ar: require("dayjs/locale/ar"),
  ca: require("dayjs/locale/ca"),
  zh: require("dayjs/locale/zh"),
  hr: require("dayjs/locale/hr"),
  cs: require("dayjs/locale/cs"),
  da: require("dayjs/locale/da"),
  nl: require("dayjs/locale/nl"),
  en: require("dayjs/locale/en"),
  fi: require("dayjs/locale/fi"),
  fr: require("dayjs/locale/fr"),
  de: require("dayjs/locale/de"),
  el: require("dayjs/locale/el"),
  he: require("dayjs/locale/he"),
  hi: require("dayjs/locale/hi"),
  hu: require("dayjs/locale/hu"),
  id: require("dayjs/locale/id"),
  it: require("dayjs/locale/it"),
  ja: require("dayjs/locale/ja"),
  ko: require("dayjs/locale/ko"),
  ms: require("dayjs/locale/ms"),
  nn: require("dayjs/locale/nn"),
  pl: require("dayjs/locale/pl"),
  pt: require("dayjs/locale/pt"),
  ro: require("dayjs/locale/ro"),
  ru: require("dayjs/locale/ru"),
  sk: require("dayjs/locale/sk"),
  es: require("dayjs/locale/es"),
  sv: require("dayjs/locale/sv"),
  th: require("dayjs/locale/th"),
  tr: require("dayjs/locale/tr"),
  uk: require("dayjs/locale/uk"),
  vi: require("dayjs/locale/vi")
}

export const initializeDayjs = () => {
  const locales = Localization.getLocales?.()
  const localeTag = locales?.[0]?.languageCode ?? "en"
  const region = locales?.[0]?.regionCode

  if (localeTag in dayjs_locales) {
    dayjs.locale(localeTag)

    // mutate locale config (internal API but still required)
    if (dayjs.Ls[localeTag] && region) {
      dayjs.Ls[localeTag].weekStart = _getFirstDayOfWeek(region)
    }
  } else {
    dayjs.locale("en")
  }

  dayjs.extend(weekOfYear)
  dayjs.extend(localizedFormat)
}

export const t = (key: keyof typeof en | string, options?: any) => i18n.t(key, options)
