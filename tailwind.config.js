/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'glow-blue': '0 0 10px rgba(0,170,255,0.4)',
        'glow-purple': '0 0 15px rgba(139, 92, 246, 0.5)',
      }
    },
  },
  plugins: [],
}