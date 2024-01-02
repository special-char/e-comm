import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     

      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '6/3': '6 / 3',
        '3/2': '3 / 2',
        '2/4': '2 / 4',
        '9/3': '9 / 3',
        '6/2': '6 / 2',
      },

      spacing: {
        container: `max(
        0.75rem,
        calc((100vw - calc(1200px - 1rem * 2)) / 2)
      )`,

        "sm-container": `max(
          1rem,
          calc((100vw - calc(550px - 1rem * 2)) / 2)
          )`,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [],
};
export default config;
