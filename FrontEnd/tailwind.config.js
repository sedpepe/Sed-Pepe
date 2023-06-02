/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      a: ["Exo 2", "sans-serif"],
      Cool:["Righteous","cursive"],
      Monoton:["Monoton","cursive"],
      titleFont:["Saira", "sans-serif"],
    }
  },
  plugins: [],
}

