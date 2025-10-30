import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        absans: ["Absans", "sans-serif"],
 awesomeSerif: ["var(--font-awesome-serif)", "serif"],      },
    },
  },
  plugins: [],
};
export default config;
