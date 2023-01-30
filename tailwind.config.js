/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        display:["Satisfy","Cursive"],
        display1:['Caveat', 'cursive'],
      },
    backgroundImage:{
      'bgimg':"url('images/hbg.jpeg')",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    textShadow: {
      'default': '0 2px 0 #000',
      'md': '0 2px 2px #000',
      'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
      'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      'xl':' 0 6px 8px #fff',
   },
     screens: {
      'mobxs':'100px',
      'mobs':'200px',
      'mob':'320px',
      'xxxs':'375px',
      'xxs':'425px',

      'xs': '520px',
      // => @media (min-width: 520px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '923px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    },
  },  
  
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-textshadow')
  ],
}
