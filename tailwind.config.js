/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // For (gray and neutral) colors:
        main: {
          100: "#9CA3AF",
          500: "#374151",
          700: "#262626",
        },
        // For (green) colors:
        primary: {
          100: "#84D187",
          500: "#00B207",
          700: "#2C742F",
        },
      },
    },

    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
