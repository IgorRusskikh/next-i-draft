import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark-gray": "#cbcbcb",
        "custom-gray": "#e2e2e2",
        "custom-light-gray": "#f0f0f0",
        "custom-extra-light-gray": "#262626",
      },
    },
  },
  plugins: [],
};
export default config;
