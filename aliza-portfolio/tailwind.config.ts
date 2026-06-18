import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      opacity: {
        6: "0.06",
        8: "0.08",
        11: "0.11",
        12: "0.12",
        14: "0.14",
        15: "0.15",
        18: "0.18",
        22: "0.22",
        24: "0.24",
        28: "0.28",
        34: "0.34",
        35: "0.35",
        38: "0.38",
        45: "0.45",
        55: "0.55",
        60: "0.60",
        72: "0.72",
        84: "0.84",
        86: "0.86"
      },
      colors: {
        ink: "#08111f",
        paper: "#f7faf8",
        electric: "#4cc9ff",
        emerald: "#42f0a1",
        gold: "#f7c66a",
        steel: "#8ba0b8"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 45px rgba(76, 201, 255, 0.22)",
        emerald: "0 0 36px rgba(66, 240, 161, 0.18)"
      },
      backgroundImage: {
        "signal-grid":
          "linear-gradient(rgba(76,201,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,255,.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
