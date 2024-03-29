const {
  keyframesConfig,
  animationConfig,
  colorsConfig,
  spacingConfig,
} = require('./tailwindConfig')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    colors: colorsConfig,
    extend: {
      spacing: spacingConfig,
      animation: animationConfig,
      keyframes: keyframesConfig,
    },
  },
  plugins: [],
}
