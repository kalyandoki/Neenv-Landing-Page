import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-gold": "#D4A017",
        green: "#2ECC40",
        brown: "#C68A53",
        gray: "#A0A0A0",
      },
    },
  },
  plugins: [tailwindcss(), react()],
});
