/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class', // or media (automatically switch theme based on user preference theme)
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans]
      },
      colors: {
        main: {
          1: colors.zinc[50],
          1.5: colors.zinc[200],
          2: colors.zinc[400],
          3: colors.zinc[700],
          4: colors.zinc[800],
          5: colors.zinc[900]
        },
        primary: {
          0.5: colors.lime[100],
          1: colors.lime[300],
          2: colors.lime[400],
          3: colors.lime[500],
          4: colors.lime[600],
          5: colors.lime[700]
        },
        secondary: {
          1: colors.amber[300],
          2: colors.amber[400],
          3: colors.amber[500]
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
