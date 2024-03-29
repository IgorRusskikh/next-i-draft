const config = {
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
      keyframes: {
        "rotate-card": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "33%": {
            transform: "rotate(-3deg)",
          },
          "66%": {
            transform: "rotate(3deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
            visibility: "visible",
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            visibility: "hidden",
          },
        },
      },
      animation: {
        "rotate-card": "rotate-card 3s ease-in-out infinite",
        "fade-in": "fade-in 0.2s ease-in-out forwards",
        "fade-out": "fade-out 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
