export type LocaleDateFormat = 'en-US' | 'id-ID' | 'en-GB' | 'es-ES' | 'in-IN'

type DateFormat = (date: string, locale?: LocaleDateFormat, config?: Intl.DateTimeFormatOptions) => string

/**
 * A function to format date from string
 * It takes a date, locale, and config, and returns a formatted date string
 * @param date - The date to format, example given argument:
 * @example ```ts
 * const date = dateFormat('10/10/2022') // 10 Aug 2022
 * ```
 * @param locale
 * @default ```ts
 * 'en-US'
 * ```
 * @param config -
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
 * @default ```ts
 * { dateStyle: 'medium' }
 * ```
 * @returns
 */
export const dateFormat: DateFormat = (date, locale, config) => {
  return new Intl.DateTimeFormat(locale ?? 'en-US', config ?? { dateStyle: 'medium' }).format(new Date(date))
}

export const dateStringToISO = (date: string) => new Date(date).toISOString()
