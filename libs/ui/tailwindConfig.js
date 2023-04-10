const colors = require('tailwindcss/colors')

const primaryPallete = {
  DEFAULT: 'hsl(207, 99%, 32%)',
  25: 'hsl(207, 99%, 98%)',
  50: 'hsl(207, 99%, 90%)',
  100: 'hsl(207, 99%, 80%)',
  200: 'hsl(207, 99%, 70%)',
  300: 'hsl(207, 99%, 60%)',
  400: 'hsl(207, 99%, 50%)',
  500: 'hsl(207, 99%, 32%)',
  600: 'hsl(207, 99%, 24%)',
  700: 'hsl(207, 99%, 16%)',
  800: 'hsl(207, 99%, 08%)',
  900: 'hsl(207, 99%, 04%)',
}
const grayPallete = {
  DEFAULT: 'hsl(208, 10%, 32%)',
  25: 'hsl(208, 10%, 98%)',
  50: 'hsl(208, 10%, 90%)',
  100: 'hsl(208, 10%, 80%)',
  200: 'hsl(208, 10%, 70%)',
  300: 'hsl(208, 10%, 60%)',
  400: 'hsl(208, 10%, 50%)',
  500: 'hsl(208, 10%, 32%)',
  600: 'hsl(208, 10%, 24%)',
  700: 'hsl(208, 10%, 16%)',
  800: 'hsl(208, 10%, 08%)',
  900: 'hsl(208, 10%, 04%)',
}

// #FBD813
const yellowPallete = {
  DEFAULT: 'hsl(52, 100%, 50%)',
  25: 'hsl(51, 97%, 98%)',
  50: 'hsl(51, 97%, 92%)',
  100: 'hsl(51, 97%, 84%)',
  200: 'hsl(51, 97%, 75%)',
  300: 'hsl(51, 97%, 66%)',
  400: 'hsl(51, 97%, 58%)',
  500: 'hsl(51, 97%, 50%)',
  600: 'hsl(51, 97%, 38%)',
  700: 'hsl(51, 97%, 24%)',
  800: 'hsl(51, 97%, 10%)',
  900: 'hsl(51, 97%, 04%)',
}
const greenPallete = {
  DEFAULT: 'hsl(116, 100%, 27%)',
  25: 'hsl(116, 100%, 98%)',
  50: 'hsl(116, 100%, 90%)',
  100: 'hsl(116, 100%, 78%)',
  200: 'hsl(116, 100%, 66%)',
  300: 'hsl(116, 100%, 54%)',
  400: 'hsl(116, 100%, 40%)',
  500: 'hsl(116, 100%, 27%)',
  600: 'hsl(116, 100%, 21%)',
  700: 'hsl(116, 100%, 14%)',
  800: 'hsl(116, 100%, 08%)',
  900: 'hsl(116, 100%, 04%)',
}
const redPallete = {
  DEFAULT: 'hsl(340, 94%, 45%)',
  25: 'hsl(340, 94%, 98%)',
  50: 'hsl(340, 94%, 92%)',
  100: 'hsl(340, 94%, 84%)',
  200: 'hsl(340, 94%, 74%)',
  300: 'hsl(340, 94%, 64%)',
  400: 'hsl(340, 94%, 54%)',
  500: 'hsl(340, 94%, 45%)',
  600: 'hsl(340, 94%, 35%)',
  700: 'hsl(340, 94%, 22%)',
  800: 'hsl(340, 94%, 10%)',
  900: 'hsl(340, 94%, 04%)',
}

module.exports.animationConfig = {
  'spin-reverse': 'reverse-spin 1s linear infinite',
  'spin-slow': 'spin 3s linear infinite',
  'spin-12': 'spin 12s linear infinite',
  'spin-24': 'spin 24s linear infinite',
  'spin-30': 'spin 30s linear infinite',
  wiggle: 'wiggle 1s ease-in-out infinite',
  'wiggle-fade': 'wiggle-fade 1s ease-in-out infinite',
  slide: 'slide 1s ease-in-out infinite',
  'slide-left': 'slide-left 1s ease-in-out infinite',
  'slide-right': 'slide-right 1s linear infinite',
  breathe: 'breathe 6s ease-in-out infinite',
  'move-right-12': 'move-right 12s ease-in-out infinite',
  'move-right-24': 'move-right 24s ease-in-out infinite',
  'move-right-36': 'move-right 36s ease-in-out infinite',
  'move-right-48': 'move-right 48s ease-in-out infinite',
  'move-right-60': 'move-right 60s ease-in-out infinite',
}
module.exports.keyframesConfig = {
  'reverse-spin': {
    from: {
      transform: 'rotate(360deg)',
    },
  },
  wiggle: {
    '0%, 100%': { transform: 'rotate(-3deg)' },
    '50%': { transform: 'rotate(3deg)' },
  },
  'wiggle-fade': {
    '0%, 100%': { transform: 'rotate(-3deg)', opacity: 0.4 },
    '50%': { transform: 'rotate(3deg)', opacity: 0.9 },
  },

  slide: {
    '0%': { opacity: 1 },
    '100%': { transform: 'translateX(25%)' },
  },
  'move-right': {
    '0%': {
      left: '20%',
      opacity: 0,
    },
    '10%, 90%': {
      opacity: 1,
    },
    '100%': {
      left: '80%',
      opacity: 0,
    },
  },
  'slide-right': {
    '40%,60%': {
      opacity: 1,
    },
    '46%': { transform: 'translateX(25%)', opacity: 0 },
    '54%': {
      transform: 'translateX(-25%)',
      opacity: 0,
    },
  },
  'slide-left': {
    '40%,60%': {
      opacity: 1,
    },
    '46%': { transform: 'translateX(-25%)', opacity: 0 },
    '54%': {
      transform: 'translateX(25%)',
      opacity: 0,
    },
  },
  breathe: {
    '0%, 100%': { transform: 'scale(1)', opacity: 0.1 },
    '60%': {
      transform: 'scale(1.5)',
      opacity: 1,
    },
  },
}

const template = {
  DEFAULT: '40%',
  25: '98%',
  50: '95%',
  100: '92%',
  200: '86%',
  300: '78%',
  400: '66%',
  500: '50%',
  600: '36%',
  700: '24%',
  800: '12%',
  900: '04%',
}

const colorGen = ({ saturation = '100%', hue, lightness = template }) =>
  Object.entries(lightness)
    .map(([key, item]) => ({
      [key]: `hsl(${hue}, ${saturation}, ${item})`,
    }))
    .reduce((obj, item) => Object.assign(obj, item), {})

module.exports.spacingConfig = {
  112: '28rem',
  128: '32rem',
  144: '36rem',
  160: '40rem',
  192: '48rem',
}

module.exports.colorsConfig = {
  transparent: colors.transparent,
  black: colors.black,
  white: colors.white,
  primary: colors.black,
  red: redPallete,
  green: greenPallete,
  yellow: yellowPallete,
  gray: grayPallete,
  accent: colors.black,
}
