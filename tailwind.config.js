const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class', //开启深色模式 ,需要配合spaghetti.js 才行
  content: ['./packages/**/*.{html,js,vue,jsx}', './vuepress/**/*.{md,js,vue,jsx,html}'], //只有在 packages文件夹下的 使用的 tailwindcss 类库,才会被编译到 css里面
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif']
    },
    colors: {
      //colors 每个颜色都是一个对象,不能用单个字符串赋值,会报错的
      transparent: 'transparent',
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.amber,
      lime: colors.lime,
      green: colors.emerald,
      // green: { //这个是正确的 修改颜色的写法
      //   50: '#fff7ed',
      //   100: '#ffedd5',
      //   200: '#fed7aa',
      //   300: '#fdba74',
      //   400: '#fb923c',
      //   500: '#f97316',
      //   600: '#ea580c',
      //   700: '#c2410c',
      //   800: '#9a3412',
      //   900: '#7c2d12'
      // },
      cyan: colors.cyan,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      black: colors.black,
      white: colors.white
    }
  },
  corePlugins: {
    // preflight: false
  },
  variants: {},
  plugins: []
};
