const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '480px',
      '2sxl': '1440px',
      ...defaultTheme.screens,
    },
    colors: {
      'soft-blue': '#5368df',
      'soft-red': '#fa5757',
      'grayish-blue': '#d5d7e4',
      'very-dark-blue': '#252b46d9',
      ...colors,
    },
    extend: {
      maxWidth: {
        '8xl': '90rem',
        '9xl': '95rem',
        '12xl': '115rem',
      },
      zIndex: {
        1001: '-1001',
      },
      colors: {
        sky: colors.sky,
        ...colors,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('autoprefixer'), require('@tailwindcss/forms')],
};
