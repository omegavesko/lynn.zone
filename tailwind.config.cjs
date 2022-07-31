const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      mono: [
        "Fira Code",
        "Consolas",
        "Andale Mono WT",
        "Andale Mono",
        "Lucida Console",
        "Lucida Sans Typewriter",
        "DejaVu Sans Mono",
        "Bitstream Vera Sans Mono",
        "Liberation Mono",
        "Nimbus Mono L",
        "Monaco",
        "Courier New",
        "Courier",
        "monospace",
      ],
    },
    extend: {
      colors: {
        gray: colors.neutral,
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              fontWeight: 400,
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
