/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.5)' },
        }
      },
      animation: {
        zoomIn: 'zoomIn 30s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

