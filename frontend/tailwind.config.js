/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        myRed: "var(--color-red)",
        myYellow: "var(--color-yellow)",
        myGreen: "var(--color-green)",
        myBlue: "var(--color-blue)",
      },
      listStyleType: {
        star: '"\\2605"',
      },
    },
  },
  plugins: [],
};
