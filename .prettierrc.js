/** @type {import("prettier").Config} */
const config = {
  semi: false,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  arrowParens: 'always',
  endOfLine: 'auto',
  // from this line to bottom, it is require dev package called @trivago/prettier-plugin-sort-imports
  // remove if you don't want to use the prettier plugin sort imports
  importOrder: ['^@/styles/(.*)$', '^@/components(.*)$', '^@/(.*)$', '^[./]', '^'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}

module.exports = config
