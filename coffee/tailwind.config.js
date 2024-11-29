// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: { colors: {
//       brightColor: "#AB6B2E",
//       backgroundColor: "#FDE9CC",
//     },},
//   }, screens: {
//     // Custom breakpoint from 375px to 600px
//     'mobile': { 'min': '375px', 'max': '600px' },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightColor: "#AB6B2E",
        backgroundColor: "#FDE9CC",
      },
    },
  },
  screens: {
    // Custom breakpoint from 375px to 600px
    'mobile': {'min': '375px', 'max': '600px'},
  },
  plugins: [],
}
