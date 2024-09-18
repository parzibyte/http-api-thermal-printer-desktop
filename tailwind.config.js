/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './docs/.vuepress/**/*.{vue,js,ts,jsx,tsx,md}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
