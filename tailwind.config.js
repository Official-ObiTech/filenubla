/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    extend: {},
  },
  
  plugins: [
    // function ({ addUtilities}) {
    //   const newUtilities = {
    //     "no-scrollbar::-webkit-scrollbar": {
    //       display: "none",
    //     },

    //     ".no-scrollbar":{
    //       "-ms-overflow-style":  "none",
    //       "scrollbar-width": "none",
    //     },
    //   };
    //   addUtilities(newUtilities);
    // }
  ],
}

