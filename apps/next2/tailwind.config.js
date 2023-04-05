const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind')
const { join } = require('path')

const {
  presetTailwindCss
} = require('./../../libs/shared/ui/src/lib/preset-tailwindcss/')

module.exports = {
  presets: [presetTailwindCss()],
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  plugins: []
}
