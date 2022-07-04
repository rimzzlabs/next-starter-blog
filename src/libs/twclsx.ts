import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * A function to sort tailwindcss classes or utility, constructing className strings conditionally, and then solve tailwind style conflict with tailwind merge
 * @param args - tailwind utility
 * @returns
 */
export const twclsx = (...args: ClassValue[]) => twMerge(clsx(...args))
