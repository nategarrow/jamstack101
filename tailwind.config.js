/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#efffe2",
        "bright-green": "#EFFFE2;",
        "react-blue": "#61dafb",
        "vue-green": "#42b883",
        "svelte-orange": "#ff3e00",
        "next-blue": "#0070f3",
      },
    },
  },
  plugins: [],
}
