import { GlobalConfiguration } from "../cfg"
import { ValidLocale } from "../i18n"
import { QuartzPluginData } from "../plugins/vfile"

interface Props {
  date: Date
  locale?: ValidLocale
}

export type ValidDateType = keyof Required<QuartzPluginData>["dates"]

// Function to determine season based on month
function getSeason(month: number): string {
  if (month >= 2 && month <= 4) return "Spring"
  if (month >= 5 && month <= 7) return "Summer"
  if (month >= 8 && month <= 10) return "Autumn"
  return "Winter" // For months 11, 0, 1
}

export function getDate(cfg: GlobalConfiguration, data: QuartzPluginData): Date | undefined {
  if (!cfg.defaultDateType) {
    throw new Error(
      `Field 'defaultDateType' was not set in the configuration object of quartz.config.ts. See https://quartz.jzhao.xyz/configuration#general-configuration for more details.`,
    )
  }
  return data.dates?.[cfg.defaultDateType]
}

// Function to format date to season and year (e.g., "Autumn 2024")
export function formatSeasonYear(d: Date, locale: ValidLocale = "en-US"): string {
  const season = getSeason(d.getMonth()) // Get the season from the month
  const year = d.getFullYear() // Get the year
  return `${season} ${year}`
}

export function Date({ date, locale }: Props) {
  return <time datetime={date.toISOString()}>{formatSeasonYear(date, locale)}</time>
}
