/** @type {import('next').NextConfig} */
const path = require('path')
const nextTranslate = require("next-translate")

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "color.scss";`
  },
  ...nextTranslate()
}
