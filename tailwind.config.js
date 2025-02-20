/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateShadow: {
          "0%": {
            boxShadow: "0 0 3px 3px rgba(72, 180, 100, 0.5)"
          },
          "25%": {
            boxShadow: "-3px 0 3px 3px rgba(72, 189, 110, 0.5)"
          },
          "50%": {
            boxShadow: "0 -3px 3px 3px rgba(75, 185, 120, 0.5)"
          },
          "75%": {
            boxShadow: "3px 0 3px 3px rgba(77, 183, 120, 0.5)"
          },
          "100%": {
            boxShadow: "0 0 3px 3px rgba(80, 180, 120, 0.5)"
          },
        },
       
      },
      animation: {
        rotateShadow: "rotateShadow 3s linear infinite",
      },
    },
  },
  plugins: [],
}

