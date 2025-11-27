/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        labDark: "#0A0F1F",
        labLight: "#E2E8F0",
        labBlue: "#0284C7",
        labGreen: "#10B981",
        labTeal: "#0D9488",
        labGold: "#FBBF24",
      },
      backgroundImage: {
        "gradient-ai":
          "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.25), transparent 60%), radial-gradient(circle at 90% 10%, rgba(16,185,129,0.25), transparent 60%), linear-gradient(135deg, #001219 0%, #002B5B 40%, #005F73 70%, #001219 100%)",
      },
    },
  },
  plugins: [],
};

