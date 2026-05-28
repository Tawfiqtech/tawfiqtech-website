import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        bg: "#000000",
        card: "#0b0b0b",
        card2: "#0e0e0e",
        faint: "#111111",
        dim: "#888888",
        dimmer: "#3d3d3d",
        off: "#e8e8e8",
      },
      letterSpacing: {
        tighter2: "-0.038em",
        tighter3: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
