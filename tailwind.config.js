module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Hind Siliguri",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1540px",
    },
    extend: {
      colors: {
        dark: "#292830",
        light: "#BDBDBD",
        accent: "#FF7235",
        accentHover: "#e05216",
        grey: "#F5F5F5",
      },
      backgroundImage: {
        overview: "url('/src/assets/overview/bg.svg')",
        cta: "url('/src/assets/cta/bg.svg')",
      },
    },
  },
  plugins: [],
};
