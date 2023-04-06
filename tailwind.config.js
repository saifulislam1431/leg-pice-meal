/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#d345a9",
        
"secondary": "#f71854",
        
"accent": "#098934",
        
"neutral": "#23282F",
        
"base-100": "#EDF0F2",
        
"info": "#A8DAF0",
        
"success": "#2FCA85",
        
"warning": "#B7980B",
        
"error": "#F91F06",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

