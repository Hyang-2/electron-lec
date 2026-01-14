module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#7385FF',
        strokeGray: '#E9E9E9',
        tableHeader: '#F7F7F7',
        textGray: '#949494',
        textRed: '#FF5555',
        textBlue: '#6BC6FA',
        titleBlue: '#6B7D9D',
        bgGray: '#F7F7F7',
        bgRed: '#FBDBDB',
        bgYellow: '#FFFCEC',
        modalColor: '#6B7D9D',
        disabledColor: '#F7F7F7',
        focusColor: '#eef4ff',
        defaultValueColor: '#B6B6B6',
      },
      inset: {
        '5/12': '38.666667%',
      },
      screens: { 'custom-lg': { raw: '(min-width: 1300px) and (min-height: 950px)' } },
    },
  },
  variants: {
    extend: {},
  },
  important: true,
};
