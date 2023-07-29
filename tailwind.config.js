module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      // sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      sans: "'Montserrat', sans-serif",
      // title: "'Montserrat', sans-serif",
      title: "Belda",
    },
    extend: {
      colors: {
        glass: {
          200: "rgba(200, 200, 200, 0.20)",
          400: "rgba(200, 200, 200, 0.40)",
          500: "rgba(200, 200, 200, 0.50)",
          600: "rgba(200, 200, 200, 0.60)",
        },
        primary: "#160037",
        secondary: "#ffff",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
