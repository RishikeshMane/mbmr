/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "200px",
      sm: "481px",
      ms: "600px",
      md: "769px",
      lg: "993px",
      xl: "1281px",
      "2xl": "1536px",
    },
    prefix: "tw-",
    extend: {
      colors: {
        lightGray: "#5C5C5C",
        primaryOrange: "#F47D31",
        footerBg: "#FAF6F4",
      },

      boxShadow: {
        footerInputShadow: "0px 3.33333px 3.33333px rgba(0, 0, 0, 0.25)",
        navBtnShadow: "-1px 2px 5px 0px #f47d31",
      },
      borderRadius: {
        footerBorderR: "6px 0px 0px 6px",
      },
      fontFamily: {
        mainFont: "var(--font-raleway)",
      },
    },
  },
  plugins: [],
};
